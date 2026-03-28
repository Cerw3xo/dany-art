
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
      <title>Nová zpráva</title>
    </head>
    <body style="margin:0;padding:0;background:${colorBg};-webkit-font-smoothing:antialiased;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${colorBg};padding:24px 0;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="width:600px;max-width:600px;background:#ffffff;border:1px solid ${colorSecondaryLight};border-radius:8px;overflow:hidden;">
              <tr>
                <td style="padding:18px 22px;background:${colorAccent};border-bottom:1px solid ${colorSecondaryLight};">
                  <div style="color:${colorPrimary};font-size:18px;font-weight:700;letter-spacing:0.2px;">
                    Nová zpráva z webu DanyssArt
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

                  <div style="margin:10px 0 6px 0;color:${colorTextLight};">Zpráva:</div>
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
  const customerName = escapeHtml(name || "").trim();
  const greeting = customerName ? `Dobrý den, ${customerName},` : "Dobrý den,";

  return `
  <!doctype html>
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>Děkuji za Vaši zprávu</title>
    </head>
    <body style="margin:0;padding:0;background:${colorBg};-webkit-font-smoothing:antialiased;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${colorBg};padding:24px 0;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="width:600px;max-width:600px;background:#ffffff;border:1px solid ${colorSecondaryLight};border-radius:8px;overflow:hidden;">
              <tr>
                <td style="padding:18px 22px;background:${colorAccent};border-bottom:1px solid ${colorSecondaryLight};">
                  <div style="color:${colorPrimary};font-size:18px;font-weight:700;letter-spacing:0.2px;">
                    Děkuji za Vaši zprávu!
                  </div>
                </td>
              </tr>

              <tr>
                <td style="padding:22px;color:${colorText};font-size:14px;line-height:1.6;">
                  <p style="margin:0 0 12px 0;font-size:16px;font-weight:700;color:${colorText};">
                    ${greeting}
                  </p>
                  <p style="margin:0 0 12px 0;font-size:16px;font-weight:700;color:${colorText};">
                    děkuji za Vaši zprávu, moc si toho vážím a ozvu se Vám co nejdříve.
                  </p>

                  <div style="margin-top:16px;padding:12px;border:1px solid ${colorSecondaryLight};border-radius:10px;color:${colorText};background:${colorSecondaryLight};text-align:center;font-size:16px;font-weight:700;line-height:1.3;">
                    Mezitím se můžete podívat na můj e-shop nebo portfolio na webu
                    <br/>
                    www.danyssart.cz
                  </div>

                  <p style="margin:18px 0 0 0;font-size:14px;color:${colorTextLight};text-align:center;">
                    Tento e-mail je generovaný automaticky, proto na něj prosím neodpovídejte.
                  </p>

                  <p style="margin:18px 0 0 0;font-size:16px;font-weight:700;color:${colorText};">
                    Přeji Vám krásný den,
                    <br/>
                    Daniela Konečná – DanyssArt
                  </p>
                </td>
              </tr>

              <tr>
                <td style="padding:12px 22px;background:${colorBg};color:${colorTextLight};font-size:12px;text-align:center;border-top:1px solid ${colorSecondaryLight};line-height:1.4;">
                  © ${new Date().getFullYear()} Daniela Konečná – danyss_art – grafický design a ruční tvorba
                  <br/>
                  www.danyssart.cz
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
  const itemsSubtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryPrice = Math.max(total - itemsSubtotal, 0);

  return `
    <!doctype html><html><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
    <body style="margin:0;padding:0;background:${colorBg};-webkit-font-smoothing:antialiased;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${colorBg};padding:24px 0;">
        <tr><td align="center">
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="width:600px;max-width:600px;background:#fff;border:1px solid ${colorSecondaryLight};border-radius:8px;overflow:hidden;">
            <tr>
              <td style="padding:18px 22px;background:${colorAccent};border-bottom:1px solid ${colorSecondaryLight};">
                <div style="color:${colorPrimary};font-size:18px;font-weight:700;">Potvrzení objednávky #${orderNumber}</div>
              </td>
            </tr>
            <tr><td style="padding:22px;color:${colorText};font-size:14px;line-height:1.6;">
              <p style="margin:0 0 10px 0;font-size:15px;color:${colorText};font-weight:600;">
                Ahoj ${escapeHtml(customer.name)}, moc děkuji za tvou objednávku a podporu mé tvorby! ♥
              </p>
              <div style="margin:10px 0 8px 0;color:${colorText};font-size:16px;font-weight:700;">Níže najdeš její shrnutí:</div>
              <table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;border:1px solid ${colorSecondaryLight};border-radius:8px;overflow:hidden;">
                ${items.map(i => `
                  <tr>
                    <td style="padding:12px 16px;border-bottom:1px solid ${colorSecondaryLight};font-size:16px;color:${colorText};">${escapeHtml(i.name)} ${i.size ? `(${escapeHtml(i.size)})` : ""}</td>
                    <td style="padding:12px 16px;border-bottom:1px solid ${colorSecondaryLight};text-align:center;font-size:16px;color:${colorText};white-space:nowrap;">${i.quantity} ks</td>
                    <td style="padding:12px 16px;border-bottom:1px solid ${colorSecondaryLight};text-align:right;font-size:16px;color:${colorText};white-space:nowrap;">${money(i.price * i.quantity)}</td>
                  </tr>
                `).join("")}
                <tr>
                  <td style="padding:12px 16px;border-bottom:1px solid ${colorSecondaryLight};font-size:16px;font-weight:700;color:${colorText};">Doprava</td>
                  <td style="padding:12px 16px;border-bottom:1px solid ${colorSecondaryLight};"></td>
                  <td style="padding:12px 16px;border-bottom:1px solid ${colorSecondaryLight};text-align:right;font-size:16px;font-weight:700;color:${colorText};white-space:nowrap;">${money(deliveryPrice)}</td>
                </tr>
                <tr>
                  <td style="padding:14px 16px;"></td>
                  <td style="padding:14px 16px;text-align:center;font-size:20px;font-weight:700;line-height:1.1;color:${colorText};white-space:nowrap;">Celkem</td>
                  <td style="padding:14px 16px;text-align:right;font-size:20px;font-weight:700;line-height:1.1;color:${colorText};white-space:nowrap;">${money(total)}</td>
                </tr>
              </table>
  
              <div style="margin-top:12px;padding:12px 14px;border:1px dashed ${colorSecondaryLight};border-radius:8px;color:${colorText};background:${colorSecondaryLight};text-align:center;font-size:20px;font-weight:700;line-height:1.3;">
                Další e-mail s platebními údaji ti dorazí během chvilky.
              </div>
  
              <p style="margin:14px 8px 0 8px;font-size:14px;color:${colorTextLight};text-align:center;">
                Tento e-mail je generovaný automaticky, proto na něj prosím neodpovídej.
                <br/>
                V případě dotazů mi napiš na: <strong>danyss.art@email.cz</strong>
              </p>
            </td></tr>
            <tr><td style="padding:12px 22px;background:${colorBg};color:${colorTextLight};font-size:13px;text-align:center;border-top:1px solid ${colorSecondaryLight};line-height:1.4;">
              © ${new Date().getFullYear()} Daniela Konečná - danyss_art - grafický design a ruční tvorba
              <br/>
              www.danyssart.cz
            </td></tr>
          </table>
        </td></tr>
      </table>
    </body></html>`;
}
