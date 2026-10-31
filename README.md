# Reminds landing page
React 18 + Vite + GSAP (ScrollTrigger) + Framer Motion + Supabase.
```
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and set `VITE_SUPABASE_URL` and
`VITE_SUPABASE_PUBLISHABLE_KEY` from the Supabase project settings. These are
client-side values; never put a Supabase secret or service-role key in a `VITE_`
variable.

The waitlist uses the `waitlist-signup` Supabase Edge Function. The function
normalizes addresses, ignores duplicates, and writes to `public.waitlist_signups`.
The table is protected by RLS and has no anonymous or authenticated access; only
the server-side function uses the service-role key.

To deploy the backend, install/use the Supabase CLI, link this folder to the
project, apply the migration, then deploy the function:

```sh
npx supabase login
npx supabase link --project-ref YOUR_PROJECT_REF
npx supabase db push
npx supabase functions deploy waitlist-signup
```

After changing `.env.local`, restart Vite. Verify a signup in the Supabase Table
Editor under `public.waitlist_signups`.
