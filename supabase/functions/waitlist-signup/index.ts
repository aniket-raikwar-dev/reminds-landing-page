import { createClient } from 'npm:@supabase/supabase-js@2'
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'

const jsonHeaders = { ...corsHeaders, 'Content-Type': 'application/json' }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const waitlistEmailHtml = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">
    <style type="text/css">
      :root { color-scheme: light dark; supported-color-schemes: light dark; }
      @media (prefers-color-scheme: dark) {
        body.email-body, table.email-canvas { background:#101210 !important; color:#f1eee6 !important; }
        table.email-card { background:#171917 !important; border-color:#343b35 !important; }
        .email-panel { background:#1c241e !important; border-color:#37443a !important; }
        .email-text { color:#f1eee6 !important; }
        .email-muted { color:#a9aaa7 !important; }
        .email-green { color:#8cc7a2 !important; }
        .email-purple { color:#d2c0f0 !important; }
        .email-pink { color:#efbed5 !important; }
        .email-rule, .email-footer { border-color:#394039 !important; }
        .email-rule { background:#394039 !important; }
        .cta-cell { background:#ffffff !important; background-color:#ffffff !important; }
        .cta-link { color:#14201a !important; -webkit-text-fill-color:#14201a !important; }
      }
      @media (prefers-color-scheme: light) {
        .cta-cell { background:#14201a !important; background-color:#14201a !important; }
        .cta-link { color:#ffffff !important; -webkit-text-fill-color:#ffffff !important; }
      }
      body.email-body[data-ogsc], body.email-body[data-ogsb], [data-ogsc] body.email-body, [data-ogsb] body.email-body,
      table.email-canvas[data-ogsc], table.email-canvas[data-ogsb], [data-ogsc] table.email-canvas, [data-ogsb] table.email-canvas { background:#101210 !important; color:#f1eee6 !important; }
      table.email-card[data-ogsc], table.email-card[data-ogsb], [data-ogsc] table.email-card, [data-ogsb] table.email-card { background:#171917 !important; border-color:#343b35 !important; }
      .email-panel[data-ogsc], .email-panel[data-ogsb], [data-ogsc] .email-panel, [data-ogsb] .email-panel { background:#1c241e !important; border-color:#37443a !important; }
      .email-text[data-ogsc], .email-text[data-ogsb], [data-ogsc] .email-text, [data-ogsb] .email-text { color:#f1eee6 !important; }
      .email-muted[data-ogsc], .email-muted[data-ogsb], [data-ogsc] .email-muted, [data-ogsb] .email-muted { color:#a9aaa7 !important; }
      .email-green[data-ogsc], .email-green[data-ogsb], [data-ogsc] .email-green, [data-ogsb] .email-green { color:#8cc7a2 !important; }
      .email-purple[data-ogsc], .email-purple[data-ogsb], [data-ogsc] .email-purple, [data-ogsb] .email-purple { color:#d2c0f0 !important; }
      .email-pink[data-ogsc], .email-pink[data-ogsb], [data-ogsc] .email-pink, [data-ogsb] .email-pink { color:#efbed5 !important; }
      .email-rule[data-ogsc], .email-footer[data-ogsc], [data-ogsc] .email-rule, [data-ogsc] .email-footer { border-color:#394039 !important; }
      .email-rule[data-ogsc], [data-ogsc] .email-rule { background:#394039 !important; }
      .cta-cell[data-ogsc], .cta-cell[data-ogsb], [data-ogsc] .cta-cell, [data-ogsb] .cta-cell { background:#ffffff !important; background-color:#ffffff !important; }
      .cta-link[data-ogsc], .cta-link[data-ogsb], [data-ogsc] .cta-link, [data-ogsb] .cta-link { color:#14201a !important; -webkit-text-fill-color:#14201a !important; }
    </style>
  </head>
  <body class="email-body" style="margin:0;padding:0;background:#efede6;color:#14201a;font-family:Arial,Helvetica,sans-serif;">
    <div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">You're on the Reminds waitlist. We'll email you when early access is ready.</div>
    <table class="email-canvas" role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#efede6;">
      <tr><td align="center" style="padding:28px 14px;">
        <table class="email-card" role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:620px;background:#faf8f2;border:1px solid #dfddd5;border-radius:16px;">
          <tr><td style="padding:30px 36px 23px;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"><tr>
              <td align="left" valign="middle"><a class="email-text" href="https://www.getreminds.com" style="color:#14201a;text-decoration:none;font-size:28px;line-height:1;letter-spacing:-1.5px;"><span style="font-family:Georgia,'Times New Roman',serif;font-style:italic;font-weight:400;">re</span><span style="font-family:Arial,Helvetica,sans-serif;font-weight:400;">minds</span></a></td>
              <td class="email-muted" align="right" valign="middle" style="color:#5d6660;font-size:10px;font-weight:700;letter-spacing:1.5px;">EARLY ACCESS&nbsp; / &nbsp;01</td>
            </tr></table>
          </td></tr>
          <tr><td style="padding:0 36px;"><div class="email-rule" style="height:1px;background:#d9ddd5;"></div></td></tr>
          <tr><td style="padding:40px 36px 24px;">
            <p class="email-green" style="margin:0 0 18px;color:#3e8f6b;font-size:11px;font-weight:700;letter-spacing:1.7px;">● &nbsp;REMINDS &nbsp;·&nbsp; WAITLIST CONFIRMED</p>
            <h1 class="email-text" style="margin:0;color:#14201a;font-family:Arial,Helvetica,sans-serif;font-size:44px;font-weight:400;line-height:1.08;letter-spacing:-2.6px;">You're on the list.</h1>
            <p class="email-green" style="margin:7px 0 0;color:#568d73;font-family:Georgia,'Times New Roman',serif;font-size:30px;font-style:italic;font-weight:400;line-height:1.15;letter-spacing:-.8px;">We'll be in touch.</p>
            <p class="email-muted" style="margin:24px 0 0;color:#5d6660;font-size:15px;line-height:1.7;">Thanks for joining Reminds. We're building a calmer way to plan your tasks, hear the reminders that matter, and see your day. The app is coming to iOS and Android.</p>
          </td></tr>
          <tr><td style="padding:12px 36px 0;">
            <table class="email-panel" role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#eef2ec;border:1px solid #d8e1d9;border-radius:14px;">
              <tr><td class="email-muted" colspan="3" style="padding:19px 20px 18px;color:#5d6660;font-size:10px;font-weight:700;letter-spacing:1.6px;">A DAY WITH REMINDS</td></tr>
              <tr>
                <td width="33.3%" valign="top" style="padding:0 10px 22px 20px;"><div style="height:5px;background:#568d73;margin-bottom:15px;"></div><p class="email-green" style="margin:0 0 5px;color:#568d73;font-size:10px;font-weight:700;letter-spacing:1px;">01 / PLAN</p><p class="email-text" style="margin:0;color:#14201a;font-size:14px;line-height:1.3;">Make a task</p></td>
                <td width="33.3%" valign="top" style="padding:0 10px 22px;"><div style="height:5px;background:#cbb5ec;margin-bottom:15px;"></div><p class="email-purple" style="margin:0 0 5px;color:#777082;font-size:10px;font-weight:700;letter-spacing:1px;">02 / HEAR</p><p class="email-text" style="margin:0;color:#14201a;font-size:14px;line-height:1.3;">Get reminded</p></td>
                <td width="33.3%" valign="top" style="padding:0 20px 22px 10px;"><div style="height:5px;background:#f3bdd4;margin-bottom:15px;"></div><p class="email-pink" style="margin:0 0 5px;color:#8b687b;font-size:10px;font-weight:700;letter-spacing:1px;">03 / DONE</p><p class="email-text" style="margin:0;color:#14201a;font-size:14px;line-height:1.3;">Check it off</p></td>
              </tr>
            </table>
          </td></tr>
          <tr><td style="padding:32px 36px 0;">
            <table class="email-footer" role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-top:1px solid #d9ddd5;"><tr>
              <td class="email-green" width="105" valign="top" style="padding-top:20px;color:#568d73;font-size:10px;font-weight:700;letter-spacing:1.2px;">WHAT'S NEXT</td>
              <td class="email-muted" valign="top" style="padding-top:17px;color:#5d6660;font-size:14px;line-height:1.6;">No action needed. We'll send you a note when Reminds is ready to try.</td>
            </tr></table>
          </td></tr>
          <tr><td style="padding:32px 36px 42px;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0"><tr><td class="cta-cell" style="background:#14201a;border-radius:8px;"><a class="cta-link" href="https://www.getreminds.com" style="display:inline-block;padding:14px 22px;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;">Explore Reminds &nbsp;↗</a></td></tr></table>
          </td></tr>
          <tr><td style="padding:22px 36px 28px;border-top:1px solid #d9ddd5;">
            <p class="email-text" style="margin:0 0 10px;color:#14201a;font-family:Georgia,'Times New Roman',serif;font-size:20px;font-style:italic;">Make room for what matters.</p>
            <p class="email-muted" style="margin:0;color:#788079;font-size:11px;line-height:1.7;">You're receiving this because you joined the Reminds waitlist.<br>© Reminds · Coming to iOS and Android.</p>
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>
`

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
  const resendApiKey = Deno.env.get('RESEND_API_KEY')
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

  if (!resendApiKey) {
    console.error('Waitlist function is missing the RESEND_API_KEY secret.')
    return Response.json({ ok: true, emailSent: false }, { status: 200, headers: jsonHeaders })
  }

  try {
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Reminds <hello@getreminds.com>',
        to: [email],
        subject: "You're on the Reminds waitlist",
        html: waitlistEmailHtml,
        text: "You're on the list. Thanks for joining Reminds. We're building a calmer way to plan your tasks, hear the reminders that matter, and see your day. The app is coming to iOS and Android. No action needed. We'll send you a note when Reminds is ready to try. Explore Reminds: https://www.getreminds.com",
      }),
    })

    if (!emailResponse.ok) {
      console.error('Resend email failed:', await emailResponse.text())
      return Response.json({ ok: true, emailSent: false }, { status: 200, headers: jsonHeaders })
    }

    return Response.json({ ok: true, emailSent: true }, { status: 200, headers: jsonHeaders })
  } catch (sendError) {
    console.error('Resend request failed:', sendError)
    return Response.json({ ok: true, emailSent: false }, { status: 200, headers: jsonHeaders })
  }
})
