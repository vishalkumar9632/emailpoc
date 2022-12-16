import nodemailer from "nodemailer";
import { buildSendMail } from "mailing-core";

const transport = nodemailer.createTransport({
  // pool: true,
  // host: "app.peopleblox.io",
  // port: 465,
  // secure: true,
  service:"gmail",
  auth: {
    user: "vishal@litmusblox.io",
    pass: "bqnpqwqufpjdeomk", 
  },
});
const sendMail = buildSendMail({
  transport,
  defaultFrom: "vishal@litmusblox.io",
  configPath: "./mailing.config.json",
});
export default sendMail;
