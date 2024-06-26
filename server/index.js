const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

const whitelist = ["https://brainz-mehc.onrender.com"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, "../")));

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
  const key = process.env.api_key;
  let url = `https://${process.env.domain}.freshdesk.com/api/v2/tickets`;
  const options = {
    headers: {
      Authorization: "Basic " + btoa(key + ":x"),
      "content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post(url, ticketData, options);

    res.status(200).send(response.data);
  } catch (error) {
    console.log(error);
    res.status(400).send("Failed");
  }
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`My Server running at ${process.env.PORT || 8080}`);
});
