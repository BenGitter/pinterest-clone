// Dependencies
const path = require("path");
const config = require("./config/config")[process.env.NODE_ENV || "production"];

// Express
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Passport
const session = require("express-session");
const passport = require("./config/passport");

app.use(session({
  secret: config.SECRET,
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
const auth = require("./routes/auth");
const api = require("./routes/api");

app.use("/auth", auth);
app.use("/api", api);

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