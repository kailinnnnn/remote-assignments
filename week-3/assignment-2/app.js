const express = require("express");
const app = express();

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
      const ans = ((num + 1) * num) / 2;
      res.send(`${ans}`);
    }
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
