// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// javascript;

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  module.exports = (email, username, message, cost, subject, anexo) => {
    // console.log("ele vem até aqui");
    let msg = {
      to: "eng.rsgomes@gmail.com", // Change to your recipient
      from: "eng.rsgomes@gmail.com", // Change to your verified sender
      subject: `Novo contato ${username}`,
      text: `Nome: ${username} \n\nEmail: ${email} \n \nAssunto: ${subject} \n \nFatura: ${cost} \n \nMenssagem: ${message}`,
      // html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };

    sgMail
      .send(msg)
      .then(() => {
        res.send(JSON.stringify({ success: true }));
      })
      .catch((err) => {
        console.log(err);
        res.send(JSON.stringify({ success: false }));
      });
  };
};

// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// module.exports = (email, username, message, cost, subject, anexo) => {
//   // console.log("ele vem até aqui");
//   let msg = {
//     to: "eng.rsgomes@gmail.com", // Change to your recipient
//     from: "eng.rsgomes@gmail.com", // Change to your verified sender
//     subject: `Novo contato ${username}`,
//     text: `Nome: ${username} \n\nEmail: ${email} \n \nAssunto: ${subject} \n \nFatura: ${cost} \n \nMenssagem: ${message}`,
//     // html: "<strong>and easy to do anywhere, even with Node.js</strong>",
//   };

//   sgMail
//     .send(msg)
//     .then(() => {
//       console.log("Email sent");
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };
