import { createTransport, Transporter } from "nodemailer";
import { useRuntimeConfig } from "#imports";

interface SmtpCredentials {
  user: string;
  pass: string;
  fromEmail: string;
}

export const createSmtpTransporter = (
  type: "order" | "partner",
): Transporter => {
  const config = useRuntimeConfig();

  console.log(`🔍 DEBUG ${type}:`);
  console.log("config.orderSmtpUser:", config.orderSmtpUser);
  console.log("config.orderSmtpPass:", !!config.orderSmtpPass);
  console.log("process.env.ORDER_SMTP_USER:", process.env.ORDER_SMTP_USER);
  console.log("config.partnerSmtpUser:", config.partnerSmtpUser);

  const smtpCredentials: SmtpCredentials = type === "partner"
    ? {
        user: config.partnerSmtpUser || process.env.PARTNER_SMTP_USER!,
        pass: config.partnerSmtpPass || process.env.PARTNER_SMTP_PASS!,
        fromEmail: config.partnerEmail || "info@stroy-kontrol-ufa.ru",
      }
    : {
        user: config.orderSmtpUser || process.env.ORDER_SMTP_USER!,
        pass: config.orderSmtpPass || process.env.ORDER_SMTP_PASS!,
        fromEmail: config.orderEmail || "orders@stroy-kontrol-ufa.ru",
      };

  console.log("Final smtpCredentials.user:", smtpCredentials.user);

  if (!smtpCredentials.user || !smtpCredentials.pass) {
    throw new Error(`SMTP credentials missing for ${type}`);
  }

  return createTransport({
    host: config.smtpHost || process.env.SMTP_HOST || "mail.hosting.reg.ru",
    port: Number(config.smtpPort || process.env.SMTP_PORT || 587),
    secure: false,
    auth: {
      user: smtpCredentials.user,
      pass: smtpCredentials.pass,
    },
    tls: { rejectUnauthorized: false },
  });
};

