const express = require("express");
const router = express.Router();
const passport = require("../config/passport");

router.get("/twitter", passport.authenticate("twitter"));

router.get("/twitter/callback", 
  passport.authenticate("twitter", {failureRedirect: "/failure"}),
  (req, res) => {
    res.redirect("http://localhost:4200/");
});

router.get("/failure", (req, res) => {
  res.json({success: false, msg: "An error occurred"});
});

router.get("/status", (req, res) => {
  if(req.user){
    res.json({success: true, name: req.user.name});
  }else{
    res.json({success: false});
  }
})

router.get("/logout", (req, res) => {
  if(req.user){
    req.logout();
  }

  res.json({success: true});
});

router.get("/user", (req, res) => {
  if(req.user){
    res.json({success: true, name: req.user.name});
  }else{
    res.json({success: false, error: "Not logged in"});
  }
});

module.exports = router;