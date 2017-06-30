var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FactSchema = new Schema({
  user_id: {type: String},
  number: {type: Number},
  fact_type: {type: String},
  number_fact: {type: String}
});

module.exports = mongoose.model("Facts", FactSchema);