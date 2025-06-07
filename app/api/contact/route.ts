import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Make sure RESEND_API_KEY is set in your environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // You can change this to your verified sender
      to: 'tom.bertomeu.pro@gmail.com',
      subject: `Nouveau message de ${name}`,
      replyTo: email,
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
      <body style="background:#f6f8fa;padding:40px 0;font-family:Segoe UI,Arial,sans-serif;">
        <div style="max-width:480px;margin:auto;background:#fff;border-radius:18px;box-shadow:0 2px 16px rgba(30,64,175,0.08);padding:32px 28px 24px 28px;">
          <h2 style="color:#2563eb;font-size:1.6rem;margin-bottom:18px;font-weight:700;letter-spacing:-1px;">Nouveau message du portfolio</h2>
          <div style="margin-bottom:16px;">
            <span style="display:inline-block;width:90px;color:#2563eb;font-weight:600;">Nom :</span>
            <span style="color:#222;font-size:1rem;">${name}</span>
          </div>
          <div style="margin-bottom:16px;">
            <span style="display:inline-block;width:90px;color:#2563eb;font-weight:600;">Email :</span>
            <span style="color:#222;font-size:1rem;">${email}</span>
          </div>
          <div style="margin-bottom:0;">
            <span style="display:inline-block;width:90px;color:#2563eb;font-weight:600;vertical-align:top;">Message :</span>
            <span style="color:#222;font-size:1rem;white-space:pre-line;">${message.replace(/\n/g, '<br/>')}</span>
          </div>
        </div>
        <div style="text-align:center;color:#b4b4b4;font-size:0.9rem;margin-top:18px;">Envoyé depuis le portfolio de Tom Bertomeu</div>
      </body>
      `
    });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
