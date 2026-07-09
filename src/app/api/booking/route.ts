import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/* ── WhatsApp Cloud API ────────────────────────────────────────────
   Set these env vars to enable automatic WhatsApp notifications:
   WA_ACCESS_TOKEN    — permanent system user token from Meta Business
   WA_PHONE_NUMBER_ID — WhatsApp Business phone number ID (not the number)
   WA_TO_NUMBER       — recipient number in E.164 format e.g. 94769850115
──────────────────────────────────────────────────────────────────── */
async function sendWhatsAppNotification(body: string) {
  const token    = process.env.WA_ACCESS_TOKEN;
  const phoneId  = process.env.WA_PHONE_NUMBER_ID;
  const toNumber = process.env.WA_TO_NUMBER;
  if (!token || !phoneId || !toNumber) return;

  await fetch(`https://graph.facebook.com/v20.0/${phoneId}/messages`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: toNumber,
      type: "text",
      text: { body },
    }),
  });
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();

    const vesselName  = (data.get("vesselName")  as string) ?? "";
    const vesselType  = (data.get("vesselType")  as string) ?? "";
    const vesselLoa   = (data.get("vesselLoa")   as string) ?? "";
    const vesselCrew  = (data.get("vesselCrew")  as string) ?? "";
    const captainName = (data.get("captainName") as string) ?? "";
    const email       = (data.get("email")       as string) ?? "";
    const phone       = (data.get("phone")       as string) ?? "";
    const month       = (data.get("month")       as string) ?? "";
    const window      = (data.get("window")      as string) ?? "";
    const lastPort    = (data.get("lastPort")    as string) ?? "";
    const lastPortsRaw = (data.get("lastPorts") as string) ?? "[]";
    const trip        = (data.get("trip")        as string) ?? "none";
    const tripLabel   = (data.get("tripLabel")   as string) ?? "";
    const tripPrice   = (data.get("tripPrice")   as string) ?? "";
    const docs        = (data.get("docs")        as string) ?? "[]";

    const files = data.getAll("documents") as File[];
    const attachments = await Promise.all(
      files
        .filter(f => f.size > 0)
        .map(async (file) => ({
          filename: file.name,
          content: Buffer.from(await file.arrayBuffer()),
          contentType: file.type || "application/octet-stream",
        }))
    );

    const ALL_DOCS = [
      "Vessel registration",
      "Crew list",
      "Passport copies (all crew)",
      "NIL list / stores list",
      "Medical clearance / health docs",
    ];
    let checkedDocs: string[] = [];
    try { checkedDocs = JSON.parse(docs); } catch { /* empty */ }
    let lastPorts: string[] = [];
    try { lastPorts = JSON.parse(lastPortsRaw); } catch { /* empty */ }

    const isTrip = trip !== "none";
    const enquiryType = isTrip ? "Trip Reservation" : "Clearance Enquiry";
    const submittedAt = new Date().toLocaleString("en-GB", {
      day: "numeric", month: "long", year: "numeric",
      hour: "2-digit", minute: "2-digit", timeZone: "Asia/Colombo",
    });

    // ── Row helpers ───────────────────────────────────────────────
    const row = (label: string, value: string) =>
      value ? `
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #f0ede8;width:140px;vertical-align:top;">
            <span style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#999;">${label}</span>
          </td>
          <td style="padding:10px 0 10px 20px;border-bottom:1px solid #f0ede8;vertical-align:top;">
            <span style="font-size:14px;color:#1a1a1a;line-height:1.5;">${value}</span>
          </td>
        </tr>` : "";

    const section = (title: string, content: string) => `
      <div style="margin-bottom:28px;">
        <div style="border-left:3px solid #C4924A;padding-left:12px;margin-bottom:14px;">
          <span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.14em;color:#C4924A;">${title}</span>
        </div>
        <table style="width:100%;border-collapse:collapse;">${content}</table>
      </div>`;

    // ── Sections ──────────────────────────────────────────────────
    const vesselSection = section("Vessel", [
      row("Name", vesselName),
      row("Type", vesselType),
      row("LOA / Flag", vesselLoa),
      row("Crew on board", vesselCrew),
    ].join(""));

    const arrivalSection = section("Arrival", [
      row("Month / Window", `${month}${window ? ` &middot; ${window}` : ""}`),
      row("Last port", lastPort),
      lastPorts.length > 0 ? row("Last ports visited", lastPorts.map((p, i) => `${i + 1}. ${p}`).join("<br>")) : "",
    ].join(""));

    const tripSection = isTrip ? section("Excursion", [
      row("Package", tripLabel),
      row("Price", tripPrice),
    ].join("")) : "";

    const contactSection = section("Contact", [
      row("Captain", captainName),
      row("Email", `<a href="mailto:${email}" style="color:#C4924A;text-decoration:none;">${email}</a>`),
      row("Phone / Sat", phone),
    ].join(""));

    const docChecklist = ALL_DOCS.map(d => {
      const ready = checkedDocs.includes(d);
      return `
        <tr>
          <td style="padding:8px 0;border-bottom:1px solid #f0ede8;width:28px;vertical-align:middle;">
            <span style="display:inline-block;width:18px;height:18px;border-radius:4px;background:${ready ? "#C4924A" : "#f0ede8"};text-align:center;line-height:18px;font-size:10px;color:${ready ? "#fff" : "#bbb"};">
              ${ready ? "✓" : "–"}
            </span>
          </td>
          <td style="padding:8px 0 8px 12px;border-bottom:1px solid #f0ede8;">
            <span style="font-size:13px;color:${ready ? "#1a1a1a" : "#aaa"};">${d}</span>
          </td>
        </tr>`;
    }).join("");

    const docsSection = section("Documents ready", docChecklist);

    const uploadSection = attachments.length > 0 ? section(
      `Uploaded files (${attachments.length})`,
      attachments.map(a => `
        <tr>
          <td style="padding:7px 0;border-bottom:1px solid #f0ede8;">
            <span style="font-size:13px;color:#1a1a1a;">&#128206; ${a.filename}</span>
          </td>
        </tr>`).join("")
    ) : "";

    // ── Full email ────────────────────────────────────────────────
    const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f3ef;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f3ef;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#0F1D33;padding:36px 40px 28px;border-radius:8px 8px 0 0;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <span style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.18em;color:#C4924A;">Magnate Yachts &middot; Sri Lanka</span>
                  <br>
                  <span style="font-size:22px;font-weight:400;color:#ffffff;letter-spacing:0.01em;line-height:1.4;display:block;margin-top:8px;">${enquiryType}</span>
                  <span style="font-size:14px;color:rgba(255,255,255,0.45);display:block;margin-top:4px;font-family:Arial,sans-serif;">${vesselName}</span>
                </td>
                <td align="right" valign="top">
                  <span style="display:inline-block;background:rgba(196,146,74,0.15);border:1px solid rgba(196,146,74,0.3);border-radius:20px;padding:5px 14px;font-size:11px;color:#C4924A;font-family:Arial,sans-serif;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;">${isTrip ? "Trip + Clearance" : "Clearance Only"}</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:36px 40px;border-left:1px solid #e8e4de;border-right:1px solid #e8e4de;">

            ${vesselSection}
            ${arrivalSection}
            ${tripSection}
            ${contactSection}
            ${docsSection}
            ${uploadSection}

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#faf9f6;padding:20px 40px;border:1px solid #e8e4de;border-top:none;border-radius:0 0 8px 8px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <span style="font-size:11px;color:#bbb;font-family:Arial,sans-serif;">Submitted via magnateyachts.com/book</span>
                  <br>
                  <span style="font-size:11px;color:#bbb;font-family:Arial,sans-serif;">${submittedAt} (Sri Lanka time)</span>
                </td>
                <td align="right">
                  <a href="mailto:${email}" style="font-size:12px;color:#C4924A;text-decoration:none;font-family:Arial,sans-serif;">Reply to captain &rarr;</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST   ?? "smtp.gmail.com",
      port:   Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const subject = isTrip
      ? `[Trip] ${vesselName} — ${tripLabel} · ${month}`
      : `[Clearance] ${vesselName} — ${month}`;

    await transporter.sendMail({
      from:        `"Magnate Yachts" <${process.env.SMTP_USER}>`,
      to:          "info@magnateyachts.com",
      replyTo:     email,
      subject,
      html,
      attachments,
    });

    // ── WhatsApp notification (server-side, no documents) ─────────
    const waLines: string[] = [
      `*${enquiryType} — Magnate Yachts*`,
      ``,
      `*Vessel:* ${vesselName}${vesselType ? ` (${vesselType})` : ""}`,
    ];
    if (vesselLoa)  waLines.push(`*LOA / Flag:* ${vesselLoa}`);
    if (vesselCrew) waLines.push(`*Crew:* ${vesselCrew}`);
    waLines.push(``);
    waLines.push(`*Arrival:* ${month}${window ? ` · ${window}` : ""}`);
    if (lastPort) waLines.push(`*Last port:* ${lastPort}`);
    if (lastPorts.length > 0) {
      waLines.push(`*Last ${lastPorts.length} port(s) visited:*`);
      lastPorts.forEach((p, i) => waLines.push(`  ${i + 1}. ${p}`));
    }
    if (isTrip) waLines.push(`*Trip:* ${tripLabel}${tripPrice ? ` — ${tripPrice}` : ""}`);
    waLines.push(``);
    waLines.push(`*Captain:* ${captainName}`);
    waLines.push(`*Email:* ${email}`);
    if (phone) waLines.push(`*Phone/Sat:* ${phone}`);
    waLines.push(``);
    waLines.push(`*Documents ready:*`);
    const ALL_DOC_LABELS = [
      "Vessel registration", "Crew list", "Passport copies (all crew)",
      "NIL list / stores list", "Medical clearance / health docs",
    ];
    ALL_DOC_LABELS.forEach(d => waLines.push(`${checkedDocs.includes(d) ? "✅" : "❌"} ${d}`));
    if (attachments.length > 0) {
      waLines.push(``);
      waLines.push(`📎 ${attachments.length} document(s) attached to email`);
    }
    waLines.push(``);
    waLines.push(`_Submitted ${submittedAt} (SL time)_`);

    await sendWhatsAppNotification(waLines.join("\n")).catch(() => {/* non-fatal */});

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[booking API]", err);
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 500 });
  }
}
