require("dotenv").config();

const ses = require("./ses");
const { createServer } = require("http");
const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const path = require("path");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);
const app = express();
const dev = app.get("env") !== "production";

let secrets;
if (process.env.NODE_ENV === "production" || app.get("env") === "production") {
  secrets = process.env;
} else {
  secrets = require("./secrets.json");
}

if (!dev) {
  app.disable("x-powered-by");
  app.use(compression());
  app.use(express.json());
  app.use(morgan("common"));

  app.use(express.static(path.resolve(__dirname, "build")));

  app.post("/send", (req, res) => {
    console.log("POST /send");
    const name = req.body.name;
    const message = req.body.message;
    const email = req.body.email;
    const phone = req.body.phone;
    if (
      !name ||
      !message ||
      !email ||
      name.startsWith(" ") ||
      email.startsWith(" ")
    ) {
      return res.json({ success: false });
    }
    if (!phone) {
      ses
        .sendEmail("adirdayan@gmail.com", name, message, email)
        .then(results => {
          console.log("results: ", results);
          res.json({ success: true });
        })
        .catch(err => {
          console.log("error from sendEmail", err);
          res.json({ success: false });
        });
    } else {
      ses
        .sendEmail("adirdayan@gmail.com", name, message, email, phone)
        .then(() => {
          res.json({ success: true });
        })
        .catch(err => {
          console.log("error from sendEmail", err);
          res.json({ success: false });
        });
    }
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
