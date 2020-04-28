const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//schema
const pokeSchema = new Schema({
  format: { type: String, index: true },
  movesets: [
    {
      name: String,
      pokemon: String,
      abilities: [String],
      items: [String],
      moveslots: [[{ move: String }]],
      evconfigs: [
        {
          hp: Number,
          atk: Number,
          def: Number,
          spa: Number,
          spd: Number,
          spe: Number
        }
      ],
      ivconfigs: [],
      natures: [String]
    }
  ]
});

exports.SS = mongoose.model("Poke", pokeSchema, "SS");
exports.SM = mongoose.model("Poke", pokeSchema, "SM");
exports.XY = mongoose.model("Poke", pokeSchema, "XY");
exports.BW = mongoose.model("Poke", pokeSchema, "BW");
exports.DP = mongoose.model("Poke", pokeSchema, "DP");
exports.RS = mongoose.model("Poke", pokeSchema, "RS");
exports.GS = mongoose.model("Poke", pokeSchema, "GS");
exports.RB = mongoose.model("Poke", pokeSchema, "RB");