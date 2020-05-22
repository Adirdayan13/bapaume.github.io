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
                    <li><h3>Envoyé par: ${name}</h3></li>
                    <li><h3>Email: ${senderEmail}</h3></li>
                </ul> \n
                <h4>Ne répondez pas à cet e-mail, répondez à l'e-mail à partir des coordonnées.<h4>`
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
                      <li><h3>Envoyé par: ${name}</h3></li>
                      <li><h3>Email: ${senderEmail}</h3></li>
                      <li><h3>Téléphone: ${phone}</h3></li>
                  </ul> \n
                  <h4>Ne répondez pas à cet e-mail, répondez à l'e-mail à partir des coordonnées.</h4>`
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
