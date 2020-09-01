const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const linkSchema = new Schema({
 

  FLAT   :  {type :String},
  SE     :  {type:String},
  DBMS   :  {type:String},
  TS     :  { type:String},
  OS     :  {type:String},
  ML     :  {type:String},
  ADJ     :  {type:String},
  Pdbms   :  {type:String},
  Pos     :  {type:String},
  Pml     :  {type:String},
  Padj    :  {type:String},
  Pts     :  {type:String},

});

module.exports = Link = mongoose.model("links", linkSchema);