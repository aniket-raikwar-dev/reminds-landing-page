import { createClient } from 'npm:@supabase/supabase-js@2'
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'

const jsonHeaders = { ...corsHeaders, 'Content-Type': 'application/json' }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  if (request.method !== 'POST') {
    return Response.json({ error: 'Method not allowed.' }, { status: 405, headers: jsonHeaders })
  }

  let body
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400, headers: jsonHeaders })
  }

  if (typeof body?.email !== 'string') {
    return Response.json({ error: 'Enter a valid email address.' }, { status: 400, headers: jsonHeaders })
  }

  const email = body.email.trim().toLowerCase()
  if (email.length > 320 || !emailPattern.test(email)) {
    return Response.json({ error: 'Enter a valid email address.' }, { status: 400, headers: jsonHeaders })
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  if (!supabaseUrl || !serviceRoleKey) {
    console.error('Waitlist function is missing Supabase server credentials.')
    return Response.json({ error: 'Waitlist is temporarily unavailable.' }, { status: 500, headers: jsonHeaders })
  }

  const admin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  })
  const { error } = await admin
    .from('waitlist_signups')
    .upsert({ email }, { onConflict: 'email', ignoreDuplicates: true })

  if (error) {
    console.error('Waitlist insert failed:', error.message)
    return Response.json({ error: 'Could not join the waitlist. Try again.' }, { status: 500, headers: jsonHeaders })
  }

  return Response.json({ ok: true }, { status: 200, headers: jsonHeaders })
})
