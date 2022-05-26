import { Client } from "@sendgrid/client";

const sgMail = require("@sendgrid/mail");

// Test setClient() method
sgMail.setClient(new Client());

// Test setApiKey() method
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Test setSubstitutionWrappers() method
sgMail.setSubstitutionWrappers("{{", "}}");

// Test send() method
sgMail
  .send({
    from: "eng.rsgomes@gmail.com",
    to: "Some One <eng.rsgomes@gmail.com>",
    cc: { name: "Some One", email: "eng.rsgomes@gmail.com" },
    subject: "Test Email",
    text: "This is a test email",
    html: "<p>This is a test email</p>",
  })
  .then(
    (result: any) => {
      console.log("Sent email");
    },
    (err: any) => {
      console.error(err);
    }
  );
