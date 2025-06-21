import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactTemplate } from "@/components/template-contact";

const resend = new Resend(process.env.RESEND_MAMADOUSYDEV_API_KEY);

export async function POST(req: Request) {
  const { fullname, email, subject, message } = await req.json();

  if (!fullname || !email || !subject || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  
  const { error } = await resend.emails.send({
    from: "Portfolio Mamadou Sy <noreply@mamadousy.dev>",
    to: process.env.ADMIN_EMAIL || "mamadousy1254@gmail.com",
    subject: `Nouveau contact projet: ${subject}`,
    react: ContactTemplate({ 
      fullname, 
      email, 
      subject, 
      message 
    }) as React.ReactElement,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Envoyer un email de confirmation au contact
  const { error: confirmationError } = await resend.emails.send({
    from: "Portfolio Mamadou Sy <noreply@mamadousy.dev>",
    to: email,
    subject: "Confirmation de votre message - Portfolio Mamadou Sy",
    react: ContactTemplate({ 
      fullname, 
      email, 
      subject, 
      message, 
      isConfirmation: true 
    }) as React.ReactElement,
  });

  if (confirmationError) {
    console.error("Erreur lors de l'envoi de l'email de confirmation:", confirmationError);
  }

  return NextResponse.json({ message: "Votre message a été envoyé avec succès" }, { status: 200 });
}
