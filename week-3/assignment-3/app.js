const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, My Server!");
});

app.get("/getData", (req, res) => {
  const number = req.query.number;
  if (!number) {
    res.send("Lack of Parameter");
  } else {
    const num = parseInt(number);

    if (isNaN(num) || num < 0) {
      res.send("Wrong Parameter");
    } else {
      res.send(`${((num + 1) * num) / 2}`);
    }
  }
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
