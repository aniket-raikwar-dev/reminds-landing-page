import { createClient } from 'npm:@supabase/supabase-js@2'
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'

const jsonHeaders = { ...corsHeaders, 'Content-Type': 'application/json' }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const waitlistEmailHtml = `
<!doctype html>
<html lang="en">
  <body style="margin:0;padding:0;background-color:#f1eee6;font-family:Arial,Helvetica,sans-serif;color:#14201a;">
    <div style="display:none;font-size:1px;color:#f1eee6;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">
      You're on the Reminds waitlist. Get product updates and early-access news as we build.
    </div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f1eee6;">
      <tr>
        <td align="center" style="padding:32px 14px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;background-color:#faf8f2;border:1px solid #e5e0d4;border-radius:22px;overflow:hidden;">
            <tr>
              <td align="center" style="padding:28px 28px 22px;">
                <a href="https://www.getreminds.com" style="display:inline-block;padding:9px 16px;border-radius:10px;background-color:#14201a;color:#ffffff;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:24px;line-height:1;letter-spacing:-1px;">
                  <span style="font-family:Georgia,'Times New Roman',serif;font-style:italic;font-weight:400;">re</span><span style="font-family:Arial,Helvetica,sans-serif;font-style:normal;font-weight:400;">minds</span>
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding:0 28px 26px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#b79ceb;border-radius:18px;">
                  <tr>
                    <td style="padding:22px 20px 20px;">
                      <p style="margin:0 0 15px;color:#14201a;font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;">A calmer way to keep your day on track</p>
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#faf8f2;border-radius:14px;">
                        <tr>
                          <td width="58" align="center" valign="middle" style="padding:15px 0 15px 15px;">
                            <table role="presentation" width="42" height="42" cellspacing="0" cellpadding="0" border="0" style="background-color:#f6bcd6;border-radius:13px;">
                              <tr><td align="center" valign="middle" style="color:#14201a;font-size:20px;font-weight:700;">✓</td></tr>
                            </table>
                          </td>
                          <td valign="middle" style="padding:14px 12px;">
                            <p style="margin:0 0 4px;color:#788079;font-size:10px;font-weight:700;letter-spacing:1px;">TODAY · 6:30 PM</p>
                            <p style="margin:0;color:#14201a;font-family:Georgia,'Times New Roman',serif;font-size:20px;line-height:1.2;">Remember what matters.</p>
                          </td>
                          <td width="58" align="center" valign="middle" style="padding:12px 14px 12px 0;">
                            <table role="presentation" width="42" height="42" cellspacing="0" cellpadding="0" border="0" style="background-color:#3e8f6b;border-radius:50%;">
                              <tr><td align="center" valign="middle" style="color:#ffffff;font-size:18px;font-weight:700;">♪</td></tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <p style="margin:13px 0 0;color:#14201a;font-size:12px;line-height:1.5;">Tasks · timeline · calendar · sounds that get through</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:0 34px 30px;">
                <span style="display:inline-block;padding:7px 13px;border-radius:20px;background-color:#f6bcd6;color:#14201a;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">You're on the waitlist</span>
                <h1 style="margin:20px 0 13px;color:#14201a;font-family:Georgia,'Times New Roman',serif;font-size:40px;font-weight:400;line-height:1.08;letter-spacing:-1px;">You're on the Reminds waitlist.</h1>
                <p style="margin:0;color:#5d6660;font-size:16px;line-height:1.7;">
                  Thanks for joining the waitlist. Reminds is a task app for iOS and Android that brings tasks, reminders, a timeline, and a calendar together. Choose a sound for important reminders—even when Do Not Disturb is on.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:0 34px 30px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#efeade;border:1px solid #e5e0d4;border-radius:15px;">
                  <tr>
                    <td style="padding:19px 20px;">
                      <p style="margin:0 0 6px;color:#14201a;font-size:14px;font-weight:700;">What happens next?</p>
                      <p style="margin:0;color:#5d6660;font-size:14px;line-height:1.6;">No action is needed. We'll send occasional product updates and let you know when early access is available.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:0 34px 34px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td align="center" style="border-radius:24px;background-color:#14201a;">
                      <a href="https://www.getreminds.com" style="display:inline-block;padding:14px 23px;border:1px solid #14201a;border-radius:24px;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;">See what we're building&nbsp; →</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:21px 34px 25px;border-top:1px solid #e5e0d4;">
                <p style="margin:0;color:#788079;font-size:12px;line-height:1.7;">
                  You're receiving this because you joined the Reminds early access waitlist.<br>
                  © Reminds · Made for the things you don't want to forget.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
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
        text: "You're on the Reminds waitlist. Thanks for joining. Reminds is a task app for iOS and Android that brings tasks, reminders, a timeline, and a calendar together. Choose a sound for important reminders—even when Do Not Disturb is on. No action is needed. We'll send occasional product updates and let you know when early access is available. Visit https://www.getreminds.com",
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
