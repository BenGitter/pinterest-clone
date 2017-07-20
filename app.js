const path = require("path");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;


// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Serve index.html on all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Start listening
app.listen(port, () => {
  console.log("App listening on port:", port);
});