const express = require("express");
const router = express.Router();

//Schema
const { SS, SM, XY, BW, DP, RS, GS, RB } = require("./Schema");

//Gets a pokemon with moveset of tier, NOT a pokemon from the tier*
router.get("/SS/:tier/:pokemon", async (req, res) => {
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

router.get("/SM/:tier/:pokemon", async (req, res) => {
  try {
    const pokemon = await SM.findOne({
      "movesets.pokemon": req.params.pokemon,
      format: req.params.tier
    });
    res.json(pokemon);
  } catch (err) {
    console.log(err);
  }
});

router.get("/XY/:tier/:pokemon", async (req, res) => {
  try {
    const pokemon = await XY.findOne({
      "movesets.pokemon": req.params.pokemon,
      format: req.params.tier
    });
    res.json(pokemon);
  } catch (err) {
    console.log(err);
  }
});

router.get("/BW/:tier/:pokemon", async (req, res) => {
  try {
    const pokemon = await BW.findOne({
      "movesets.pokemon": req.params.pokemon,
      format: req.params.tier
    });
    res.json(pokemon);
  } catch (err) {
    console.log(err);
  }
});

router.get("/DP/:tier/:pokemon", async (req, res) => {
  try {
    const pokemon = await DP.findOne({
      "movesets.pokemon": req.params.pokemon,
      format: req.params.tier
    });
    res.json(pokemon);
  } catch (err) {
    console.log(err);
  }
});

router.get("/RS/:tier/:pokemon", async (req, res) => {
  try {
    const pokemon = await RS.findOne({
      "movesets.pokemon": req.params.pokemon,
      format: req.params.tier
    });
    res.json(pokemon);
  } catch (err) {
    console.log(err);
  }
});

router.get("/GS/:tier/:pokemon", async (req, res) => {
  try {
    const pokemon = await GS.findOne({
      "movesets.pokemon": req.params.pokemon,
      format: req.params.tier
    });
    res.json(pokemon);
  } catch (err) {
    console.log(err);
  }
});

router.get("/RB/:tier/:pokemon", async (req, res) => {
  try {
    const pokemon = await RB.findOne({
      "movesets.pokemon": req.params.pokemon,
      format: req.params.tier
    });
    res.json(pokemon);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
