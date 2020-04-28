const express = require("express");
const router = express.Router();

//Schema
const { SS } = require("./Schema/Schema");

//Gets a pokemon with moveset of tier, NOT a pokemon from the tier*
router.get("/:tier/:pokemon", async (req, res) => {
  try {
    const pokemon = await SS.findOne({
      "movesets.pokemon": req.params.pokemon,
      format: req.params.tier
    });
    res.json(pokemon);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
