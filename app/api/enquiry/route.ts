import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.formData();
    const email = data.get("email");

    if (!email || typeof email !== "string") {
      return new Response(
        JSON.stringify({ error: "Email required" }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `US Academy <${process.env.MAIL_USER}>`,
      to: email,
      subject: "Enquiry Received  - US Academy",
      text:
        "Thank you for contacting US Academy. We have received your enquiry and will contact you shortly.",
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    );
  }
}
