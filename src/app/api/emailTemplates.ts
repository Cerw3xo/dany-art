
const colorPrimary = "#d66666";
const colorAccent = "#ffd7d7";
const colorSecondaryLight = "#d7e5d5";
const colorBg = "#f7f4ee";
const colorText = "#425958";
const colorTextLight = "#526766";

export function contactOwnerTemplate(data: {
  name: string;
  email: string;
  message: string;
}) {
  const { name, email, message } = data;

  return `
  <!doctype html>
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>Nová správa</title>
    </head>
    <body style="margin:0;padding:0;background:${colorBg};-webkit-font-smoothing:antialiased;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${colorBg};padding:24px 0;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="width:600px;max-width:600px;background:#ffffff;border:1px solid ${colorSecondaryLight};border-radius:8px;overflow:hidden;">
              <tr>
                <td style="padding:18px 22px;background:${colorAccent};border-bottom:1px solid ${colorSecondaryLight};">
                  <div style="color:${colorPrimary};font-size:18px;font-weight:700;letter-spacing:0.2px;">
                    Nová správa z webu DanyssArt
                  </div>
                </td>
              </tr>

              <tr>
                <td style="padding:22px;color:${colorText};font-size:14px;line-height:1.6;">
                  <p style="margin:0 0 10px 0;color:${colorTextLight};">Přišla nová zpráva z kontaktního formuláře:</p>

                  <table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;margin:10px 0 14px 0;">
                    <tr>
                      <td style="width:120px;color:${colorTextLight};padding:4px 0;">Jméno:</td>
                      <td style="color:${colorText};font-weight:600;padding:4px 0;">${escapeHtml(name)}</td>
                    </tr>
                    <tr>
                      <td style="width:120px;color:${colorTextLight};padding:4px 0;">E‑mail:</td>
                      <td style="color:${colorText};font-weight:600;padding:4px 0;">${escapeHtml(email)}</td>
                    </tr>
                  </table>

                  <div style="margin:10px 0 6px 0;color:${colorTextLight};">Správa:</div>
                  <div style="padding:12px;border:1px solid ${colorSecondaryLight};border-radius:6px;background:${colorBg};white-space:pre-wrap;color:${colorText};">
                    ${escapeHtml(message)}
                  </div>

                  <p style="margin:16px 0 0 0;font-size:12px;color:${colorTextLight};">
                    Tento e‑mail byl vygenerován automaticky.
                  </p>
                </td>
              </tr>

              <tr>
                <td style="padding:12px 22px;background:${colorBg};color:${colorTextLight};font-size:12px;text-align:center;border-top:1px solid ${colorSecondaryLight};">
                  © ${new Date().getFullYear()} DanyssArt
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;
}

export function contactCustomerTemplate(data: {
  name: string;
}) {
  const { name } = data;

  return `
  <!doctype html>
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>Správa prijatá</title>
    </head>
    <body style="margin:0;padding:0;background:${colorBg};-webkit-font-smoothing:antialiased;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${colorBg};padding:24px 0;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="width:600px;max-width:600px;background:#ffffff;border:1px solid ${colorSecondaryLight};border-radius:8px;overflow:hidden;">
              <tr>
                <td style="padding:18px 22px;background:${colorAccent};border-bottom:1px solid ${colorSecondaryLight};">
                  <div style="color:${colorPrimary};font-size:18px;font-weight:700;letter-spacing:0.2px;">
                    Děkujeme za zprávu
                  </div>
                </td>
              </tr>

              <tr>
                <td style="padding:22px;color:${colorText};font-size:14px;line-height:1.6;">
                  <p style="margin:0 0 10px 0;">Ahoj ${escapeHtml(name)},</p>
                  <p style="margin:0 0 10px 0;">
                    děkuji za tvou zprávu – ozvu se co nejdříve. 
                  </p>

                  <div style="margin-top:14px;padding:12px;border:1px dashed ${colorSecondaryLight};border-radius:6px;color:${colorTextLight};background:${colorBg};">
                    Mezitím můžeš podívat se na e‑shop nebo portfolio na webu.
                  </div>

                  <p style="margin:16px 0 0 0;font-size:12px;color:${colorTextLight};">
                    Tento e‑mail byl vygenerován automaticky.
                  </p>
                </td>
              </tr>

              <tr>
                <td style="padding:12px 22px;background:${colorBg};color:${colorTextLight};font-size:12px;text-align:center;border-top:1px solid ${colorSecondaryLight};">
                  © ${new Date().getFullYear()} DanyssArt
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;
}


