const app = express();

app.use(require("cors")());
app.use(express.json());

const upload = require("multer")();

export default function handler(request, response) {
  app.post("api/mandador", upload.single("anexo"), (request, res, next) => {
    const username = request.body.username;
    // console.log({ username, email });
    const email = request.body.email;
    const subject = request.body.subject;
    const cost = request.body.cost;
    const message = request.body.message;
    const anexo = request.file;

    response.status(200).send(`Hello ${email}!`);
  });
}
