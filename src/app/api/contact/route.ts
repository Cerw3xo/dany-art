import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactCustomerTemplate, contactOwnerTemplate } from "../emailTemplates";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(res: Request) {
    try {
        const body = await res.json()
        const { name, email, message } = body || {};
        if (!name || !email || !message) {
            return NextResponse.json({ error: "Bad request" }, { status: 400 });
        }

        await resend.emails.send({
            from: process.env.RESEND_FROM!,
            to: process.env.OWNER_EMAIL!,
            subject: `Nová správa ${name}`,
            html: contactOwnerTemplate({ name, email, message })
        })

        await resend.emails.send({
            from: process.env.RESEND_FROM!,
            to: email,
            subject: "✅ Správa prijatá",
            html: contactCustomerTemplate({ name }),
        });

        return NextResponse.json({ ok: true })
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: " Server error" }, { status: 500 })
    }
}