function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function orderOwnerTemplate(data: {
  orderNumber: string;
  customer: { name: string; email: string; phone?: string };
  items: Array<{ name: string; quantity: number; price: number; size?: string }>;
  delivery: { method: string; address: string; city: string; zip: string; country: string };
  note?: string;
  total: number;
}) {
  const { orderNumber, customer, items, delivery, note, total } = data;

  const money = (n: number) =>
    new Intl.NumberFormat("cs-CZ", { style: "currency", currency: "CZK" }).format(n);

  return `
    <!doctype html><html><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
    <body style="margin:0;padding:0;background:${colorBg};-webkit-font-smoothing:antialiased;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${colorBg};padding:24px 0;">
        <tr><td align="center">
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="width:600px;max-width:600px;background:#fff;border:1px solid ${colorSecondaryLight};border-radius:8px;overflow:hidden;">
            <tr>
              <td style="padding:18px 22px;background:${colorAccent};border-bottom:1px solid ${colorSecondaryLight};">
                <div style="color:${colorPrimary};font-size:18px;font-weight:700;">Nová objednávka #${orderNumber}</div>
              </td>
            </tr>
            <tr><td style="padding:22px;color:${colorText};font-size:14px;line-height:1.6;">
              <div style="margin:0 0 12px 0;color:${colorTextLight};">Zákazník</div>
              <table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;margin:0 0 16px 0;">
                <tr><td style="width:120px;color:${colorTextLight};padding:4px 0;">Jméno:</td><td style="font-weight:600;padding:4px 0;">${escapeHtml(customer.name)}</td></tr>
                <tr><td style="width:120px;color:${colorTextLight};padding:4px 0;">E‑mail:</td><td style="font-weight:600;padding:4px 0;">${escapeHtml(customer.email)}</td></tr>
                <tr><td style="width:120px;color:${colorTextLight};padding:4px 0;">Mobil:</td><td style="font-weight:600;padding:4px 0;">${escapeHtml(customer.phone || "-")}</td></tr>
              </table>
  
              <div style="margin:10px 0 8px 0;color:${colorTextLight};">Položky</div>
              <table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;border:1px solid ${colorSecondaryLight};border-radius:6px;">
                ${items.map(i => `
                  <tr>
                    <td style="padding:10px 12px;border-bottom:1px solid ${colorSecondaryLight};">${escapeHtml(i.name)} ${i.size ? `(${escapeHtml(i.size)})` : ""}</td>
                    <td style="padding:10px 12px;border-bottom:1px solid ${colorSecondaryLight};text-align:center;">${i.quantity} ks</td>
                    <td style="padding:10px 12px;border-bottom:1px solid ${colorSecondaryLight};text-align:right;">${money(i.price * i.quantity)}</td>
                  </tr>
                `).join("")}
                <tr>
                  <td colspan="2" style="padding:12px 12px;text-align:right;font-weight:700;">Celkem</td>
                  <td style="padding:12px 12px;text-align:right;font-weight:700;">${money(total)}</td>
                </tr>
              </table>
  
              <div style="margin:16px 0 8px 0;color:${colorTextLight};">Doručení</div>
              <div style="padding:12px;border:1px solid ${colorSecondaryLight};border-radius:6px;background:${colorBg};">
                <div><strong>Způsob:</strong> ${escapeHtml(delivery.method)}</div>
                <div><strong>Adresa:</strong> ${escapeHtml(delivery.address)}, ${escapeHtml(delivery.city)} ${escapeHtml(delivery.zip)}, ${escapeHtml(delivery.country)}</div>
                ${note ? `<div style="margin-top:8px;"><strong>Poznámka:</strong> ${escapeHtml(note)}</div>` : ``}
              </div>
  
              <p style="margin:16px 0 0 0;font-size:12px;color:${colorTextLight};">Automatický e‑mail.</p>
            </td></tr>
            <tr><td style="padding:12px 22px;background:${colorBg};color:${colorTextLight};font-size:12px;text-align:center;border-top:1px solid ${colorSecondaryLight};">
              © ${new Date().getFullYear()} DanyssArt
            </td></tr>
          </table>
        </td></tr>
      </table>
    </body></html>`;
}

