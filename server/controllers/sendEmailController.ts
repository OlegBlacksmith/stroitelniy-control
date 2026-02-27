import Email from "~/../../shared/models/Email.model";
import { createSmtpTransporter } from "../utils/transporter";

export const sendEmailController = async (
  email: Email,
  emailType: "order" | "partner",
) => {
  const config = useRuntimeConfig();

  // 🔥 ЛОГ ДАННЫХ ФОРМЫ
  console.log('📤 Форма данные:', {
    name: email.name,
    phone: email.phone,
    email: email.email,
    connectionType: email.connectionType
  });

  try {
    const transporter = createSmtpTransporter(emailType);

    const mailOptions = {
      from: `"${email.name}" <${emailType === "partner" ? config.partnerEmail! : config.orderEmail!}>`,
      to: emailType === "partner" ? config.partnerEmail! : config.orderEmail!,
      replyTo: email.email,
      subject: `${emailType === "partner" ? "💼 Заявка партнёра" : "📞 Требуется консультация"} от ${email.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2d56e8;">Новая заявка <strong>${emailType.toUpperCase()}</strong></h2>
          
          <div style="background: #f8f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>👤 Имя:</strong> ${email.name.replace(/</g, '&lt;')}</p>
            <p><strong>📱 Телефон:</strong> ${email.phone}</p>
            <p><strong>✉️ Email:</strong> <a href="mailto:${email.email}">${email.email}</a></p>
            <p><strong>💬 Как связаться:</strong> ${email.connectionType === "Phone" ? "Телефон" : "Email"}</p>
          </div>
          
          <p><em>Заявка с сайта</em></p>
        </div>
      `,
      text: `Новая заявка ${emailType}:
        
Имя: ${email.name}
Телефон: ${email.phone}
Email: ${email.email}
Связь: ${email.connectionType}`,
    };

    // 🔥 ЛОГ ПЕРЕД ОТПРАВКОЙ
    console.log('📧 mailOptions:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject,
      hasHtml: !!mailOptions.html
    });

    await transporter.sendMail(mailOptions);
    console.log(`✅ Письмо ${emailType} отправлено на ${mailOptions.to}`);
    return { success: true, message: "Письмо отправлено!" };
  } catch (err: any) {
    console.error("❌ Email Error:", err.message);
    return {
      success: false,
      error: err.response?.message || err.message || "Не удалось отправить письмо",
    };
  }
};

