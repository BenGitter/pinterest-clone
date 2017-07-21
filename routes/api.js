const Pin = require("../models/pin");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({success: true, msg: "API Endpoint"});
});

// Get all pins
router.get("/pins", (req, res) => {
  Pin.getAllPins((err, pins) => {
    if(err) return res.json({success: false, error: err});

    res.json({success: true, pins: pins});
  });
});

// Add new pin
router.post("/pin", (req, res) => {
  if(!req.user) return res.json({success: false, error: "Not logged in"});

  const pin = new Pin({
    imageLink: req.body.imageLink || "",
    description: req.body.description || "",
    postedBy: req.user.name
  });

  Pin.addPin(pin, (err, _pin) => {
    if(err) return res.json({success: false, error: err});

    res.json({success: true, pin: _pin});
  });
});

router.delete("/pin/:id", (req, res) => {
  const id = req.params.id;

  Pin.removePin(id, (err, pin) => {
    if(err) return res.json({success: false, error: err});

    res.json({success: true});
  })
});

module.exports = router;