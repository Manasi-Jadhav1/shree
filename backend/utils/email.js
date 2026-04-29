const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

exports.sendEmail = async (to, subject, htmlContent) => {
  try {
    let transporter;

    // Use dedicated 'gmail' service which automatically configures host/port
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        },
        connectionTimeout: 10000, 
      });
    } else {
      console.warn("⚠️ EMAIL_USER or EMAIL_PASS not set in .env! Generating ethereal account for testing.");
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    }

    // Verify connection configuration
    await transporter.verify();

    const info = await transporter.sendMail({
      from: `"Shree Mangalmurti Krushi Seva" <${process.env.EMAIL_USER || 'no-reply@shreemangalmurti.com'}>`,
      to,
      subject,
      html: htmlContent,
    });

    if (!process.env.EMAIL_USER) {
      console.log("\x1b[33m%s\x1b[0m", "📬 EMAIL PREVIEW available at:");
      console.log("\x1b[36m%s\x1b[0m", nodemailer.getTestMessageUrl(info));
    } else {
      console.log(`✅ Email successfully sent to ${to} via Gmail Service.`);
    }

    return true;
  } catch (error) {
    console.error("❌ Nodemailer Error:", error.message);
    
    if (error.code === 'EAUTH') {
      console.error("👉 AUTHENTICATION FAILED: Check your EMAIL_USER and EMAIL_PASS in .env.");
      console.error("👉 NOTE: You MUST use an 'App Password' from Google, not your regular password.");
      console.error("👉 Link: https://myaccount.google.com/apppasswords");
    } else if (error.code === 'ESOCKET') {
      console.error("👉 NETWORK ISSUE: Could not connect to Gmail SMTP. Check your internet or firewall.");
    }
    
    return false;
  }
};
