require("dotenv").config();

const { createServer } = require("http");
const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const path = require("path");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);
let msg;

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);
const app = express();
const dev = app.get("env") !== "production";

if (!dev) {
  app.disable("x-powered-by");
  app.use(compression());
  app.use(express.json());
  app.use(morgan("common"));

  app.use(express.static(path.resolve(__dirname, "build")));

  app.post("/send", (req, res) => {
    try {
      if (
        !req.body.name ||
        !req.body.message ||
        !req.body.email ||
        req.body.name.startsWith(" ") ||
        req.body.email.startsWith(" ")
      ) {
        return res.json({ success: false });
      }
      if (req.body.phone) {
        msg = {
          to: "adirdayan@gmail.com",
          from: "adirdayan@gmail.com",
          subject: `${req.body.name} sent you message from bapaume website`,
          text: `<h1>${req.body.message}</h1>`,
          html: `<strong><h2>${req.body.message}</h2></strong>
        \n
        <h3>Contact information</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Phone number: ${req.body.phone}</li>
        <ul>`
        };
      } else {
        msg = {
          to: "adirdayan@gmail.com",
          from: "adirdayan@gmail.com",
          subject: `${req.body.name} sent you message from bapaume website`,
          text: `<h1>${req.body.message}</h1>`,
          html: `<strong><h2>${req.body.message}</h2></strong>
        \n
        <h3>Contact information</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        <ul>`
        };
      }
      sgMail.send(msg);
      res.json({ success: true });
    } catch (error) {
      console.log("error: ", error);
      res.json({ success: false });
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
