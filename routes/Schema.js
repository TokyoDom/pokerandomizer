const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//schema
const dexSchema = new Schema({
  name: String,
  hp: Number,
  atk: Number,
  spa: Number,
  spd: Number,
  spe: Number,
  weight: Number,
  height: Number,
  types: [String],
  abilities: [String],
  formats: [String],
  isNonStandard: String,
  oob: {
    dex_number: Number,
    evos: [String],
    alts: [String],
    genfamily: [String]
  },
  setFormats: [{
    format: String,
    movesets: []
  }]
});

exports.SSDex = mongoose.model("Dex", dexSchema, "SSDex");
exports.SMDex = mongoose.model("Dex", dexSchema, "SMDex");
exports.XYDex = mongoose.model("Dex", dexSchema, "XYDex");
exports.BWDex = mongoose.model("Dex", dexSchema, "BWDex");
exports.DPDex = mongoose.model("Dex", dexSchema, "DPDex");
exports.RSDex = mongoose.model("Dex", dexSchema, "RSDex");
exports.GSDex = mongoose.model("Dex", dexSchema, "GSDex");
exports.RBDex = mongoose.model("Dex", dexSchema, "RBDex");