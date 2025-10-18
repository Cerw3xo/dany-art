import { NextResponse } from "next/server";
import { Resend } from "resend";
import { orderOwnerTemplate, orderCustomerTemplate } from "@/app/api/emailTemplates";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    try {
        const body = await req.json();

        if (!body?.customer?.email || !Array.isArray(body?.items)) {
            return NextResponse.json({ error: "Bad request" }, { status: 400 });
        }


        await resend.emails.send({
            from: process.env.RESEND_FROM!,
            to: process.env.OWNER_EMAIL!,
            subject: `Nová objednávka #${body.orderNumber}`,
            html: orderOwnerTemplate(body)
        })


        await resend.emails.send({
            from: process.env.RESEND_FROM!,
            to: body.customer.email,
            subject: `Potvrdenie objednávky #${body.orderNumber}`,
            html: orderCustomerTemplate({
                orderNumber: body.orderNumber,
                customer: { name: body.customer.name },
                items: body.items,
                total: body.total
            }),
        })
        return NextResponse.json({ ok: true });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}


