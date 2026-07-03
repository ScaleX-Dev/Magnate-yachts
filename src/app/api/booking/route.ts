import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();

    // ── Form fields ──────────────────────────────────────────────
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
    const trip        = (data.get("trip")        as string) ?? "none";
    const tripLabel   = (data.get("tripLabel")   as string) ?? "";
    const tripPrice   = (data.get("tripPrice")   as string) ?? "";
    const docs        = (data.get("docs")        as string) ?? "[]";

    // ── Files ────────────────────────────────────────────────────
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

    // ── Build email HTML ─────────────────────────────────────────
    let docRows = "";
    try {
      const checkedDocs: string[] = JSON.parse(docs);
      const allDocs = [
        "Vessel registration",
        "Crew list",
        "Passport copies (all crew)",
        "NIL list / stores list",
        "Medical clearance / health docs",
      ];
      docRows = allDocs
        .map(d => `<tr><td style="padding:4px 8px;">${checkedDocs.includes(d) ? "✅" : "❌"}</td><td style="padding:4px 8px;color:#333;">${d}</td></tr>`)
        .join("");
    } catch {
      docRows = "";
    }

    const uploadedList = attachments.length
      ? attachments.map(a => `<li>${a.filename}</li>`).join("")
      : "<li><em>None uploaded</em></li>";

    const html = `
      <div style="font-family:sans-serif;max-width:620px;margin:0 auto;color:#1a1a1a;">
        <div style="background:#0F1D33;padding:24px 28px;border-radius:12px 12px 0 0;">
          <h2 style="margin:0;color:#fff;font-size:20px;font-weight:400;">
            ${trip !== "none" ? "Trip Reservation" : "Clearance Enquiry"} — Magnate Yachts
          </h2>
        </div>
        <div style="background:#f9f8f5;padding:28px;border-radius:0 0 12px 12px;border:1px solid #e2ddd3;border-top:none;">

          <h3 style="margin:0 0 12px;font-size:13px;text-transform:uppercase;letter-spacing:.1em;color:#888;">Vessel</h3>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr><td style="padding:4px 8px;color:#888;width:140px;">Name</td><td style="padding:4px 8px;">${vesselName}</td></tr>
            ${vesselType ? `<tr><td style="padding:4px 8px;color:#888;">Type</td><td style="padding:4px 8px;">${vesselType}</td></tr>` : ""}
            ${vesselLoa  ? `<tr><td style="padding:4px 8px;color:#888;">LOA / Flag</td><td style="padding:4px 8px;">${vesselLoa}</td></tr>` : ""}
            ${vesselCrew ? `<tr><td style="padding:4px 8px;color:#888;">Crew</td><td style="padding:4px 8px;">${vesselCrew}</td></tr>` : ""}
          </table>

          <h3 style="margin:0 0 12px;font-size:13px;text-transform:uppercase;letter-spacing:.1em;color:#888;">Arrival</h3>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr><td style="padding:4px 8px;color:#888;width:140px;">Month</td><td style="padding:4px 8px;">${month}${window ? ` · ${window}` : ""}</td></tr>
            ${lastPort ? `<tr><td style="padding:4px 8px;color:#888;">Last port</td><td style="padding:4px 8px;">${lastPort}</td></tr>` : ""}
          </table>

          ${trip !== "none" ? `
          <h3 style="margin:0 0 12px;font-size:13px;text-transform:uppercase;letter-spacing:.1em;color:#888;">Trip</h3>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr><td style="padding:4px 8px;color:#888;width:140px;">Package</td><td style="padding:4px 8px;">${tripLabel}</td></tr>
            ${tripPrice ? `<tr><td style="padding:4px 8px;color:#888;">Price</td><td style="padding:4px 8px;">${tripPrice}</td></tr>` : ""}
          </table>` : ""}

          <h3 style="margin:0 0 12px;font-size:13px;text-transform:uppercase;letter-spacing:.1em;color:#888;">Contact</h3>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr><td style="padding:4px 8px;color:#888;width:140px;">Captain</td><td style="padding:4px 8px;">${captainName}</td></tr>
            <tr><td style="padding:4px 8px;color:#888;">Email</td><td style="padding:4px 8px;"><a href="mailto:${email}">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding:4px 8px;color:#888;">Phone / Sat</td><td style="padding:4px 8px;">${phone}</td></tr>` : ""}
          </table>

          <h3 style="margin:0 0 12px;font-size:13px;text-transform:uppercase;letter-spacing:.1em;color:#888;">Documents checklist</h3>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">${docRows}</table>

          <h3 style="margin:0 0 12px;font-size:13px;text-transform:uppercase;letter-spacing:.1em;color:#888;">Uploaded files (${attachments.length})</h3>
          <ul style="margin:0 0 20px;padding-left:20px;color:#333;">${uploadedList}</ul>

          <p style="margin:0;font-size:12px;color:#aaa;">Submitted via magnateyachts.com/book</p>
        </div>
      </div>
    `;

    // ── SMTP transporter ─────────────────────────────────────────
    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST   ?? "smtp.gmail.com",
      port:   Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const subject = trip !== "none"
      ? `Trip Reservation — ${vesselName} · ${tripLabel}`
      : `Clearance Enquiry — ${vesselName}`;

    await transporter.sendMail({
      from:        `"Magnate Yachts Booking" <${process.env.SMTP_USER}>`,
      to:          "info@magnateyachts.com",
      replyTo:     email,
      subject,
      html,
      attachments,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[booking API]", err);
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 500 });
  }
}
