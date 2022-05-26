const sgMail = require("@sendgrid/mail");
const sendgridkey = process.env.SENDGRID_API_KEY;

class SendGridEmailHelper {
  async sendMail() {
    sgMail.setApiKey(sendgridkey);
    const msg = {
      to: "eng.rsgomes@gmail.com",
      from: "eng.rsgomes@gmail.com",
      subject: "Test Mail",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
    try {
      let result = await sgMail.send(msg);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
const sendGridEmailHelper = new SendGridEmailHelper();
export default sendGridEmailHelper;
