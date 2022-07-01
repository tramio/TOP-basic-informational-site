const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`App listening to port ${port}!`);
});

const handleBrokenSendFile = (err, res) => {
  res.sendFile(path.join(__dirname, "/404.html"));
};

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/index.html"), (err) =>
    handleBrokenSendFile(err, res)
  );
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/index.html"), (err) =>
    handleBrokenSendFile(err, res)
  );
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/about.html"), (err) =>
    handleBrokenSendFile(err, res)
  );
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/contact-me.html"), (err) =>
    handleBrokenSendFile(err, res)
  );
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/404.html"), (err) => {
    if (err) { console.log(err) }
  });
});
