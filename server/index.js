const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
//app.use(express.static("src"));
app.use(express.static(path.join(__dirname, "../")));

// app.get("*.jsx", (req, res, next) => {
//   res.setHeader("Content-Type", "text/javascript");
//   next();
// });

app.post("/sentmail", async (req, res) => {
  console.log(req.body);
  const { email, subject, message } = req.body;

  const ticketData = {
    description: message,
    subject: subject,
    email: email,
    priority: 1,
    status: 2,
  };
  const key = "UYx1RjRPQDjrk2tUqM";
  let url = `https://brainz.freshdesk.com/api/v2/tickets`;
  const options = {
    headers: {
      Authorization: "Basic " + btoa(key + ":x"),
      "content-Type": "application/json",
    },

    // body: JSON.stringify(contactData),
  };
  try {
    const response = await axios.post(url, ticketData, options);
    console.log(response.data);
    res.status(200).send(response.data);
  } catch (error) {
    console.log(error);
    res.status(400).send("Failed");
  }
});

app.listen(process.env.PORT || 8080, () => {
  console.log(
    `Middleware Server listening at ${process.env.PORT || 8080}... 👍`
  );
});
