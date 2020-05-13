require("dotenv").config();

const { createServer } = require("http");
const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const path = require("path");
const nodemailer = require("nodemailer");
let mailOptions;
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);
const axios = require("axios");

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);
let transporter;
const app = express();
const dev = app.get("env") !== "production";

const obj = {
  subject: "Send with node.js",
  heading: "welcome to blabla",
  description: "crazyha description"
};

let htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <body>
    <h1>${obj.heading}<h1>

    <p>${obj.description}</p>

    </body>
    </html>`;

// let secrets;
//
// if (process.env.NODE_ENV === "production") {
//   secrets = process.env;
// } else {
//   secrets = require("./secrets.json");
// }

if (!dev) {
  app.disable("x-powered-by");
  app.use(compression());
  app.use(express.json());
  app.use(morgan("common"));

  app.use(express.static(path.resolve(__dirname, "build")));

  app.post("/send", (req, res) => {
    const callMethod = () => {
      axios({
        method: "post",
        url: "https://api.sendgrid.com/v3/mail/send",
        headers: {
          Authorization:
            "Bearer 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"
        },
        data: {
          personalization: [
            {
              to: [
                {
                  email: "adirdayan@gmail.com",
                  name: "Adir Dayan RECIPIENT"
                }
              ],
              subject: `${obj.subject}`
            }
          ],
          from: {
            email: "adir@adirrrr.com",
            name: "Adir Dayan SENDER"
          },
          content: [{ type: "text/html", value: htmlTemplate }]
        }
      })
        .then(res => console.log("res: ", res))
        .catch(err => console.log("err: ", err));
    };
    callMethod();
    // const msg = {
    //   to: "adirdayan@gmail.com",
    //   from: "adirdayan@gmail.com",
    //   subject: "Sending with Twilio SendGrid is Fun",
    //   text: "and easy to do anywhere, even with Node.js",
    //   html: "<strong>and easy to do anywhere, even with Node.js</strong>"
    // };
    // sgMail.send(msg);
    // console.log("message sent");
    // if (!req.body.name || !req.body.message || !req.body.email) {
    //   res.json({ success: false });
    // }
    // transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: process.env.EMAIL,
    //     pass: process.env.PASSWORD
    //   }
    // });
    // if (req.body.phone) {
    //   mailOptions = {
    //     from: "adirdayan@gmail.com",
    //     to: "adirdayan@gmail.com",
    //     subject: `Bapaume website mail from ${req.body.name}`,
    //     text: `Message: \n ${req.body.message} \n \n Contact information: \n my email is ${req.body.email} \n my phone number is ${req.body.phone} \n my name is ${req.body.name}`
    //   };
    // } else {
    //   mailOptions = {
    //     from: "adirdayan@gmail.com",
    //     to: "adirdayan@gmail.com",
    //     subject: `Bapaume website mail from ${req.body.name}`,
    //     text: `Message: \n ${req.body.message} \n \n Contact information: \n my email is ${req.body.email} \n my name is ${req.body.name}`
    //   };
    // }
    //
    // transporter.sendMail(mailOptions, function(err, data) {
    //   if (err) {
    //     console.log("err from send mail: ", err);
    //     res.json({ success: false });
    //   } else {
    //     console.log("email sent");
    //     res.json({ success: true });
    //   }
    // });
  });

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

if (dev) {
  app.use(morgan("dev"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

const server = createServer(app);
server.listen(PORT, err => {
  if (err) throw err;

  console.log(`server started on port ${PORT}`);
});
