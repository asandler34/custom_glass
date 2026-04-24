import { BUSINESS, PUBLIC_CONTACT_EMAIL } from "@/lib/business";
import { getSiteUrl } from "@/lib/site";
import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  zip?: string;
  projectType?: string;
  message?: string;
  sourcePage?: string;
  formStartedAt?: number;
  website?: string; // honeypot
};

function validEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function trim(input: unknown): string {
  return typeof input === "string" ? input.trim() : "";
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;
    const name = trim(body.name);
    const phone = trim(body.phone);
    const email = trim(body.email);
    const zip = trim(body.zip);
    const projectType = trim(body.projectType);
    const message = trim(body.message);
    const sourcePage = trim(body.sourcePage) || "/";
    const website = trim(body.website);
    const formStartedAt = Number(body.formStartedAt || 0);

    // Spam checks.
    if (website) return NextResponse.json({ ok: true });
    if (Number.isFinite(formStartedAt) && formStartedAt > 0) {
      const elapsed = Date.now() - formStartedAt;
      if (elapsed < 1500) {
        return NextResponse.json({ error: "Too fast" }, { status: 400 });
      }
    }

    if (!name || !email || !projectType || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (!validEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || PUBLIC_CONTACT_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "no-reply@exquisitecustomglass.com";
    const base = getSiteUrl();

    if (apiKey) {
      const text = [
        "New lead submission",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "(not provided)"}`,
        `Zip: ${zip || "(not provided)"}`,
        `Project type: ${projectType}`,
        `Message: ${message}`,
        `Source page: ${sourcePage}`,
        `Site: ${base}`,
      ].join("\n");

      const html = `
        <h2>New lead submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "(not provided)"}</p>
        <p><strong>Zip:</strong> ${zip || "(not provided)"}</p>
        <p><strong>Project type:</strong> ${projectType}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
        <p><strong>Source page:</strong> ${sourcePage}</p>
      `;

      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: email,
          subject: `New lead: ${projectType} (${name})`,
          text,
          html,
        }),
      });

      if (!resendRes.ok) {
        const details = await resendRes.text();
        console.error("Resend failure", details);
        return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
      }
    } else {
      // Safe fallback for local/dev preview without email provider.
      console.info("[lead:fallback]", { name, email, phone, zip, projectType, sourcePage, message });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact submission error", error);
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 });
  }
}
