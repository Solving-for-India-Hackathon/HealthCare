const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  date: {
    type: String,
  },
  description: {
    type: String,
  },
  start_time: {
    type: String,
  },
  end_time: {
    type: String,
  },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
