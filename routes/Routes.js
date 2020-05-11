const express = require("express");
const router = express.Router();

//Schema
const {
  SSDex,
  SMDex,
  XYDex,
  BWDex,
  DPDex,
  RSDex,
  GSDex,
  RBDex
} = require("./Schema");

const shuffle = arr => {
  let i = arr.length,
    j = 0,
    temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
};

const getTiers = tier => {
  let tiers;
  switch (tier) {
    case "Uber":
      tiers = ["Uber", "OU", "UU", "RU", "NU", "PU", "ZU"];
      break;
    case "OU":
      tiers = ["OU", "UU", "RU", "NU", "PU", "ZU"];
      break;
    case "UU":
      tiers = ["UU", "RU", "NU", "PU", "ZU"];
      break;
    case "RU":
      tiers = ["RU", "NU", "PU", "ZU"];
      break;
    case "NU":
      tiers = ["NU", "PU", "ZU"];
      break;
    case "PU":
      tiers = ["PU", "ZU"];
      break;
    default:
      break;
  }

  return tiers;
};

const getPokemon = async (schema, tier, weight) => {
  let pokemon;
  const availTiers = getTiers(tier);
  const availSets =
    tier === "Uber"
      ? ["Uber", "OU", "UU", "RU", "NU", "PU", "ZU"]
      : ["OU", "UU", "RU", "NU", "PU", "ZU"];

  if (tier === "LC") {
    pokemon = await schema.find({
      formats: tier,
      oob: { $ne: null },
      "setFormats.format": "LC"
    });
  } else {
    pokemon = await schema
      .find({
        formats: weight === "Standard" ? tier : { $in: availTiers },
        oob: { $ne: null },
        "setFormats.format": { $in: availSets }
      }, {formats: 1, "oob.dex_number": 1, setFormats: 1})
      .lean();
  }

  return pokemon;
};

router.get("/IMPORT/", async (req, res) => {
  const importTeam = req.query.pokemon.split(";");
  const pokemon = await SSDex.find(
    {
      name: { $in: importTeam },
    },
    { "oob.dex_number": 1, name: 1, _id: 0 }
  ).lean();

  pokemon.sort((a, b) => {
    return importTeam.indexOf(a.name) - importTeam.indexOf(b.name);
  });
  res.json(pokemon);
});

router.get("/SS/:tier/:weight", async (req, res) => {
  const pokemon = await getPokemon(SSDex, req.params.tier, req.params.weight);

  res.json(shuffle(pokemon));
});

router.get("/SM/:tier/:weight", async (req, res) => {
  const pokemon = await getPokemon(SMDex, req.params.tier, req.params.weight);

  res.json(shuffle(pokemon));
});

router.get("/XY/:tier/:weight", async (req, res) => {
  const pokemon = await getPokemon(XYDex, req.params.tier, req.params.weight);

  res.json(shuffle(pokemon));
});

router.get("/BW/:tier/:weight", async (req, res) => {
  const pokemon = await getPokemon(BWDex, req.params.tier, req.params.weight);

  res.json(shuffle(pokemon));
});

router.get("/DP/:tier/:weight", async (req, res) => {
  const pokemon = await getPokemon(DPDex, req.params.tier, req.params.weight);

  res.json(shuffle(pokemon));
});

router.get("/RS/:tier/:weight", async (req, res) => {
  const pokemon = await getPokemon(RSDex, req.params.tier, req.params.weight);

  res.json(shuffle(pokemon));
});

router.get("/GS/:tier/:weight", async (req, res) => {
  const pokemon = await getPokemon(GSDex, req.params.tier, req.params.weight);

  res.json(shuffle(pokemon));
});

router.get("/RB/:tier/:weight", async (req, res) => {
  const pokemon = await getPokemon(RBDex, req.params.tier, req.params.weight);

  res.json(shuffle(pokemon));
});

module.exports = router;
