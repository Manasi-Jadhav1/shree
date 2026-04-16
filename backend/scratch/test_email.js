const { sendEmail } = require('../utils/email');
require('dotenv').config({ path: '../.env' });

async function test() {
  console.log("🚀 Starting email test...");
  console.log("Configured User:", process.env.EMAIL_USER || "None (using Ethereal)");

  const recipient = process.env.EMAIL_USER || "test@example.com";
  
  const success = await sendEmail(
    recipient,
    "🧪 Test Email from Shree Mangalmurti System",
    "<h1>It Works!</h1><p>This is a test email to verify your Nodemailer configuration.</p>"
  );

  if (success) {
    console.log("✅ Test PASSED: Email logic executed successfully.");
  } else {
    console.log("❌ Test FAILED: Check logs above for detailed errors.");
  }
  
  process.exit(success ? 0 : 1);
}

test();