export function orderCustomerTemplate(data: {
  orderNumber: string;
  customer: { name: string };
  items: Array<{ name: string; quantity: number; price: number; size?: string }>;
  total: number;
}) {
  const { orderNumber, customer, items, total } = data;
  const money = (n: number) =>
    new Intl.NumberFormat("cs-CZ", { style: "currency", currency: "CZK" }).format(n);

  return `
    <!doctype html><html><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
    <body style="margin:0;padding:0;background:${colorBg};-webkit-font-smoothing:antialiased;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${colorBg};padding:24px 0;">
        <tr><td align="center">
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="width:600px;max-width:600px;background:#fff;border:1px solid ${colorSecondaryLight};border-radius:8px;overflow:hidden;">
            <tr>
              <td style="padding:18px 22px;background:${colorAccent};border-bottom:1px solid ${colorSecondaryLight};">
                <div style="color:${colorPrimary};font-size:18px;font-weight:700;">Potvrdenie objednávky #${orderNumber}</div>
              </td>
            </tr>
            <tr><td style="padding:22px;color:${colorText};font-size:14px;line-height:1.6;">
              <p style="margin:0 0 10px 0;">Ahoj ${escapeHtml(customer.name)}, děkujeme za objednávku!</p>
              <div style="margin:10px 0 8px 0;color:${colorTextLight};">Rekapitulace</div>
              <table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;border:1px solid ${colorSecondaryLight};border-radius:6px;">
                ${items.map(i => `
                  <tr>
                    <td style="padding:10px 12px;border-bottom:1px solid ${colorSecondaryLight};">${escapeHtml(i.name)} ${i.size ? `(${escapeHtml(i.size)})` : ""}</td>
                    <td style="padding:10px 12px;border-bottom:1px solid ${colorSecondaryLight};text-align:center;">${i.quantity} ks</td>
                    <td style="padding:10px 12px;border-bottom:1px solid ${colorSecondaryLight};text-align:right;">${money(i.price * i.quantity)}</td>
                  </tr>
                `).join("")}
                <tr>
                  <td colspan="2" style="padding:12px 12px;text-align:right;font-weight:700;">Celkem</td>
                  <td style="padding:12px 12px;text-align:right;font-weight:700;">${money(total)}</td>
                </tr>
              </table>
  
              <div style="margin-top:16px;padding:12px;border:1px dashed ${colorSecondaryLight};border-radius:6px;color:${colorTextLight};background:${colorBg};">
                Platba převodem: <strong>3018883028/3030</strong> (Air Bank)<br/>
                Variabilní symbol: <strong>${orderNumber}</strong>
              </div>
  
              <p style="margin:16px 0 0 0;font-size:12px;color:${colorTextLight};">Automatický e‑mail.</p>
            </td></tr>
            <tr><td style="padding:12px 22px;background:${colorBg};color:${colorTextLight};font-size:12px;text-align:center;border-top:1px solid ${colorSecondaryLight};">
              © ${new Date().getFullYear()} DanyssArt
            </td></tr>
          </table>
        </td></tr>
      </table>
    </body></html>`;
}