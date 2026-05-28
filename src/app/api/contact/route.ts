import { NextResponse } from 'next/server'

/* ─────────────────────────────────────────────────────────────────
   GoHighLevel endpoints (server-side only — no CORS issues here)
   ───────────────────────────────────────────────────────────────── */
const GHL_FORM_SUBMIT = 'https://backend.leadconnectorhq.com/forms/submit'
const GHL_WEBHOOK     = 'https://services.leadconnectorhq.com/hooks/NENWomMIhhGYXZOT4o5g/webhook-trigger/a0500e95-cfde-4596-957f-a6f1c0661330'
const GHL_FORM_ID     = 'SIl7bmSlwaJAAx4ZkIA4'
const GHL_LOCATION_ID = 'NENWomMIhhGYXZOT4o5g' // extracted from webhook URL

export async function POST(request: Request) {
  /* ── Parse body ── */
  let body: Record<string, string>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request body' }, { status: 400 })
  }

  const { firstName, lastName, phone, email, businessType, message } = body

  if (!firstName || !email) {
    return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 422 })
  }

  /* Build a combined notes string for GHL */
  const notes = [
    businessType ? `Verslo tipas: ${businessType}` : null,
    message      ? `Žinutė: ${message}` : null,
  ].filter(Boolean).join('\n\n')

  const results: Record<string, string | number> = {}

  /* ── Method 1: GHL native form submit API (creates contact directly) ── */
  try {
    const res = await fetch(GHL_FORM_SUBMIT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        formId: GHL_FORM_ID,
        location: { id: GHL_LOCATION_ID },
        /* Top-level standard fields */
        firstName,
        lastName,
        email,
        phone,
        /* Structured field array — uses GHL form field IDs */
        fieldsToSubmitInOrder: ['first_name', 'last_name', 'email', 'phone', 'message'],
        fields: [
          { id: 'first_name', fieldValueType: '', value: firstName },
          { id: 'last_name',  fieldValueType: '', value: lastName  },
          { id: 'email',      fieldValueType: '', value: email     },
          { id: 'phone',      fieldValueType: '', value: phone     },
          { id: 'message',    fieldValueType: '', value: notes     },
        ],
        /* Page context */
        pageDetails: {
          url:   'https://oaklines.com/kontaktai',
          title: 'Oaklines – Kontaktai',
        },
      }),
    })

    results.formApi = res.status
  } catch (err) {
    results.formApi = 'network-error'
    console.error('[contact] GHL form API error:', err)
  }

  /* ── Method 2: GHL inbound webhook (workflow trigger + backup) ── */
  try {
    const res = await fetch(GHL_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName,
        lastName,
        phone,
        email,
        businessType: businessType || '',
        message:      message      || '',
        notes,
        source: 'Oaklines Website',
      }),
    })

    results.webhook = res.status
  } catch (err) {
    results.webhook = 'network-error'
    console.error('[contact] GHL webhook error:', err)
  }

  /* ── Respond ── */
  const ok =
    results.formApi === 200 ||
    results.formApi === 201 ||
    (typeof results.webhook === 'number' && results.webhook >= 200 && results.webhook < 300)

  return NextResponse.json({ success: ok, results }, { status: ok ? 200 : 502 })
}
