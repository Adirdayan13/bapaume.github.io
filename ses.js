const aws = require("aws-sdk");

let secrets;
if (process.env.NODE_ENV === "production") {
  secrets = process.env; // in prod the secrets are environment variables
} else {
  secrets = require("./secrets"); // in dev they are in secrets.json which is listed in .gitignore
}

const ses = new aws.SES({
  accessKeyId: secrets.AWS_KEY,
  secretAccessKey: secrets.AWS_SECRET,
  region: "eu-west-1"
});

exports.sendEmail = function(recipient, name, message, senderEmail, phone) {
  if (phone === undefined) {
    return ses
      .sendEmail({
        Source: "Bapaume website <adirdayan@gmail.com>",
        Destination: {
          ToAddresses: [recipient]
        },
        Message: {
          Body: {
            Html: {
              Charset: "UTF-8",
              Data: `<h1>${message}<h1> \n
                <h3>Contact information</h3> \n
                <ul>
                    <li>Send from: ${name}</li>
                    <li>Email: ${senderEmail}</li>
                </ul>`
            }
          },
          Subject: {
            Data: `${name} sent you mail from bapaume website`
          }
        }
      })
      .promise();
  } else {
    return ses
      .sendEmail({
        Source: "Request from my website <adirdayan@gmail.com>",
        Destination: {
          ToAddresses: [recipient]
        },
        Message: {
          Body: {
            Html: {
              Charset: "UTF-8",
              Data: `<h1>${message}<h1> \n
                  <h3>Contact information</h3> \n
                  <ul>
                      <li>Send from: ${name}</li>
                      <li>Email: ${senderEmail}</li>
                      <li>Phone: ${phone}</li>
                  </ul>`
            }
          },
          Subject: {
            Data: `${name} sent you mail from bapaume website`
          }
        }
      })
      .promise();
  }
};
