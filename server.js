const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

// In-memory "database"
let database = {
  pageA: "",
  pageB: "",
};

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// Route to handle submissions from Page A
app.post("/submitA", (req, res) => {
  database.pageA = req.body.content || "";
  res.json({ success: true, message: "Data from Page A stored successfully!" });
});

// Route to handle submissions from Page B
app.post("/submitB", (req, res) => {
  database.pageB = req.body.content || "";
  res.json({ success: true, message: "Data from Page B stored successfully!" });
});

// Route to fetch data
app.get("/data", (req, res) => {
  res.json(database);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
