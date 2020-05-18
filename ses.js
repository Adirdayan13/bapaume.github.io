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
  region: "us-east-1"
});

exports.sendEmail = function(recipient, name, message, senderEmail, phone) {
  if (phone === undefined) {
    return ses
      .sendEmail({
        Source: "souterrains-bapaume.com <adirdayan@gmail.com>",
        Destination: {
          ToAddresses: [recipient]
        },
        Message: {
          Body: {
            Html: {
              Charset: "UTF-8",
              Data: `<h1>${message}<h1> \n
                <h3>Contact info</h3> \n
                <ul>
                    <li>Envoyé par: ${name}</li>
                    <li>Email: ${senderEmail}</li>
                </ul>`
            }
          },
          Subject: {
            Data: `${name} vous a envoyé un email depuis le site souterrains-bapaume.com`
          }
        }
      })
      .promise();
  } else {
    return ses
      .sendEmail({
        Source: "souterrains-bapaume.com <adirdayan@gmail.com>",
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
                      <li>Envoyé par: ${name}</li>
                      <li>Email: ${senderEmail}</li>
                      <li>Téléphone: ${phone}</li>
                  </ul>`
            }
          },
          Subject: {
            Data: `${name} vous a envoyé un email depuis le site souterrains-bapaume.com`
          }
        }
      })
      .promise();
  }
};
