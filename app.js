const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// app.use(express.static("public"));

app.get("/", (req, res) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
  });
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/two", (req, res) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
  });
  res.sendFile(path.join(__dirname, "public", "page2.html"));
});

app.get("/three", (req, res) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
  });
  res.sendFile(path.join(__dirname, "public", "page3.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
