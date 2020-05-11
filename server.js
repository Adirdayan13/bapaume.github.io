require("dotenv").config();

const { createServer } = require("http");
const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const path = require("path");
const nodemailer = require("nodemailer");
let mailOptions;

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

const app = express();
const dev = app.get("env") !== "production";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

if (!dev) {
  app.disable("x-powered-by");
  app.use(compression());
  app.use(express.json());
  app.use(morgan("common"));

  app.use(express.static(path.resolve(__dirname, "build")));

  app.post("/send", (req, res) => {
    console.log("req.body: ", req.body);
    if (!req.body.name || !req.body.message || !req.body.email) {
      console.log("!req.body.name || !req.body.message || !req.body.email");
      res.json({ success: false });
    }
    if (req.body.phone) {
      mailOptions = {
        from: "adirdayan@gmail.com",
        to: "adirdayan@gmail.com",
        subject: `Bapaume website mail from ${req.body.name}`,
        text: `Message: \n ${req.body.message} \n \n Contact information: \n my email is ${req.body.email} \n my phone number is ${req.body.phone} \n my name is ${req.body.name}`
      };
    } else {
      mailOptions = {
        from: "adirdayan@gmail.com",
        to: "adirdayan@gmail.com",
        subject: `Bapaume website mail from ${req.body.name}`,
        text: `Message: \n ${req.body.message} \n \n Contact information: \n my email is ${req.body.email} \n my name is ${req.body.name}`
      };
    }

    transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
        console.log("err from send mail: ", err);
        res.json({ success: false });
      } else {
        console.log("email sent");
        res.json({ success: true });
      }
    });
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
