const mongoose = require("mongoose");

// Pin schema
const PinSchema = mongoose.Schema({
  imageLink: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  postedBy: {
    type: String,
    required: true
  }
});

const Pin = module.exports = mongoose.model("Pin", PinSchema);

module.exports.addPin = function(pin, callback){
  pin.save(callback);
}

module.exports.getAllPins = function(callback){
  Pin.find(callback);
}