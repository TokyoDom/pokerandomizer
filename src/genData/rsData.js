const rsData = [{
  "name": "Bulbasaur",
  "hp": 45,
  "atk": 49,
  "def": 49,
  "spa": 65,
  "spd": 65,
  "spe": 45,
  "weight": 6.9,
  "height": 0.7,
  "types": ["Grass", "Poison"],
  "abilities": ["Overgrow"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 1,
      "evos": ["Ivysaur"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Ivysaur",
  "hp": 60,
  "atk": 62,
  "def": 63,
  "spa": 80,
  "spd": 80,
  "spe": 60,
  "weight": 13,
  "height": 1,
  "types": ["Grass", "Poison"],
  "abilities": ["Overgrow"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 2,
      "evos": ["Venusaur"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Venusaur",
  "hp": 80,
  "atk": 82,
  "def": 83,
  "spa": 100,
  "spd": 100,
  "spe": 80,
  "weight": 100,
  "height": 2,
  "types": ["Grass", "Poison"],
  "abilities": ["Overgrow"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 3,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Charmander",
  "hp": 39,
  "atk": 52,
  "def": 43,
  "spa": 60,
  "spd": 50,
  "spe": 65,
  "weight": 8.5,
  "height": 0.6,
  "types": ["Fire"],
  "abilities": ["Blaze"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 4,
      "evos": ["Charmeleon"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Charmeleon",
  "hp": 58,
  "atk": 64,
  "def": 58,
  "spa": 80,
  "spd": 65,
  "spe": 80,
  "weight": 19,
  "height": 1.1,
  "types": ["Fire"],
  "abilities": ["Blaze"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 5,
      "evos": ["Charizard"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Charizard",
  "hp": 78,
  "atk": 84,
  "def": 78,
  "spa": 109,
  "spd": 85,
  "spe": 100,
  "weight": 90.5,
  "height": 1.7,
  "types": ["Fire", "Flying"],
  "abilities": ["Blaze"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 6,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Squirtle",
  "hp": 44,
  "atk": 48,
  "def": 65,
  "spa": 50,
  "spd": 64,
  "spe": 43,
  "weight": 9,
  "height": 0.5,
  "types": ["Water"],
  "abilities": ["Torrent"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 7,
      "evos": ["Wartortle"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Wartortle",
  "hp": 59,
  "atk": 63,
  "def": 80,
  "spa": 65,
  "spd": 80,
  "spe": 58,
  "weight": 22.5,
  "height": 1,
  "types": ["Water"],
  "abilities": ["Torrent"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 8,
      "evos": ["Blastoise"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Blastoise",
  "hp": 79,
  "atk": 83,
  "def": 100,
  "spa": 85,
  "spd": 105,
  "spe": 78,
  "weight": 85.5,
  "height": 1.6,
  "types": ["Water"],
  "abilities": ["Torrent"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 9,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Caterpie",
  "hp": 45,
  "atk": 30,
  "def": 35,
  "spa": 20,
  "spd": 20,
  "spe": 45,
  "weight": 2.9,
  "height": 0.3,
  "types": ["Bug"],
  "abilities": ["Shield Dust"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 10,
      "evos": ["Metapod"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Metapod",
  "hp": 50,
  "atk": 20,
  "def": 55,
  "spa": 25,
  "spd": 25,
  "spe": 30,
  "weight": 9.9,
  "height": 0.7,
  "types": ["Bug"],
  "abilities": ["Shed Skin"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 11,
      "evos": ["Butterfree"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Butterfree",
  "hp": 60,
  "atk": 45,
  "def": 50,
  "spa": 80,
  "spd": 80,
  "spe": 70,
  "weight": 32,
  "height": 1.1,
  "types": ["Bug", "Flying"],
  "abilities": ["Compound Eyes"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 12,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Weedle",
  "hp": 40,
  "atk": 35,
  "def": 30,
  "spa": 20,
  "spd": 20,
  "spe": 50,
  "weight": 3.2,
  "height": 0.3,
  "types": ["Bug", "Poison"],
  "abilities": ["Shield Dust"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 13,
      "evos": ["Kakuna"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Kakuna",
  "hp": 45,
  "atk": 25,
  "def": 50,
  "spa": 25,
  "spd": 25,
  "spe": 35,
  "weight": 10,
  "height": 0.6,
  "types": ["Bug", "Poison"],
  "abilities": ["Shed Skin"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 14,
      "evos": ["Beedrill"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Beedrill",
  "hp": 65,
  "atk": 80,
  "def": 40,
  "spa": 45,
  "spd": 80,
  "spe": 75,
  "weight": 29.5,
  "height": 1,
  "types": ["Bug", "Poison"],
  "abilities": ["Swarm"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 15,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Pidgey",
  "hp": 40,
  "atk": 45,
  "def": 40,
  "spa": 35,
  "spd": 35,
  "spe": 56,
  "weight": 1.8,
  "height": 0.3,
  "types": ["Normal", "Flying"],
  "abilities": ["Keen Eye"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 16,
      "evos": ["Pidgeotto"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Pidgeotto",
  "hp": 63,
  "atk": 60,
  "def": 55,
  "spa": 50,
  "spd": 50,
  "spe": 71,
  "weight": 30,
  "height": 1.1,
  "types": ["Normal", "Flying"],
  "abilities": ["Keen Eye"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 17,
      "evos": ["Pidgeot"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Pidgeot",
  "hp": 83,
  "atk": 80,
  "def": 75,
  "spa": 70,
  "spd": 70,
  "spe": 91,
  "weight": 39.5,
  "height": 1.5,
  "types": ["Normal", "Flying"],
  "abilities": ["Keen Eye"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 18,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Rattata",
  "hp": 30,
  "atk": 56,
  "def": 35,
  "spa": 25,
  "spd": 35,
  "spe": 72,
  "weight": 3.5,
  "height": 0.3,
  "types": ["Normal"],
  "abilities": ["Guts", "Run Away"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 19,
      "evos": ["Raticate"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Raticate",
  "hp": 55,
  "atk": 81,
  "def": 60,
  "spa": 50,
  "spd": 70,
  "spe": 97,
  "weight": 18.5,
  "height": 0.7,
  "types": ["Normal"],
  "abilities": ["Guts", "Run Away"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 20,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Spearow",
  "hp": 40,
  "atk": 60,
  "def": 30,
  "spa": 31,
  "spd": 31,
  "spe": 70,
  "weight": 2,
  "height": 0.3,
  "types": ["Normal", "Flying"],
  "abilities": ["Keen Eye"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 21,
      "evos": ["Fearow"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Fearow",
  "hp": 65,
  "atk": 90,
  "def": 65,
  "spa": 61,
  "spd": 61,
  "spe": 100,
  "weight": 38,
  "height": 1.2,
  "types": ["Normal", "Flying"],
  "abilities": ["Keen Eye"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 22,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Ekans",
  "hp": 35,
  "atk": 60,
  "def": 44,
  "spa": 40,
  "spd": 54,
  "spe": 55,
  "weight": 6.9,
  "height": 2,
  "types": ["Poison"],
  "abilities": ["Intimidate", "Shed Skin"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 23,
      "evos": ["Arbok"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Arbok",
  "hp": 60,
  "atk": 85,
  "def": 69,
  "spa": 65,
  "spd": 79,
  "spe": 80,
  "weight": 65,
  "height": 3.5,
  "types": ["Poison"],
  "abilities": ["Intimidate", "Shed Skin"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 24,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Pikachu",
  "hp": 35,
  "atk": 55,
  "def": 30,
  "spa": 50,
  "spd": 40,
  "spe": 90,
  "weight": 6,
  "height": 0.4,
  "types": ["Electric"],
  "abilities": ["Static"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 25,
      "evos": ["Raichu"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Raichu",
  "hp": 60,
  "atk": 90,
  "def": 55,
  "spa": 90,
  "spd": 80,
  "spe": 100,
  "weight": 30,
  "height": 0.8,
  "types": ["Electric"],
  "abilities": ["Static"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 26,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Sandshrew",
  "hp": 50,
  "atk": 75,
  "def": 85,
  "spa": 20,
  "spd": 30,
  "spe": 40,
  "weight": 12,
  "height": 0.6,
  "types": ["Ground"],
  "abilities": ["Sand Veil"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 27,
      "evos": ["Sandslash"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Sandslash",
  "hp": 75,
  "atk": 100,
  "def": 110,
  "spa": 45,
  "spd": 55,
  "spe": 65,
  "weight": 29.5,
  "height": 1,
  "types": ["Ground"],
  "abilities": ["Sand Veil"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 28,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Nidoran-F",
  "hp": 55,
  "atk": 47,
  "def": 52,
  "spa": 40,
  "spd": 40,
  "spe": 41,
  "weight": 7,
  "height": 0.4,
  "types": ["Poison"],
  "abilities": ["Poison Point"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 29,
      "evos": ["Nidorina"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Nidorina",
  "hp": 70,
  "atk": 62,
  "def": 67,
  "spa": 55,
  "spd": 55,
  "spe": 56,
  "weight": 20,
  "height": 0.8,
  "types": ["Poison"],
  "abilities": ["Poison Point"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 30,
      "evos": ["Nidoqueen"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Nidoqueen",
  "hp": 90,
  "atk": 82,
  "def": 87,
  "spa": 75,
  "spd": 85,
  "spe": 76,
  "weight": 60,
  "height": 1.3,
  "types": ["Poison", "Ground"],
  "abilities": ["Poison Point"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 31,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Nidoran-M",
  "hp": 46,
  "atk": 57,
  "def": 40,
  "spa": 40,
  "spd": 40,
  "spe": 50,
  "weight": 9,
  "height": 0.5,
  "types": ["Poison"],
  "abilities": ["Poison Point"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 32,
      "evos": ["Nidorino"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Nidorino",
  "hp": 61,
  "atk": 72,
  "def": 57,
  "spa": 55,
  "spd": 55,
  "spe": 65,
  "weight": 19.5,
  "height": 0.9,
  "types": ["Poison"],
  "abilities": ["Poison Point"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 33,
      "evos": ["Nidoking"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Nidoking",
  "hp": 81,
  "atk": 92,
  "def": 77,
  "spa": 85,
  "spd": 75,
  "spe": 85,
  "weight": 62,
  "height": 1.4,
  "types": ["Poison", "Ground"],
  "abilities": ["Poison Point"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 34,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Clefairy",
  "hp": 70,
  "atk": 45,
  "def": 48,
  "spa": 60,
  "spd": 65,
  "spe": 35,
  "weight": 7.5,
  "height": 0.6,
  "types": ["Normal"],
  "abilities": ["Cute Charm"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 35,
      "evos": ["Clefable"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Clefable",
  "hp": 95,
  "atk": 70,
  "def": 73,
  "spa": 85,
  "spd": 90,
  "spe": 60,
  "weight": 40,
  "height": 1.3,
  "types": ["Normal"],
  "abilities": ["Cute Charm"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 36,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Vulpix",
  "hp": 38,
  "atk": 41,
  "def": 40,
  "spa": 50,
  "spd": 65,
  "spe": 65,
  "weight": 9.9,
  "height": 0.6,
  "types": ["Fire"],
  "abilities": ["Flash Fire"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 37,
      "evos": ["Ninetales"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Ninetales",
  "hp": 73,
  "atk": 76,
  "def": 75,
  "spa": 81,
  "spd": 100,
  "spe": 100,
  "weight": 19.9,
  "height": 1.1,
  "types": ["Fire"],
  "abilities": ["Flash Fire"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 38,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Jigglypuff",
  "hp": 115,
  "atk": 45,
  "def": 20,
  "spa": 45,
  "spd": 25,
  "spe": 20,
  "weight": 5.5,
  "height": 0.5,
  "types": ["Normal"],
  "abilities": ["Cute Charm"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 39,
      "evos": ["Wigglytuff"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Wigglytuff",
  "hp": 140,
  "atk": 70,
  "def": 45,
  "spa": 75,
  "spd": 50,
  "spe": 45,
  "weight": 12,
  "height": 1,
  "types": ["Normal"],
  "abilities": ["Cute Charm"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 40,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Zubat",
  "hp": 40,
  "atk": 45,
  "def": 35,
  "spa": 30,
  "spd": 40,
  "spe": 55,
  "weight": 7.5,
  "height": 0.8,
  "types": ["Poison", "Flying"],
  "abilities": ["Inner Focus"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 41,
      "evos": ["Golbat"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Golbat",
  "hp": 75,
  "atk": 80,
  "def": 70,
  "spa": 65,
  "spd": 75,
  "spe": 90,
  "weight": 55,
  "height": 1.6,
  "types": ["Poison", "Flying"],
  "abilities": ["Inner Focus"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 42,
      "evos": ["Crobat"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Oddish",
  "hp": 45,
  "atk": 50,
  "def": 55,
  "spa": 75,
  "spd": 65,
  "spe": 30,
  "weight": 5.4,
  "height": 0.5,
  "types": ["Grass", "Poison"],
  "abilities": ["Chlorophyll"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 43,
      "evos": ["Gloom"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Gloom",
  "hp": 60,
  "atk": 65,
  "def": 70,
  "spa": 85,
  "spd": 75,
  "spe": 40,
  "weight": 8.6,
  "height": 0.8,
  "types": ["Grass", "Poison"],
  "abilities": ["Chlorophyll"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 44,
      "evos": ["Bellossom", "Vileplume"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Vileplume",
  "hp": 75,
  "atk": 80,
  "def": 85,
  "spa": 100,
  "spd": 90,
  "spe": 50,
  "weight": 18.6,
  "height": 1.2,
  "types": ["Grass", "Poison"],
  "abilities": ["Chlorophyll"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 45,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Paras",
  "hp": 35,
  "atk": 70,
  "def": 55,
  "spa": 45,
  "spd": 55,
  "spe": 25,
  "weight": 5.4,
  "height": 0.3,
  "types": ["Bug", "Grass"],
  "abilities": ["Effect Spore"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 46,
      "evos": ["Parasect"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Parasect",
  "hp": 60,
  "atk": 95,
  "def": 80,
  "spa": 60,
  "spd": 80,
  "spe": 30,
  "weight": 29.5,
  "height": 1,
  "types": ["Bug", "Grass"],
  "abilities": ["Effect Spore"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 47,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Venonat",
  "hp": 60,
  "atk": 55,
  "def": 50,
  "spa": 40,
  "spd": 55,
  "spe": 45,
  "weight": 30,
  "height": 1,
  "types": ["Bug", "Poison"],
  "abilities": ["Compound Eyes"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 48,
      "evos": ["Venomoth"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Venomoth",
  "hp": 70,
  "atk": 65,
  "def": 60,
  "spa": 90,
  "spd": 75,
  "spe": 90,
  "weight": 12.5,
  "height": 1.5,
  "types": ["Bug", "Poison"],
  "abilities": ["Shield Dust"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 49,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Diglett",
  "hp": 10,
  "atk": 55,
  "def": 25,
  "spa": 35,
  "spd": 45,
  "spe": 95,
  "weight": 0.8,
  "height": 0.2,
  "types": ["Ground"],
  "abilities": ["Arena Trap", "Sand Veil"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 50,
      "evos": ["Dugtrio"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Dugtrio",
  "hp": 35,
  "atk": 80,
  "def": 50,
  "spa": 50,
  "spd": 70,
  "spe": 120,
  "weight": 33.3,
  "height": 0.7,
  "types": ["Ground"],
  "abilities": ["Arena Trap", "Sand Veil"],
  "formats": ["OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 51,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Meowth",
  "hp": 40,
  "atk": 45,
  "def": 35,
  "spa": 40,
  "spd": 40,
  "spe": 90,
  "weight": 4.2,
  "height": 0.4,
  "types": ["Normal"],
  "abilities": ["Pickup"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 52,
      "evos": ["Persian"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Persian",
  "hp": 65,
  "atk": 70,
  "def": 60,
  "spa": 65,
  "spd": 65,
  "spe": 115,
  "weight": 32,
  "height": 1,
  "types": ["Normal"],
  "abilities": ["Limber"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 53,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Psyduck",
  "hp": 50,
  "atk": 52,
  "def": 48,
  "spa": 65,
  "spd": 50,
  "spe": 55,
  "weight": 19.6,
  "height": 0.8,
  "types": ["Water"],
  "abilities": ["Cloud Nine", "Damp"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 54,
      "evos": ["Golduck"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Golduck",
  "hp": 80,
  "atk": 82,
  "def": 78,
  "spa": 95,
  "spd": 80,
  "spe": 85,
  "weight": 76.6,
  "height": 1.7,
  "types": ["Water"],
  "abilities": ["Cloud Nine", "Damp"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 55,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Mankey",
  "hp": 40,
  "atk": 80,
  "def": 35,
  "spa": 35,
  "spd": 45,
  "spe": 70,
  "weight": 28,
  "height": 0.5,
  "types": ["Fighting"],
  "abilities": ["Vital Spirit"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 56,
      "evos": ["Primeape"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Primeape",
  "hp": 65,
  "atk": 105,
  "def": 60,
  "spa": 60,
  "spd": 70,
  "spe": 95,
  "weight": 32,
  "height": 1,
  "types": ["Fighting"],
  "abilities": ["Vital Spirit"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 57,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Growlithe",
  "hp": 55,
  "atk": 70,
  "def": 45,
  "spa": 70,
  "spd": 50,
  "spe": 60,
  "weight": 19,
  "height": 0.7,
  "types": ["Fire"],
  "abilities": ["Flash Fire", "Intimidate"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 58,
      "evos": ["Arcanine"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Arcanine",
  "hp": 90,
  "atk": 110,
  "def": 80,
  "spa": 100,
  "spd": 80,
  "spe": 95,
  "weight": 155,
  "height": 1.9,
  "types": ["Fire"],
  "abilities": ["Flash Fire", "Intimidate"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 59,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Poliwag",
  "hp": 40,
  "atk": 50,
  "def": 40,
  "spa": 40,
  "spd": 40,
  "spe": 90,
  "weight": 12.4,
  "height": 0.6,
  "types": ["Water"],
  "abilities": ["Damp", "Water Absorb"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 60,
      "evos": ["Poliwhirl"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Poliwhirl",
  "hp": 65,
  "atk": 65,
  "def": 65,
  "spa": 50,
  "spd": 50,
  "spe": 90,
  "weight": 20,
  "height": 1,
  "types": ["Water"],
  "abilities": ["Damp", "Water Absorb"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 61,
      "evos": ["Politoed", "Poliwrath"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Poliwrath",
  "hp": 90,
  "atk": 85,
  "def": 95,
  "spa": 70,
  "spd": 90,
  "spe": 70,
  "weight": 54,
  "height": 1.3,
  "types": ["Water", "Fighting"],
  "abilities": ["Damp", "Water Absorb"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 62,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Abra",
  "hp": 25,
  "atk": 20,
  "def": 15,
  "spa": 105,
  "spd": 55,
  "spe": 90,
  "weight": 19.5,
  "height": 0.9,
  "types": ["Psychic"],
  "abilities": ["Inner Focus", "Synchronize"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 63,
      "evos": ["Kadabra"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Kadabra",
  "hp": 40,
  "atk": 35,
  "def": 30,
  "spa": 120,
  "spd": 70,
  "spe": 105,
  "weight": 56.5,
  "height": 1.3,
  "types": ["Psychic"],
  "abilities": ["Inner Focus", "Synchronize"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 64,
      "evos": ["Alakazam"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Alakazam",
  "hp": 55,
  "atk": 50,
  "def": 45,
  "spa": 135,
  "spd": 85,
  "spe": 120,
  "weight": 48,
  "height": 1.5,
  "types": ["Psychic"],
  "abilities": ["Inner Focus", "Synchronize"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 65,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Machop",
  "hp": 70,
  "atk": 80,
  "def": 50,
  "spa": 35,
  "spd": 35,
  "spe": 35,
  "weight": 19.5,
  "height": 0.8,
  "types": ["Fighting"],
  "abilities": ["Guts"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 66,
      "evos": ["Machoke"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Machoke",
  "hp": 80,
  "atk": 100,
  "def": 70,
  "spa": 50,
  "spd": 60,
  "spe": 45,
  "weight": 70.5,
  "height": 1.5,
  "types": ["Fighting"],
  "abilities": ["Guts"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 67,
      "evos": ["Machamp"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Machamp",
  "hp": 90,
  "atk": 130,
  "def": 80,
  "spa": 65,
  "spd": 85,
  "spe": 55,
  "weight": 130,
  "height": 1.6,
  "types": ["Fighting"],
  "abilities": ["Guts"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 68,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Bellsprout",
  "hp": 50,
  "atk": 75,
  "def": 35,
  "spa": 70,
  "spd": 30,
  "spe": 40,
  "weight": 4,
  "height": 0.7,
  "types": ["Grass", "Poison"],
  "abilities": ["Chlorophyll"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 69,
      "evos": ["Weepinbell"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Weepinbell",
  "hp": 65,
  "atk": 90,
  "def": 50,
  "spa": 85,
  "spd": 45,
  "spe": 55,
  "weight": 6.4,
  "height": 1,
  "types": ["Grass", "Poison"],
  "abilities": ["Chlorophyll"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 70,
      "evos": ["Victreebel"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Victreebel",
  "hp": 80,
  "atk": 105,
  "def": 65,
  "spa": 100,
  "spd": 60,
  "spe": 70,
  "weight": 15.5,
  "height": 1.7,
  "types": ["Grass", "Poison"],
  "abilities": ["Chlorophyll"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 71,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Tentacool",
  "hp": 40,
  "atk": 40,
  "def": 35,
  "spa": 50,
  "spd": 100,
  "spe": 70,
  "weight": 45.5,
  "height": 0.9,
  "types": ["Water", "Poison"],
  "abilities": ["Clear Body", "Liquid Ooze"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 72,
      "evos": ["Tentacruel"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Tentacruel",
  "hp": 80,
  "atk": 70,
  "def": 65,
  "spa": 80,
  "spd": 120,
  "spe": 100,
  "weight": 55,
  "height": 1.6,
  "types": ["Water", "Poison"],
  "abilities": ["Clear Body", "Liquid Ooze"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 73,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Geodude",
  "hp": 40,
  "atk": 80,
  "def": 100,
  "spa": 30,
  "spd": 30,
  "spe": 20,
  "weight": 20,
  "height": 0.4,
  "types": ["Rock", "Ground"],
  "abilities": ["Rock Head", "Sturdy"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 74,
      "evos": ["Graveler"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Graveler",
  "hp": 55,
  "atk": 95,
  "def": 115,
  "spa": 45,
  "spd": 45,
  "spe": 35,
  "weight": 105,
  "height": 1,
  "types": ["Rock", "Ground"],
  "abilities": ["Rock Head", "Sturdy"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 75,
      "evos": ["Golem"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Golem",
  "hp": 80,
  "atk": 110,
  "def": 130,
  "spa": 55,
  "spd": 65,
  "spe": 45,
  "weight": 300,
  "height": 1.4,
  "types": ["Rock", "Ground"],
  "abilities": ["Rock Head", "Sturdy"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 76,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Ponyta",
  "hp": 50,
  "atk": 85,
  "def": 55,
  "spa": 65,
  "spd": 65,
  "spe": 90,
  "weight": 30,
  "height": 1,
  "types": ["Fire"],
  "abilities": ["Flash Fire", "Run Away"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 77,
      "evos": ["Rapidash"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Rapidash",
  "hp": 65,
  "atk": 100,
  "def": 70,
  "spa": 80,
  "spd": 80,
  "spe": 105,
  "weight": 95,
  "height": 1.7,
  "types": ["Fire"],
  "abilities": ["Flash Fire", "Run Away"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 78,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Slowpoke",
  "hp": 90,
  "atk": 65,
  "def": 65,
  "spa": 40,
  "spd": 40,
  "spe": 15,
  "weight": 36,
  "height": 1.2,
  "types": ["Water", "Psychic"],
  "abilities": ["Oblivious", "Own Tempo"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 79,
      "evos": ["Slowbro", "Slowking"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Slowbro",
  "hp": 95,
  "atk": 75,
  "def": 110,
  "spa": 100,
  "spd": 80,
  "spe": 30,
  "weight": 78.5,
  "height": 1.6,
  "types": ["Water", "Psychic"],
  "abilities": ["Oblivious", "Own Tempo"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 80,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Magnemite",
  "hp": 25,
  "atk": 35,
  "def": 70,
  "spa": 95,
  "spd": 55,
  "spe": 45,
  "weight": 6,
  "height": 0.3,
  "types": ["Electric", "Steel"],
  "abilities": ["Magnet Pull", "Sturdy"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 81,
      "evos": ["Magneton"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Magneton",
  "hp": 50,
  "atk": 60,
  "def": 95,
  "spa": 120,
  "spd": 70,
  "spe": 70,
  "weight": 60,
  "height": 1,
  "types": ["Electric", "Steel"],
  "abilities": ["Magnet Pull", "Sturdy"],
  "formats": ["OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 82,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Farfetch'd",
  "hp": 52,
  "atk": 65,
  "def": 55,
  "spa": 58,
  "spd": 62,
  "spe": 60,
  "weight": 15,
  "height": 0.8,
  "types": ["Normal", "Flying"],
  "abilities": ["Inner Focus", "Keen Eye"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 83,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Doduo",
  "hp": 35,
  "atk": 85,
  "def": 45,
  "spa": 35,
  "spd": 35,
  "spe": 75,
  "weight": 39.2,
  "height": 1.4,
  "types": ["Normal", "Flying"],
  "abilities": ["Early Bird", "Run Away"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 84,
      "evos": ["Dodrio"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Dodrio",
  "hp": 60,
  "atk": 110,
  "def": 70,
  "spa": 60,
  "spd": 60,
  "spe": 100,
  "weight": 85.2,
  "height": 1.8,
  "types": ["Normal", "Flying"],
  "abilities": ["Early Bird", "Run Away"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 85,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Seel",
  "hp": 65,
  "atk": 45,
  "def": 55,
  "spa": 45,
  "spd": 70,
  "spe": 45,
  "weight": 90,
  "height": 1.1,
  "types": ["Water"],
  "abilities": ["Thick Fat"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 86,
      "evos": ["Dewgong"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Dewgong",
  "hp": 90,
  "atk": 70,
  "def": 80,
  "spa": 70,
  "spd": 95,
  "spe": 70,
  "weight": 120,
  "height": 1.7,
  "types": ["Water", "Ice"],
  "abilities": ["Thick Fat"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 87,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Grimer",
  "hp": 80,
  "atk": 80,
  "def": 50,
  "spa": 40,
  "spd": 50,
  "spe": 25,
  "weight": 30,
  "height": 0.9,
  "types": ["Poison"],
  "abilities": ["Stench", "Sticky Hold"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 88,
      "evos": ["Muk"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Muk",
  "hp": 105,
  "atk": 105,
  "def": 75,
  "spa": 65,
  "spd": 100,
  "spe": 50,
  "weight": 30,
  "height": 1.2,
  "types": ["Poison"],
  "abilities": ["Stench", "Sticky Hold"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 89,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Shellder",
  "hp": 30,
  "atk": 65,
  "def": 100,
  "spa": 45,
  "spd": 25,
  "spe": 40,
  "weight": 4,
  "height": 0.3,
  "types": ["Water"],
  "abilities": ["Shell Armor"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 90,
      "evos": ["Cloyster"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Cloyster",
  "hp": 50,
  "atk": 95,
  "def": 180,
  "spa": 85,
  "spd": 45,
  "spe": 70,
  "weight": 132.5,
  "height": 1.5,
  "types": ["Water", "Ice"],
  "abilities": ["Shell Armor"],
  "formats": ["OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 91,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Gastly",
  "hp": 30,
  "atk": 35,
  "def": 30,
  "spa": 100,
  "spd": 35,
  "spe": 80,
  "weight": 0.1,
  "height": 1.3,
  "types": ["Ghost", "Poison"],
  "abilities": ["Levitate"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 92,
      "evos": ["Haunter"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Haunter",
  "hp": 45,
  "atk": 50,
  "def": 45,
  "spa": 115,
  "spd": 55,
  "spe": 95,
  "weight": 0.1,
  "height": 1.6,
  "types": ["Ghost", "Poison"],
  "abilities": ["Levitate"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 93,
      "evos": ["Gengar"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Gengar",
  "hp": 60,
  "atk": 65,
  "def": 60,
  "spa": 130,
  "spd": 75,
  "spe": 110,
  "weight": 40.5,
  "height": 1.5,
  "types": ["Ghost", "Poison"],
  "abilities": ["Levitate"],
  "formats": ["OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 94,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Onix",
  "hp": 35,
  "atk": 45,
  "def": 160,
  "spa": 30,
  "spd": 45,
  "spe": 70,
  "weight": 210,
  "height": 8.8,
  "types": ["Rock", "Ground"],
  "abilities": ["Rock Head", "Sturdy"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 95,
      "evos": ["Steelix"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Drowzee",
  "hp": 60,
  "atk": 48,
  "def": 45,
  "spa": 43,
  "spd": 90,
  "spe": 42,
  "weight": 32.4,
  "height": 1,
  "types": ["Psychic"],
  "abilities": ["Insomnia"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 96,
      "evos": ["Hypno"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Hypno",
  "hp": 85,
  "atk": 73,
  "def": 70,
  "spa": 73,
  "spd": 115,
  "spe": 67,
  "weight": 75.6,
  "height": 1.6,
  "types": ["Psychic"],
  "abilities": ["Insomnia"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 97,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Krabby",
  "hp": 30,
  "atk": 105,
  "def": 90,
  "spa": 25,
  "spd": 25,
  "spe": 50,
  "weight": 6.5,
  "height": 0.4,
  "types": ["Water"],
  "abilities": ["Hyper Cutter", "Shell Armor"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 98,
      "evos": ["Kingler"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Kingler",
  "hp": 55,
  "atk": 130,
  "def": 115,
  "spa": 50,
  "spd": 50,
  "spe": 75,
  "weight": 60,
  "height": 1.3,
  "types": ["Water"],
  "abilities": ["Hyper Cutter", "Shell Armor"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 99,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Voltorb",
  "hp": 40,
  "atk": 30,
  "def": 50,
  "spa": 55,
  "spd": 55,
  "spe": 100,
  "weight": 10.4,
  "height": 0.5,
  "types": ["Electric"],
  "abilities": ["Soundproof", "Static"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 100,
      "evos": ["Electrode"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Electrode",
  "hp": 60,
  "atk": 50,
  "def": 70,
  "spa": 80,
  "spd": 80,
  "spe": 140,
  "weight": 66.6,
  "height": 1.2,
  "types": ["Electric"],
  "abilities": ["Soundproof", "Static"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 101,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Exeggcute",
  "hp": 60,
  "atk": 40,
  "def": 80,
  "spa": 60,
  "spd": 45,
  "spe": 40,
  "weight": 2.5,
  "height": 0.4,
  "types": ["Grass", "Psychic"],
  "abilities": ["Chlorophyll"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 102,
      "evos": ["Exeggutor"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Exeggutor",
  "hp": 95,
  "atk": 95,
  "def": 85,
  "spa": 125,
  "spd": 65,
  "spe": 55,
  "weight": 120,
  "height": 2,
  "types": ["Grass", "Psychic"],
  "abilities": ["Chlorophyll"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 103,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Cubone",
  "hp": 50,
  "atk": 50,
  "def": 95,
  "spa": 40,
  "spd": 50,
  "spe": 35,
  "weight": 6.5,
  "height": 0.4,
  "types": ["Ground"],
  "abilities": ["Lightning Rod", "Rock Head"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 104,
      "evos": ["Marowak"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Marowak",
  "hp": 60,
  "atk": 80,
  "def": 110,
  "spa": 50,
  "spd": 80,
  "spe": 45,
  "weight": 45,
  "height": 1,
  "types": ["Ground"],
  "abilities": ["Lightning Rod", "Rock Head"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 105,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Hitmonlee",
  "hp": 50,
  "atk": 120,
  "def": 53,
  "spa": 35,
  "spd": 110,
  "spe": 87,
  "weight": 49.8,
  "height": 1.5,
  "types": ["Fighting"],
  "abilities": ["Limber"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 106,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Hitmonchan",
  "hp": 50,
  "atk": 105,
  "def": 79,
  "spa": 35,
  "spd": 110,
  "spe": 76,
  "weight": 50.2,
  "height": 1.4,
  "types": ["Fighting"],
  "abilities": ["Keen Eye"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 107,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Lickitung",
  "hp": 90,
  "atk": 55,
  "def": 75,
  "spa": 60,
  "spd": 75,
  "spe": 30,
  "weight": 65.5,
  "height": 1.2,
  "types": ["Normal"],
  "abilities": ["Oblivious", "Own Tempo"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 108,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Koffing",
  "hp": 40,
  "atk": 65,
  "def": 95,
  "spa": 60,
  "spd": 45,
  "spe": 35,
  "weight": 1,
  "height": 0.6,
  "types": ["Poison"],
  "abilities": ["Levitate"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 109,
      "evos": ["Weezing"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Weezing",
  "hp": 65,
  "atk": 90,
  "def": 120,
  "spa": 85,
  "spd": 70,
  "spe": 60,
  "weight": 9.5,
  "height": 1.2,
  "types": ["Poison"],
  "abilities": ["Levitate"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 110,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Rhyhorn",
  "hp": 80,
  "atk": 85,
  "def": 95,
  "spa": 30,
  "spd": 30,
  "spe": 25,
  "weight": 115,
  "height": 1,
  "types": ["Ground", "Rock"],
  "abilities": ["Lightning Rod", "Rock Head"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 111,
      "evos": ["Rhydon"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Rhydon",
  "hp": 105,
  "atk": 130,
  "def": 120,
  "spa": 45,
  "spd": 45,
  "spe": 40,
  "weight": 120,
  "height": 1.9,
  "types": ["Ground", "Rock"],
  "abilities": ["Lightning Rod", "Rock Head"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 112,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Chansey",
  "hp": 250,
  "atk": 5,
  "def": 5,
  "spa": 35,
  "spd": 105,
  "spe": 50,
  "weight": 34.6,
  "height": 1.1,
  "types": ["Normal"],
  "abilities": ["Natural Cure", "Serene Grace"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 113,
      "evos": ["Blissey"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Tangela",
  "hp": 65,
  "atk": 55,
  "def": 115,
  "spa": 100,
  "spd": 40,
  "spe": 60,
  "weight": 35,
  "height": 1,
  "types": ["Grass"],
  "abilities": ["Chlorophyll"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 114,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Kangaskhan",
  "hp": 105,
  "atk": 95,
  "def": 80,
  "spa": 40,
  "spd": 80,
  "spe": 90,
  "weight": 80,
  "height": 2.2,
  "types": ["Normal"],
  "abilities": ["Early Bird"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 115,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Horsea",
  "hp": 30,
  "atk": 40,
  "def": 70,
  "spa": 70,
  "spd": 25,
  "spe": 60,
  "weight": 8,
  "height": 0.4,
  "types": ["Water"],
  "abilities": ["Swift Swim"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 116,
      "evos": ["Seadra"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Seadra",
  "hp": 55,
  "atk": 65,
  "def": 95,
  "spa": 95,
  "spd": 45,
  "spe": 85,
  "weight": 25,
  "height": 1.2,
  "types": ["Water"],
  "abilities": ["Poison Point"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 117,
      "evos": ["Kingdra"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Goldeen",
  "hp": 45,
  "atk": 67,
  "def": 60,
  "spa": 35,
  "spd": 50,
  "spe": 63,
  "weight": 15,
  "height": 0.6,
  "types": ["Water"],
  "abilities": ["Swift Swim", "Water Veil"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 118,
      "evos": ["Seaking"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Seaking",
  "hp": 80,
  "atk": 92,
  "def": 65,
  "spa": 65,
  "spd": 80,
  "spe": 68,
  "weight": 39,
  "height": 1.3,
  "types": ["Water"],
  "abilities": ["Swift Swim", "Water Veil"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 119,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Staryu",
  "hp": 30,
  "atk": 45,
  "def": 55,
  "spa": 70,
  "spd": 55,
  "spe": 85,
  "weight": 34.5,
  "height": 0.8,
  "types": ["Water"],
  "abilities": ["Illuminate", "Natural Cure"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 120,
      "evos": ["Starmie"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Starmie",
  "hp": 60,
  "atk": 75,
  "def": 85,
  "spa": 100,
  "spd": 85,
  "spe": 115,
  "weight": 80,
  "height": 1.1,
  "types": ["Water", "Psychic"],
  "abilities": ["Illuminate", "Natural Cure"],
  "formats": ["OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 121,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Mr. Mime",
  "hp": 40,
  "atk": 45,
  "def": 65,
  "spa": 100,
  "spd": 120,
  "spe": 90,
  "weight": 54.5,
  "height": 1.3,
  "types": ["Psychic"],
  "abilities": ["Soundproof"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 122,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Scyther",
  "hp": 70,
  "atk": 110,
  "def": 80,
  "spa": 55,
  "spd": 80,
  "spe": 105,
  "weight": 56,
  "height": 1.5,
  "types": ["Bug", "Flying"],
  "abilities": ["Swarm"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 123,
      "evos": ["Scizor"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Jynx",
  "hp": 65,
  "atk": 50,
  "def": 35,
  "spa": 115,
  "spd": 95,
  "spe": 95,
  "weight": 40.6,
  "height": 1.4,
  "types": ["Ice", "Psychic"],
  "abilities": ["Oblivious"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 124,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Electabuzz",
  "hp": 65,
  "atk": 83,
  "def": 57,
  "spa": 95,
  "spd": 85,
  "spe": 105,
  "weight": 30,
  "height": 1.1,
  "types": ["Electric"],
  "abilities": ["Static"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 125,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Magmar",
  "hp": 65,
  "atk": 95,
  "def": 57,
  "spa": 100,
  "spd": 85,
  "spe": 93,
  "weight": 44.5,
  "height": 1.3,
  "types": ["Fire"],
  "abilities": ["Flame Body"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 126,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Pinsir",
  "hp": 65,
  "atk": 125,
  "def": 100,
  "spa": 55,
  "spd": 70,
  "spe": 85,
  "weight": 55,
  "height": 1.5,
  "types": ["Bug"],
  "abilities": ["Hyper Cutter"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 127,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Tauros",
  "hp": 75,
  "atk": 100,
  "def": 95,
  "spa": 40,
  "spd": 70,
  "spe": 110,
  "weight": 88.4,
  "height": 1.4,
  "types": ["Normal"],
  "abilities": ["Intimidate"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 128,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Magikarp",
  "hp": 20,
  "atk": 10,
  "def": 55,
  "spa": 15,
  "spd": 20,
  "spe": 80,
  "weight": 10,
  "height": 0.9,
  "types": ["Water"],
  "abilities": ["Swift Swim"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 129,
      "evos": ["Gyarados"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Gyarados",
  "hp": 95,
  "atk": 125,
  "def": 79,
  "spa": 60,
  "spd": 100,
  "spe": 81,
  "weight": 235,
  "height": 6.5,
  "types": ["Water", "Flying"],
  "abilities": ["Intimidate"],
  "formats": ["OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 130,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Lapras",
  "hp": 130,
  "atk": 85,
  "def": 80,
  "spa": 85,
  "spd": 95,
  "spe": 60,
  "weight": 220,
  "height": 2.5,
  "types": ["Water", "Ice"],
  "abilities": ["Shell Armor", "Water Absorb"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 131,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Ditto",
  "hp": 48,
  "atk": 48,
  "def": 48,
  "spa": 48,
  "spd": 48,
  "spe": 48,
  "weight": 4,
  "height": 0.3,
  "types": ["Normal"],
  "abilities": ["Limber"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 132,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Eevee",
  "hp": 55,
  "atk": 55,
  "def": 50,
  "spa": 45,
  "spd": 65,
  "spe": 55,
  "weight": 6.5,
  "height": 0.3,
  "types": ["Normal"],
  "abilities": ["Run Away"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 133,
      "evos": ["Espeon", "Flareon", "Jolteon", "Umbreon", "Vaporeon"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Vaporeon",
  "hp": 130,
  "atk": 65,
  "def": 60,
  "spa": 110,
  "spd": 95,
  "spe": 65,
  "weight": 29,
  "height": 1,
  "types": ["Water"],
  "abilities": ["Water Absorb"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 134,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Jolteon",
  "hp": 65,
  "atk": 65,
  "def": 60,
  "spa": 110,
  "spd": 95,
  "spe": 130,
  "weight": 24.5,
  "height": 0.8,
  "types": ["Electric"],
  "abilities": ["Volt Absorb"],
  "formats": ["OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 135,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Flareon",
  "hp": 65,
  "atk": 130,
  "def": 60,
  "spa": 95,
  "spd": 110,
  "spe": 65,
  "weight": 25,
  "height": 0.9,
  "types": ["Fire"],
  "abilities": ["Flash Fire"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 136,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Porygon",
  "hp": 65,
  "atk": 60,
  "def": 70,
  "spa": 85,
  "spd": 75,
  "spe": 40,
  "weight": 36.5,
  "height": 0.8,
  "types": ["Normal"],
  "abilities": ["Trace"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 137,
      "evos": ["Porygon2"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Omanyte",
  "hp": 35,
  "atk": 40,
  "def": 100,
  "spa": 90,
  "spd": 55,
  "spe": 35,
  "weight": 7.5,
  "height": 0.4,
  "types": ["Rock", "Water"],
  "abilities": ["Shell Armor", "Swift Swim"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 138,
      "evos": ["Omastar"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Omastar",
  "hp": 70,
  "atk": 60,
  "def": 125,
  "spa": 115,
  "spd": 70,
  "spe": 55,
  "weight": 35,
  "height": 1,
  "types": ["Rock", "Water"],
  "abilities": ["Shell Armor", "Swift Swim"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 139,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Kabuto",
  "hp": 30,
  "atk": 80,
  "def": 90,
  "spa": 55,
  "spd": 45,
  "spe": 55,
  "weight": 11.5,
  "height": 0.5,
  "types": ["Rock", "Water"],
  "abilities": ["Battle Armor", "Swift Swim"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 140,
      "evos": ["Kabutops"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Kabutops",
  "hp": 60,
  "atk": 115,
  "def": 105,
  "spa": 65,
  "spd": 70,
  "spe": 80,
  "weight": 40.5,
  "height": 1.3,
  "types": ["Rock", "Water"],
  "abilities": ["Battle Armor", "Swift Swim"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 141,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Aerodactyl",
  "hp": 80,
  "atk": 105,
  "def": 65,
  "spa": 60,
  "spd": 75,
  "spe": 130,
  "weight": 59,
  "height": 1.8,
  "types": ["Rock", "Flying"],
  "abilities": ["Pressure", "Rock Head"],
  "formats": ["OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 142,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Snorlax",
  "hp": 160,
  "atk": 110,
  "def": 65,
  "spa": 65,
  "spd": 110,
  "spe": 30,
  "weight": 460,
  "height": 2.1,
  "types": ["Normal"],
  "abilities": ["Immunity", "Thick Fat"],
  "formats": ["OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 143,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Articuno",
  "hp": 90,
  "atk": 85,
  "def": 100,
  "spa": 95,
  "spd": 125,
  "spe": 85,
  "weight": 55.4,
  "height": 1.7,
  "types": ["Ice", "Flying"],
  "abilities": ["Pressure"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 144,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Zapdos",
  "hp": 90,
  "atk": 90,
  "def": 85,
  "spa": 125,
  "spd": 90,
  "spe": 100,
  "weight": 52.6,
  "height": 1.6,
  "types": ["Electric", "Flying"],
  "abilities": ["Pressure"],
  "formats": ["OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 145,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Moltres",
  "hp": 90,
  "atk": 100,
  "def": 90,
  "spa": 125,
  "spd": 85,
  "spe": 90,
  "weight": 60,
  "height": 2,
  "types": ["Fire", "Flying"],
  "abilities": ["Pressure"],
  "formats": ["OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 146,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Dratini",
  "hp": 41,
  "atk": 64,
  "def": 45,
  "spa": 50,
  "spd": 50,
  "spe": 50,
  "weight": 3.3,
  "height": 1.8,
  "types": ["Dragon"],
  "abilities": ["Shed Skin"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 147,
      "evos": ["Dragonair"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Dragonair",
  "hp": 61,
  "atk": 84,
  "def": 65,
  "spa": 70,
  "spd": 70,
  "spe": 70,
  "weight": 16.5,
  "height": 4,
  "types": ["Dragon"],
  "abilities": ["Shed Skin"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 148,
      "evos": ["Dragonite"],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Dragonite",
  "hp": 91,
  "atk": 134,
  "def": 95,
  "spa": 100,
  "spd": 100,
  "spe": 80,
  "weight": 210,
  "height": 2.2,
  "types": ["Dragon", "Flying"],
  "abilities": ["Inner Focus"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 149,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Mewtwo",
  "hp": 106,
  "atk": 110,
  "def": 90,
  "spa": 154,
  "spd": 90,
  "spe": 130,
  "weight": 122,
  "height": 2,
  "types": ["Psychic"],
  "abilities": ["Pressure"],
  "formats": ["Uber"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 150,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Mew",
  "hp": 100,
  "atk": 100,
  "def": 100,
  "spa": 100,
  "spd": 100,
  "spe": 100,
  "weight": 4,
  "height": 0.4,
  "types": ["Psychic"],
  "abilities": ["Synchronize"],
  "formats": ["Uber"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 151,
      "evos": [],
      "alts": [],
      "genfamily": ["RB", "GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Chikorita",
  "hp": 45,
  "atk": 49,
  "def": 65,
  "spa": 49,
  "spd": 65,
  "spe": 45,
  "weight": 6.4,
  "height": 0.9,
  "types": ["Grass"],
  "abilities": ["Overgrow"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 152,
      "evos": ["Bayleef"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Bayleef",
  "hp": 60,
  "atk": 62,
  "def": 80,
  "spa": 63,
  "spd": 80,
  "spe": 60,
  "weight": 15.8,
  "height": 1.2,
  "types": ["Grass"],
  "abilities": ["Overgrow"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 153,
      "evos": ["Meganium"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Meganium",
  "hp": 80,
  "atk": 82,
  "def": 100,
  "spa": 83,
  "spd": 100,
  "spe": 80,
  "weight": 100.5,
  "height": 1.8,
  "types": ["Grass"],
  "abilities": ["Overgrow"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 154,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Cyndaquil",
  "hp": 39,
  "atk": 52,
  "def": 43,
  "spa": 60,
  "spd": 50,
  "spe": 65,
  "weight": 7.9,
  "height": 0.5,
  "types": ["Fire"],
  "abilities": ["Blaze"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 155,
      "evos": ["Quilava"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Quilava",
  "hp": 58,
  "atk": 64,
  "def": 58,
  "spa": 80,
  "spd": 65,
  "spe": 80,
  "weight": 19,
  "height": 0.9,
  "types": ["Fire"],
  "abilities": ["Blaze"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 156,
      "evos": ["Typhlosion"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Typhlosion",
  "hp": 78,
  "atk": 84,
  "def": 78,
  "spa": 109,
  "spd": 85,
  "spe": 100,
  "weight": 79.5,
  "height": 1.7,
  "types": ["Fire"],
  "abilities": ["Blaze"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 157,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Totodile",
  "hp": 50,
  "atk": 65,
  "def": 64,
  "spa": 44,
  "spd": 48,
  "spe": 43,
  "weight": 9.5,
  "height": 0.6,
  "types": ["Water"],
  "abilities": ["Torrent"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 158,
      "evos": ["Croconaw"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Croconaw",
  "hp": 65,
  "atk": 80,
  "def": 80,
  "spa": 59,
  "spd": 63,
  "spe": 58,
  "weight": 25,
  "height": 1.1,
  "types": ["Water"],
  "abilities": ["Torrent"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 159,
      "evos": ["Feraligatr"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Feraligatr",
  "hp": 85,
  "atk": 105,
  "def": 100,
  "spa": 79,
  "spd": 83,
  "spe": 78,
  "weight": 88.8,
  "height": 2.3,
  "types": ["Water"],
  "abilities": ["Torrent"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 160,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Igglybuff",
  "hp": 90,
  "atk": 30,
  "def": 15,
  "spa": 40,
  "spd": 20,
  "spe": 15,
  "weight": 1,
  "height": 0.3,
  "types": ["Normal"],
  "abilities": ["Cute Charm"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 174,
      "evos": ["Jigglypuff"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Togepi",
  "hp": 35,
  "atk": 20,
  "def": 65,
  "spa": 40,
  "spd": 65,
  "spe": 20,
  "weight": 1.5,
  "height": 0.3,
  "types": ["Normal"],
  "abilities": ["Hustle", "Serene Grace"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 175,
      "evos": ["Togetic"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Togetic",
  "hp": 55,
  "atk": 40,
  "def": 85,
  "spa": 80,
  "spd": 105,
  "spe": 40,
  "weight": 3.2,
  "height": 0.6,
  "types": ["Normal", "Flying"],
  "abilities": ["Hustle", "Serene Grace"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 176,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Cleffa",
  "hp": 50,
  "atk": 25,
  "def": 28,
  "spa": 45,
  "spd": 55,
  "spe": 15,
  "weight": 3,
  "height": 0.3,
  "types": ["Normal"],
  "abilities": ["Cute Charm"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 173,
      "evos": ["Clefairy"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Ampharos",
  "hp": 90,
  "atk": 75,
  "def": 75,
  "spa": 115,
  "spd": 90,
  "spe": 55,
  "weight": 61.5,
  "height": 1.4,
  "types": ["Electric"],
  "abilities": ["Static"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 181,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Bellossom",
  "hp": 75,
  "atk": 80,
  "def": 85,
  "spa": 90,
  "spd": 100,
  "spe": 50,
  "weight": 5.8,
  "height": 0.4,
  "types": ["Grass"],
  "abilities": ["Chlorophyll"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 182,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Marill",
  "hp": 70,
  "atk": 20,
  "def": 50,
  "spa": 20,
  "spd": 50,
  "spe": 40,
  "weight": 8.5,
  "height": 0.4,
  "types": ["Water"],
  "abilities": ["Huge Power", "Thick Fat"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 183,
      "evos": ["Azumarill"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Azumarill",
  "hp": 100,
  "atk": 50,
  "def": 80,
  "spa": 50,
  "spd": 80,
  "spe": 50,
  "weight": 28.5,
  "height": 0.8,
  "types": ["Water"],
  "abilities": ["Huge Power", "Thick Fat"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 184,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Jumpluff",
  "hp": 75,
  "atk": 55,
  "def": 70,
  "spa": 55,
  "spd": 85,
  "spe": 110,
  "weight": 3,
  "height": 0.8,
  "types": ["Grass", "Flying"],
  "abilities": ["Chlorophyll"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 189,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Snubbull",
  "hp": 60,
  "atk": 80,
  "def": 50,
  "spa": 40,
  "spd": 40,
  "spe": 30,
  "weight": 7.8,
  "height": 0.6,
  "types": ["Normal"],
  "abilities": ["Intimidate", "Run Away"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 209,
      "evos": ["Granbull"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Granbull",
  "hp": 90,
  "atk": 120,
  "def": 75,
  "spa": 60,
  "spd": 60,
  "spe": 45,
  "weight": 48.7,
  "height": 1.4,
  "types": ["Normal"],
  "abilities": ["Intimidate"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 210,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Raikou",
  "hp": 90,
  "atk": 85,
  "def": 75,
  "spa": 115,
  "spd": 100,
  "spe": 115,
  "weight": 178,
  "height": 1.9,
  "types": ["Electric"],
  "abilities": ["Pressure"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 243,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Entei",
  "hp": 115,
  "atk": 115,
  "def": 85,
  "spa": 90,
  "spd": 75,
  "spe": 100,
  "weight": 198,
  "height": 2.1,
  "types": ["Fire"],
  "abilities": ["Pressure"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 244,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Suicune",
  "hp": 100,
  "atk": 75,
  "def": 115,
  "spa": 90,
  "spd": 115,
  "spe": 85,
  "weight": 187,
  "height": 2,
  "types": ["Water"],
  "abilities": ["Pressure"],
  "formats": ["OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 245,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Noctowl",
  "hp": 100,
  "atk": 50,
  "def": 50,
  "spa": 76,
  "spd": 96,
  "spe": 70,
  "weight": 40.8,
  "height": 1.6,
  "types": ["Normal", "Flying"],
  "abilities": ["Insomnia", "Keen Eye"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 164,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Ariados",
  "hp": 70,
  "atk": 90,
  "def": 70,
  "spa": 60,
  "spd": 60,
  "spe": 40,
  "weight": 33.5,
  "height": 1.1,
  "types": ["Bug", "Poison"],
  "abilities": ["Insomnia", "Swarm"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 168,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Qwilfish",
  "hp": 65,
  "atk": 95,
  "def": 75,
  "spa": 55,
  "spd": 55,
  "spe": 85,
  "weight": 3.9,
  "height": 0.5,
  "types": ["Water", "Poison"],
  "abilities": ["Poison Point", "Swift Swim"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 211,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Magcargo",
  "hp": 50,
  "atk": 50,
  "def": 120,
  "spa": 80,
  "spd": 80,
  "spe": 30,
  "weight": 55,
  "height": 0.8,
  "types": ["Fire", "Rock"],
  "abilities": ["Flame Body", "Magma Armor"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 219,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Corsola",
  "hp": 55,
  "atk": 55,
  "def": 85,
  "spa": 65,
  "spd": 85,
  "spe": 35,
  "weight": 5,
  "height": 0.6,
  "types": ["Water", "Rock"],
  "abilities": ["Hustle", "Natural Cure"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 222,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Mantine",
  "hp": 65,
  "atk": 40,
  "def": 70,
  "spa": 80,
  "spd": 140,
  "spe": 70,
  "weight": 220,
  "height": 2.1,
  "types": ["Water", "Flying"],
  "abilities": ["Swift Swim", "Water Absorb"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 226,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Sentret",
  "hp": 35,
  "atk": 46,
  "def": 34,
  "spa": 35,
  "spd": 45,
  "spe": 20,
  "weight": 6,
  "height": 0.8,
  "types": ["Normal"],
  "abilities": ["Keen Eye", "Run Away"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 161,
      "evos": ["Furret"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Furret",
  "hp": 85,
  "atk": 76,
  "def": 64,
  "spa": 45,
  "spd": 55,
  "spe": 90,
  "weight": 32.5,
  "height": 1.8,
  "types": ["Normal"],
  "abilities": ["Keen Eye", "Run Away"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 162,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Hoothoot",
  "hp": 60,
  "atk": 30,
  "def": 30,
  "spa": 36,
  "spd": 56,
  "spe": 50,
  "weight": 21.2,
  "height": 0.7,
  "types": ["Normal", "Flying"],
  "abilities": ["Insomnia", "Keen Eye"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 163,
      "evos": ["Noctowl"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Ledyba",
  "hp": 40,
  "atk": 20,
  "def": 30,
  "spa": 40,
  "spd": 80,
  "spe": 55,
  "weight": 10.8,
  "height": 1,
  "types": ["Bug", "Flying"],
  "abilities": ["Early Bird", "Swarm"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 165,
      "evos": ["Ledian"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Ledian",
  "hp": 55,
  "atk": 35,
  "def": 50,
  "spa": 55,
  "spd": 110,
  "spe": 85,
  "weight": 35.6,
  "height": 1.4,
  "types": ["Bug", "Flying"],
  "abilities": ["Early Bird", "Swarm"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 166,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Spinarak",
  "hp": 40,
  "atk": 60,
  "def": 40,
  "spa": 40,
  "spd": 40,
  "spe": 30,
  "weight": 8.5,
  "height": 0.5,
  "types": ["Bug", "Poison"],
  "abilities": ["Insomnia", "Swarm"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 167,
      "evos": ["Ariados"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Crobat",
  "hp": 85,
  "atk": 90,
  "def": 80,
  "spa": 70,
  "spd": 80,
  "spe": 130,
  "weight": 75,
  "height": 1.8,
  "types": ["Poison", "Flying"],
  "abilities": ["Inner Focus"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 169,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Chinchou",
  "hp": 75,
  "atk": 38,
  "def": 38,
  "spa": 56,
  "spd": 56,
  "spe": 67,
  "weight": 12,
  "height": 0.5,
  "types": ["Water", "Electric"],
  "abilities": ["Illuminate", "Volt Absorb"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 170,
      "evos": ["Lanturn"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Lanturn",
  "hp": 125,
  "atk": 58,
  "def": 58,
  "spa": 76,
  "spd": 76,
  "spe": 67,
  "weight": 22.5,
  "height": 1.2,
  "types": ["Water", "Electric"],
  "abilities": ["Illuminate", "Volt Absorb"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 171,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Pichu",
  "hp": 20,
  "atk": 40,
  "def": 15,
  "spa": 35,
  "spd": 35,
  "spe": 60,
  "weight": 2,
  "height": 0.3,
  "types": ["Electric"],
  "abilities": ["Static"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 172,
      "evos": ["Pikachu"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Natu",
  "hp": 40,
  "atk": 50,
  "def": 45,
  "spa": 70,
  "spd": 45,
  "spe": 70,
  "weight": 2,
  "height": 0.2,
  "types": ["Psychic", "Flying"],
  "abilities": ["Early Bird", "Synchronize"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 177,
      "evos": ["Xatu"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Xatu",
  "hp": 65,
  "atk": 75,
  "def": 70,
  "spa": 95,
  "spd": 70,
  "spe": 95,
  "weight": 15,
  "height": 1.5,
  "types": ["Psychic", "Flying"],
  "abilities": ["Early Bird", "Synchronize"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 178,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Mareep",
  "hp": 55,
  "atk": 40,
  "def": 40,
  "spa": 65,
  "spd": 45,
  "spe": 35,
  "weight": 7.8,
  "height": 0.6,
  "types": ["Electric"],
  "abilities": ["Static"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 179,
      "evos": ["Flaaffy"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Flaaffy",
  "hp": 70,
  "atk": 55,
  "def": 55,
  "spa": 80,
  "spd": 60,
  "spe": 45,
  "weight": 13.3,
  "height": 0.8,
  "types": ["Electric"],
  "abilities": ["Static"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 180,
      "evos": ["Ampharos"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Sudowoodo",
  "hp": 70,
  "atk": 100,
  "def": 115,
  "spa": 30,
  "spd": 65,
  "spe": 30,
  "weight": 38,
  "height": 1.2,
  "types": ["Rock"],
  "abilities": ["Rock Head", "Sturdy"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 185,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Politoed",
  "hp": 90,
  "atk": 75,
  "def": 75,
  "spa": 90,
  "spd": 100,
  "spe": 70,
  "weight": 33.9,
  "height": 1.1,
  "types": ["Water"],
  "abilities": ["Damp", "Water Absorb"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 186,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Hoppip",
  "hp": 35,
  "atk": 35,
  "def": 40,
  "spa": 35,
  "spd": 55,
  "spe": 50,
  "weight": 0.5,
  "height": 0.4,
  "types": ["Grass", "Flying"],
  "abilities": ["Chlorophyll"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 187,
      "evos": ["Skiploom"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Skiploom",
  "hp": 55,
  "atk": 45,
  "def": 50,
  "spa": 45,
  "spd": 65,
  "spe": 80,
  "weight": 1,
  "height": 0.6,
  "types": ["Grass", "Flying"],
  "abilities": ["Chlorophyll"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 188,
      "evos": ["Jumpluff"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Aipom",
  "hp": 55,
  "atk": 70,
  "def": 55,
  "spa": 40,
  "spd": 55,
  "spe": 85,
  "weight": 11.5,
  "height": 0.8,
  "types": ["Normal"],
  "abilities": ["Pickup", "Run Away"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 190,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Sunkern",
  "hp": 30,
  "atk": 30,
  "def": 30,
  "spa": 30,
  "spd": 30,
  "spe": 30,
  "weight": 1.8,
  "height": 0.3,
  "types": ["Grass"],
  "abilities": ["Chlorophyll"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 191,
      "evos": ["Sunflora"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Sunflora",
  "hp": 75,
  "atk": 75,
  "def": 55,
  "spa": 105,
  "spd": 85,
  "spe": 30,
  "weight": 8.5,
  "height": 0.8,
  "types": ["Grass"],
  "abilities": ["Chlorophyll"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 192,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Yanma",
  "hp": 65,
  "atk": 65,
  "def": 45,
  "spa": 75,
  "spd": 45,
  "spe": 95,
  "weight": 38,
  "height": 1.2,
  "types": ["Bug", "Flying"],
  "abilities": ["Compound Eyes", "Speed Boost"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 193,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Wooper",
  "hp": 55,
  "atk": 45,
  "def": 45,
  "spa": 25,
  "spd": 25,
  "spe": 15,
  "weight": 8.5,
  "height": 0.4,
  "types": ["Water", "Ground"],
  "abilities": ["Damp", "Water Absorb"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 194,
      "evos": ["Quagsire"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Quagsire",
  "hp": 95,
  "atk": 85,
  "def": 85,
  "spa": 65,
  "spd": 65,
  "spe": 35,
  "weight": 75,
  "height": 1.4,
  "types": ["Water", "Ground"],
  "abilities": ["Damp", "Water Absorb"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 195,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Espeon",
  "hp": 65,
  "atk": 65,
  "def": 60,
  "spa": 130,
  "spd": 95,
  "spe": 110,
  "weight": 26.5,
  "height": 0.9,
  "types": ["Psychic"],
  "abilities": ["Synchronize"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 196,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Umbreon",
  "hp": 95,
  "atk": 65,
  "def": 110,
  "spa": 60,
  "spd": 130,
  "spe": 65,
  "weight": 27,
  "height": 1,
  "types": ["Dark"],
  "abilities": ["Synchronize"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 197,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Murkrow",
  "hp": 60,
  "atk": 85,
  "def": 42,
  "spa": 85,
  "spd": 42,
  "spe": 91,
  "weight": 2.1,
  "height": 0.5,
  "types": ["Dark", "Flying"],
  "abilities": ["Insomnia"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 198,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Slowking",
  "hp": 95,
  "atk": 75,
  "def": 80,
  "spa": 100,
  "spd": 110,
  "spe": 30,
  "weight": 79.5,
  "height": 2,
  "types": ["Water", "Psychic"],
  "abilities": ["Oblivious", "Own Tempo"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 199,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Misdreavus",
  "hp": 60,
  "atk": 60,
  "def": 60,
  "spa": 85,
  "spd": 85,
  "spe": 85,
  "weight": 1,
  "height": 0.7,
  "types": ["Ghost"],
  "abilities": ["Levitate"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 200,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Unown",
  "hp": 48,
  "atk": 72,
  "def": 48,
  "spa": 72,
  "spd": 48,
  "spe": 48,
  "weight": 5,
  "height": 0.5,
  "types": ["Psychic"],
  "abilities": ["Levitate"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 201,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Wobbuffet",
  "hp": 190,
  "atk": 33,
  "def": 58,
  "spa": 33,
  "spd": 58,
  "spe": 33,
  "weight": 28.5,
  "height": 1.3,
  "types": ["Psychic"],
  "abilities": ["Shadow Tag"],
  "formats": ["Uber"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 202,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Girafarig",
  "hp": 70,
  "atk": 80,
  "def": 65,
  "spa": 90,
  "spd": 65,
  "spe": 85,
  "weight": 41.5,
  "height": 1.5,
  "types": ["Normal", "Psychic"],
  "abilities": ["Early Bird", "Inner Focus"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 203,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Pineco",
  "hp": 50,
  "atk": 65,
  "def": 90,
  "spa": 35,
  "spd": 35,
  "spe": 15,
  "weight": 7.2,
  "height": 0.6,
  "types": ["Bug"],
  "abilities": ["Sturdy"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 204,
      "evos": ["Forretress"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Forretress",
  "hp": 75,
  "atk": 90,
  "def": 140,
  "spa": 60,
  "spd": 60,
  "spe": 40,
  "weight": 125.8,
  "height": 1.2,
  "types": ["Bug", "Steel"],
  "abilities": ["Sturdy"],
  "formats": ["OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 205,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Dunsparce",
  "hp": 100,
  "atk": 70,
  "def": 70,
  "spa": 65,
  "spd": 65,
  "spe": 45,
  "weight": 14,
  "height": 1.5,
  "types": ["Normal"],
  "abilities": ["Run Away", "Serene Grace"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 206,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Gligar",
  "hp": 65,
  "atk": 75,
  "def": 105,
  "spa": 35,
  "spd": 65,
  "spe": 85,
  "weight": 64.8,
  "height": 1.1,
  "types": ["Ground", "Flying"],
  "abilities": ["Hyper Cutter", "Sand Veil"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 207,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Steelix",
  "hp": 75,
  "atk": 85,
  "def": 200,
  "spa": 55,
  "spd": 65,
  "spe": 30,
  "weight": 400,
  "height": 9.2,
  "types": ["Steel", "Ground"],
  "abilities": ["Rock Head", "Sturdy"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 208,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Scizor",
  "hp": 70,
  "atk": 130,
  "def": 100,
  "spa": 55,
  "spd": 80,
  "spe": 65,
  "weight": 118,
  "height": 1.8,
  "types": ["Bug", "Steel"],
  "abilities": ["Swarm"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 212,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Shuckle",
  "hp": 20,
  "atk": 10,
  "def": 230,
  "spa": 10,
  "spd": 230,
  "spe": 5,
  "weight": 20.5,
  "height": 0.6,
  "types": ["Bug", "Rock"],
  "abilities": ["Sturdy"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 213,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Heracross",
  "hp": 80,
  "atk": 125,
  "def": 75,
  "spa": 40,
  "spd": 95,
  "spe": 85,
  "weight": 54,
  "height": 1.5,
  "types": ["Bug", "Fighting"],
  "abilities": ["Guts", "Swarm"],
  "formats": ["OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 214,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Sneasel",
  "hp": 55,
  "atk": 95,
  "def": 55,
  "spa": 35,
  "spd": 75,
  "spe": 115,
  "weight": 28,
  "height": 0.9,
  "types": ["Dark", "Ice"],
  "abilities": ["Inner Focus", "Keen Eye"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 215,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Teddiursa",
  "hp": 60,
  "atk": 80,
  "def": 50,
  "spa": 50,
  "spd": 50,
  "spe": 40,
  "weight": 8.8,
  "height": 0.6,
  "types": ["Normal"],
  "abilities": ["Pickup"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 216,
      "evos": ["Ursaring"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Ursaring",
  "hp": 90,
  "atk": 130,
  "def": 75,
  "spa": 75,
  "spd": 75,
  "spe": 55,
  "weight": 125.8,
  "height": 1.8,
  "types": ["Normal"],
  "abilities": ["Guts"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 217,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Slugma",
  "hp": 40,
  "atk": 40,
  "def": 40,
  "spa": 70,
  "spd": 40,
  "spe": 20,
  "weight": 35,
  "height": 0.7,
  "types": ["Fire"],
  "abilities": ["Flame Body", "Magma Armor"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 218,
      "evos": ["Magcargo"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Swinub",
  "hp": 50,
  "atk": 50,
  "def": 40,
  "spa": 30,
  "spd": 30,
  "spe": 50,
  "weight": 6.5,
  "height": 0.4,
  "types": ["Ice", "Ground"],
  "abilities": ["Oblivious"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 220,
      "evos": ["Piloswine"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Piloswine",
  "hp": 100,
  "atk": 100,
  "def": 80,
  "spa": 60,
  "spd": 60,
  "spe": 50,
  "weight": 55.8,
  "height": 1.1,
  "types": ["Ice", "Ground"],
  "abilities": ["Oblivious"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 221,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Remoraid",
  "hp": 35,
  "atk": 65,
  "def": 35,
  "spa": 65,
  "spd": 35,
  "spe": 65,
  "weight": 12,
  "height": 0.6,
  "types": ["Water"],
  "abilities": ["Hustle"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 223,
      "evos": ["Octillery"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Octillery",
  "hp": 75,
  "atk": 105,
  "def": 75,
  "spa": 105,
  "spd": 75,
  "spe": 45,
  "weight": 28.5,
  "height": 0.9,
  "types": ["Water"],
  "abilities": ["Suction Cups"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 224,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Delibird",
  "hp": 45,
  "atk": 55,
  "def": 45,
  "spa": 65,
  "spd": 45,
  "spe": 75,
  "weight": 16,
  "height": 0.9,
  "types": ["Ice", "Flying"],
  "abilities": ["Hustle", "Vital Spirit"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 225,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Skarmory",
  "hp": 65,
  "atk": 80,
  "def": 140,
  "spa": 40,
  "spd": 70,
  "spe": 70,
  "weight": 50.5,
  "height": 1.7,
  "types": ["Steel", "Flying"],
  "abilities": ["Keen Eye", "Sturdy"],
  "formats": ["OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 227,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Houndour",
  "hp": 45,
  "atk": 60,
  "def": 30,
  "spa": 80,
  "spd": 50,
  "spe": 65,
  "weight": 10.8,
  "height": 0.6,
  "types": ["Dark", "Fire"],
  "abilities": ["Early Bird", "Flash Fire"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 228,
      "evos": ["Houndoom"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Houndoom",
  "hp": 75,
  "atk": 90,
  "def": 50,
  "spa": 110,
  "spd": 80,
  "spe": 95,
  "weight": 35,
  "height": 1.4,
  "types": ["Dark", "Fire"],
  "abilities": ["Early Bird", "Flash Fire"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 229,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Kingdra",
  "hp": 75,
  "atk": 95,
  "def": 95,
  "spa": 95,
  "spd": 95,
  "spe": 85,
  "weight": 152,
  "height": 1.8,
  "types": ["Water", "Dragon"],
  "abilities": ["Swift Swim"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 230,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Phanpy",
  "hp": 90,
  "atk": 60,
  "def": 60,
  "spa": 40,
  "spd": 40,
  "spe": 40,
  "weight": 33.5,
  "height": 0.5,
  "types": ["Ground"],
  "abilities": ["Pickup"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 231,
      "evos": ["Donphan"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Donphan",
  "hp": 90,
  "atk": 120,
  "def": 120,
  "spa": 60,
  "spd": 60,
  "spe": 50,
  "weight": 120,
  "height": 1.1,
  "types": ["Ground"],
  "abilities": ["Sturdy"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 232,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Porygon2",
  "hp": 85,
  "atk": 80,
  "def": 90,
  "spa": 105,
  "spd": 95,
  "spe": 60,
  "weight": 32.5,
  "height": 0.6,
  "types": ["Normal"],
  "abilities": ["Trace"],
  "formats": ["OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 233,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Stantler",
  "hp": 73,
  "atk": 95,
  "def": 62,
  "spa": 85,
  "spd": 65,
  "spe": 85,
  "weight": 71.2,
  "height": 1.4,
  "types": ["Normal"],
  "abilities": ["Intimidate"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 234,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Smeargle",
  "hp": 55,
  "atk": 20,
  "def": 35,
  "spa": 20,
  "spd": 45,
  "spe": 75,
  "weight": 58,
  "height": 1.2,
  "types": ["Normal"],
  "abilities": ["Own Tempo"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 235,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Tyrogue",
  "hp": 35,
  "atk": 35,
  "def": 35,
  "spa": 35,
  "spd": 35,
  "spe": 35,
  "weight": 21,
  "height": 0.7,
  "types": ["Fighting"],
  "abilities": ["Guts"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 236,
      "evos": ["Hitmonchan", "Hitmonlee", "Hitmontop"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Hitmontop",
  "hp": 50,
  "atk": 95,
  "def": 95,
  "spa": 35,
  "spd": 110,
  "spe": 70,
  "weight": 48,
  "height": 1.4,
  "types": ["Fighting"],
  "abilities": ["Intimidate"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 237,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Smoochum",
  "hp": 45,
  "atk": 30,
  "def": 15,
  "spa": 85,
  "spd": 65,
  "spe": 65,
  "weight": 6,
  "height": 0.4,
  "types": ["Ice", "Psychic"],
  "abilities": ["Oblivious"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 238,
      "evos": ["Jynx"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Elekid",
  "hp": 45,
  "atk": 63,
  "def": 37,
  "spa": 65,
  "spd": 55,
  "spe": 95,
  "weight": 23.5,
  "height": 0.6,
  "types": ["Electric"],
  "abilities": ["Static"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 239,
      "evos": ["Electabuzz"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Magby",
  "hp": 45,
  "atk": 75,
  "def": 37,
  "spa": 70,
  "spd": 55,
  "spe": 83,
  "weight": 21.4,
  "height": 0.7,
  "types": ["Fire"],
  "abilities": ["Flame Body"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 240,
      "evos": ["Magmar"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Miltank",
  "hp": 95,
  "atk": 80,
  "def": 105,
  "spa": 40,
  "spd": 70,
  "spe": 100,
  "weight": 75.5,
  "height": 1.2,
  "types": ["Normal"],
  "abilities": ["Thick Fat"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 241,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Blissey",
  "hp": 255,
  "atk": 10,
  "def": 10,
  "spa": 75,
  "spd": 135,
  "spe": 55,
  "weight": 46.8,
  "height": 1.5,
  "types": ["Normal"],
  "abilities": ["Natural Cure", "Serene Grace"],
  "formats": ["OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 242,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Larvitar",
  "hp": 50,
  "atk": 64,
  "def": 50,
  "spa": 45,
  "spd": 50,
  "spe": 41,
  "weight": 72,
  "height": 0.6,
  "types": ["Rock", "Ground"],
  "abilities": ["Guts"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 246,
      "evos": ["Pupitar"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Pupitar",
  "hp": 70,
  "atk": 84,
  "def": 70,
  "spa": 65,
  "spd": 70,
  "spe": 51,
  "weight": 152,
  "height": 1.2,
  "types": ["Rock", "Ground"],
  "abilities": ["Shed Skin"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 247,
      "evos": ["Tyranitar"],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Tyranitar",
  "hp": 100,
  "atk": 134,
  "def": 110,
  "spa": 95,
  "spd": 100,
  "spe": 61,
  "weight": 202,
  "height": 2,
  "types": ["Rock", "Dark"],
  "abilities": ["Sand Stream"],
  "formats": ["OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 248,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Lugia",
  "hp": 106,
  "atk": 90,
  "def": 130,
  "spa": 90,
  "spd": 154,
  "spe": 110,
  "weight": 216,
  "height": 5.2,
  "types": ["Psychic", "Flying"],
  "abilities": ["Pressure"],
  "formats": ["Uber"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 249,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Ho-Oh",
  "hp": 106,
  "atk": 130,
  "def": 90,
  "spa": 110,
  "spd": 154,
  "spe": 90,
  "weight": 199,
  "height": 3.8,
  "types": ["Fire", "Flying"],
  "abilities": ["Pressure"],
  "formats": ["Uber"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 250,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Celebi",
  "hp": 100,
  "atk": 100,
  "def": 100,
  "spa": 100,
  "spd": 100,
  "spe": 100,
  "weight": 5,
  "height": 0.6,
  "types": ["Psychic", "Grass"],
  "abilities": ["Natural Cure"],
  "formats": ["OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 251,
      "evos": [],
      "alts": [],
      "genfamily": ["GS", "RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Milotic",
  "hp": 95,
  "atk": 60,
  "def": 79,
  "spa": 100,
  "spd": 125,
  "spe": 81,
  "weight": 162,
  "height": 6.2,
  "types": ["Water"],
  "abilities": ["Marvel Scale"],
  "formats": ["OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 350,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Beautifly",
  "hp": 60,
  "atk": 70,
  "def": 50,
  "spa": 90,
  "spd": 50,
  "spe": 65,
  "weight": 28.4,
  "height": 1,
  "types": ["Bug", "Flying"],
  "abilities": ["Swarm"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 267,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Ralts",
  "hp": 28,
  "atk": 25,
  "def": 25,
  "spa": 45,
  "spd": 35,
  "spe": 40,
  "weight": 6.6,
  "height": 0.4,
  "types": ["Psychic"],
  "abilities": ["Synchronize", "Trace"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 280,
      "evos": ["Kirlia"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Kirlia",
  "hp": 38,
  "atk": 35,
  "def": 35,
  "spa": 65,
  "spd": 55,
  "spe": 50,
  "weight": 20.2,
  "height": 0.8,
  "types": ["Psychic"],
  "abilities": ["Synchronize", "Trace"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 281,
      "evos": ["Gardevoir"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Gardevoir",
  "hp": 68,
  "atk": 65,
  "def": 65,
  "spa": 125,
  "spd": 115,
  "spe": 80,
  "weight": 48.4,
  "height": 1.6,
  "types": ["Psychic"],
  "abilities": ["Synchronize", "Trace"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 282,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Exploud",
  "hp": 104,
  "atk": 91,
  "def": 63,
  "spa": 91,
  "spd": 63,
  "spe": 68,
  "weight": 84,
  "height": 1.5,
  "types": ["Normal"],
  "abilities": ["Soundproof"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 295,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Azurill",
  "hp": 50,
  "atk": 20,
  "def": 40,
  "spa": 20,
  "spd": 40,
  "spe": 20,
  "weight": 2,
  "height": 0.2,
  "types": ["Normal"],
  "abilities": ["Huge Power", "Thick Fat"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 298,
      "evos": ["Marill"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Mawile",
  "hp": 50,
  "atk": 85,
  "def": 85,
  "spa": 55,
  "spd": 55,
  "spe": 50,
  "weight": 11.5,
  "height": 0.6,
  "types": ["Steel"],
  "abilities": ["Hyper Cutter", "Intimidate"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 303,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Plusle",
  "hp": 60,
  "atk": 50,
  "def": 40,
  "spa": 85,
  "spd": 75,
  "spe": 95,
  "weight": 4.2,
  "height": 0.4,
  "types": ["Electric"],
  "abilities": ["Plus"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 311,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Minun",
  "hp": 60,
  "atk": 40,
  "def": 50,
  "spa": 75,
  "spd": 85,
  "spe": 95,
  "weight": 4.2,
  "height": 0.4,
  "types": ["Electric"],
  "abilities": ["Minus"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 312,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Kecleon",
  "hp": 60,
  "atk": 90,
  "def": 70,
  "spa": 60,
  "spd": 120,
  "spe": 40,
  "weight": 22,
  "height": 1,
  "types": ["Normal"],
  "abilities": ["Color Change"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 352,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Duskull",
  "hp": 20,
  "atk": 40,
  "def": 90,
  "spa": 30,
  "spd": 90,
  "spe": 25,
  "weight": 15,
  "height": 0.8,
  "types": ["Ghost"],
  "abilities": ["Levitate"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 355,
      "evos": ["Dusclops"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Dusclops",
  "hp": 40,
  "atk": 70,
  "def": 130,
  "spa": 60,
  "spd": 130,
  "spe": 25,
  "weight": 30.6,
  "height": 1.6,
  "types": ["Ghost"],
  "abilities": ["Pressure"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 356,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Regirock",
  "hp": 80,
  "atk": 100,
  "def": 200,
  "spa": 50,
  "spd": 100,
  "spe": 50,
  "weight": 230,
  "height": 1.7,
  "types": ["Rock"],
  "abilities": ["Clear Body"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 377,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Regice",
  "hp": 80,
  "atk": 50,
  "def": 100,
  "spa": 100,
  "spd": 200,
  "spe": 50,
  "weight": 175,
  "height": 1.8,
  "types": ["Ice"],
  "abilities": ["Clear Body"],
  "formats": ["OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 378,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Registeel",
  "hp": 80,
  "atk": 75,
  "def": 150,
  "spa": 75,
  "spd": 150,
  "spe": 50,
  "weight": 205,
  "height": 1.9,
  "types": ["Steel"],
  "abilities": ["Clear Body"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 379,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Swellow",
  "hp": 60,
  "atk": 85,
  "def": 60,
  "spa": 50,
  "spd": 50,
  "spe": 125,
  "weight": 19.8,
  "height": 0.7,
  "types": ["Normal", "Flying"],
  "abilities": ["Guts"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 277,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Wingull",
  "hp": 40,
  "atk": 30,
  "def": 30,
  "spa": 55,
  "spd": 30,
  "spe": 85,
  "weight": 9.5,
  "height": 0.6,
  "types": ["Water", "Flying"],
  "abilities": ["Keen Eye"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 278,
      "evos": ["Pelipper"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Pelipper",
  "hp": 60,
  "atk": 50,
  "def": 100,
  "spa": 85,
  "spd": 70,
  "spe": 65,
  "weight": 28,
  "height": 1.2,
  "types": ["Water", "Flying"],
  "abilities": ["Keen Eye"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 279,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Masquerain",
  "hp": 70,
  "atk": 60,
  "def": 62,
  "spa": 80,
  "spd": 82,
  "spe": 60,
  "weight": 3.6,
  "height": 0.8,
  "types": ["Bug", "Flying"],
  "abilities": ["Intimidate"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 284,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Delcatty",
  "hp": 70,
  "atk": 65,
  "def": 65,
  "spa": 55,
  "spd": 55,
  "spe": 70,
  "weight": 32.6,
  "height": 1.1,
  "types": ["Normal"],
  "abilities": ["Cute Charm"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 301,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Volbeat",
  "hp": 65,
  "atk": 73,
  "def": 55,
  "spa": 47,
  "spd": 75,
  "spe": 85,
  "weight": 17.7,
  "height": 0.7,
  "types": ["Bug"],
  "abilities": ["Illuminate", "Swarm"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 313,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Illumise",
  "hp": 65,
  "atk": 47,
  "def": 55,
  "spa": 73,
  "spd": 75,
  "spe": 85,
  "weight": 17.7,
  "height": 0.6,
  "types": ["Bug"],
  "abilities": ["Oblivious"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 314,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Torkoal",
  "hp": 70,
  "atk": 85,
  "def": 140,
  "spa": 85,
  "spd": 70,
  "spe": 20,
  "weight": 80.4,
  "height": 0.5,
  "types": ["Fire"],
  "abilities": ["White Smoke"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 324,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Lunatone",
  "hp": 70,
  "atk": 55,
  "def": 65,
  "spa": 95,
  "spd": 85,
  "spe": 70,
  "weight": 168,
  "height": 1,
  "types": ["Rock", "Psychic"],
  "abilities": ["Levitate"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 337,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Solrock",
  "hp": 70,
  "atk": 95,
  "def": 85,
  "spa": 55,
  "spd": 65,
  "spe": 70,
  "weight": 154,
  "height": 1.2,
  "types": ["Rock", "Psychic"],
  "abilities": ["Levitate"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 338,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Castform",
  "hp": 70,
  "atk": 70,
  "def": 70,
  "spa": 70,
  "spd": 70,
  "spe": 70,
  "weight": 0.8,
  "height": 0.3,
  "types": ["Normal"],
  "abilities": ["Forecast"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 351,
      "evos": [],
      "alts": ["Castform-Snowy", "Castform-Rainy", "Castform-Sunny"],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Chimecho",
  "hp": 65,
  "atk": 50,
  "def": 70,
  "spa": 95,
  "spd": 80,
  "spe": 65,
  "weight": 1,
  "height": 0.6,
  "types": ["Psychic"],
  "abilities": ["Levitate"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 358,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Trapinch",
  "hp": 45,
  "atk": 100,
  "def": 45,
  "spa": 45,
  "spd": 45,
  "spe": 10,
  "weight": 15,
  "height": 0.7,
  "types": ["Ground"],
  "abilities": ["Arena Trap", "Hyper Cutter"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 328,
      "evos": ["Vibrava"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Vibrava",
  "hp": 50,
  "atk": 70,
  "def": 50,
  "spa": 50,
  "spd": 50,
  "spe": 70,
  "weight": 15.3,
  "height": 1.1,
  "types": ["Ground", "Dragon"],
  "abilities": ["Levitate"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 329,
      "evos": ["Flygon"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Flygon",
  "hp": 80,
  "atk": 100,
  "def": 80,
  "spa": 80,
  "spd": 80,
  "spe": 100,
  "weight": 82,
  "height": 2,
  "types": ["Ground", "Dragon"],
  "abilities": ["Levitate"],
  "formats": ["OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 330,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Treecko",
  "hp": 40,
  "atk": 45,
  "def": 35,
  "spa": 65,
  "spd": 55,
  "spe": 70,
  "weight": 5,
  "height": 0.5,
  "types": ["Grass"],
  "abilities": ["Overgrow"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 252,
      "evos": ["Grovyle"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Grovyle",
  "hp": 50,
  "atk": 65,
  "def": 45,
  "spa": 85,
  "spd": 65,
  "spe": 95,
  "weight": 21.6,
  "height": 0.9,
  "types": ["Grass"],
  "abilities": ["Overgrow"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 253,
      "evos": ["Sceptile"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Sceptile",
  "hp": 70,
  "atk": 85,
  "def": 65,
  "spa": 105,
  "spd": 85,
  "spe": 120,
  "weight": 52.2,
  "height": 1.7,
  "types": ["Grass"],
  "abilities": ["Overgrow"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 254,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Torchic",
  "hp": 45,
  "atk": 60,
  "def": 40,
  "spa": 70,
  "spd": 50,
  "spe": 45,
  "weight": 2.5,
  "height": 0.4,
  "types": ["Fire"],
  "abilities": ["Blaze"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 255,
      "evos": ["Combusken"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Combusken",
  "hp": 60,
  "atk": 85,
  "def": 60,
  "spa": 85,
  "spd": 60,
  "spe": 55,
  "weight": 19.5,
  "height": 0.9,
  "types": ["Fire", "Fighting"],
  "abilities": ["Blaze"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 256,
      "evos": ["Blaziken"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Blaziken",
  "hp": 80,
  "atk": 120,
  "def": 70,
  "spa": 110,
  "spd": 70,
  "spe": 80,
  "weight": 52,
  "height": 1.9,
  "types": ["Fire", "Fighting"],
  "abilities": ["Blaze"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 257,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Mudkip",
  "hp": 50,
  "atk": 70,
  "def": 50,
  "spa": 50,
  "spd": 50,
  "spe": 40,
  "weight": 7.6,
  "height": 0.4,
  "types": ["Water"],
  "abilities": ["Torrent"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 258,
      "evos": ["Marshtomp"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Marshtomp",
  "hp": 70,
  "atk": 85,
  "def": 70,
  "spa": 60,
  "spd": 70,
  "spe": 50,
  "weight": 28,
  "height": 0.7,
  "types": ["Water", "Ground"],
  "abilities": ["Torrent"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 259,
      "evos": ["Swampert"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Swampert",
  "hp": 100,
  "atk": 110,
  "def": 90,
  "spa": 85,
  "spd": 90,
  "spe": 60,
  "weight": 81.9,
  "height": 1.5,
  "types": ["Water", "Ground"],
  "abilities": ["Torrent"],
  "formats": ["OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 260,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Poochyena",
  "hp": 35,
  "atk": 55,
  "def": 35,
  "spa": 30,
  "spd": 30,
  "spe": 35,
  "weight": 13.6,
  "height": 0.5,
  "types": ["Dark"],
  "abilities": ["Run Away"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 261,
      "evos": ["Mightyena"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Mightyena",
  "hp": 70,
  "atk": 90,
  "def": 70,
  "spa": 60,
  "spd": 60,
  "spe": 70,
  "weight": 37,
  "height": 1,
  "types": ["Dark"],
  "abilities": ["Intimidate"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 262,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Zigzagoon",
  "hp": 38,
  "atk": 30,
  "def": 41,
  "spa": 30,
  "spd": 41,
  "spe": 60,
  "weight": 17.5,
  "height": 0.4,
  "types": ["Normal"],
  "abilities": ["Pickup"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 263,
      "evos": ["Linoone"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Linoone",
  "hp": 78,
  "atk": 70,
  "def": 61,
  "spa": 50,
  "spd": 61,
  "spe": 100,
  "weight": 32.5,
  "height": 0.5,
  "types": ["Normal"],
  "abilities": ["Pickup"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 264,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Wurmple",
  "hp": 45,
  "atk": 45,
  "def": 35,
  "spa": 20,
  "spd": 30,
  "spe": 20,
  "weight": 3.6,
  "height": 0.3,
  "types": ["Bug"],
  "abilities": ["Shield Dust"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 265,
      "evos": ["Cascoon", "Silcoon"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Silcoon",
  "hp": 50,
  "atk": 35,
  "def": 55,
  "spa": 25,
  "spd": 25,
  "spe": 15,
  "weight": 10,
  "height": 0.6,
  "types": ["Bug"],
  "abilities": ["Shed Skin"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 266,
      "evos": ["Beautifly"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Cascoon",
  "hp": 50,
  "atk": 35,
  "def": 55,
  "spa": 25,
  "spd": 25,
  "spe": 15,
  "weight": 11.5,
  "height": 0.7,
  "types": ["Bug"],
  "abilities": ["Shed Skin"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 268,
      "evos": ["Dustox"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Dustox",
  "hp": 60,
  "atk": 50,
  "def": 70,
  "spa": 50,
  "spd": 90,
  "spe": 65,
  "weight": 31.6,
  "height": 1.2,
  "types": ["Bug", "Poison"],
  "abilities": ["Shield Dust"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 269,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Lotad",
  "hp": 40,
  "atk": 30,
  "def": 30,
  "spa": 40,
  "spd": 50,
  "spe": 30,
  "weight": 2.6,
  "height": 0.5,
  "types": ["Water", "Grass"],
  "abilities": ["Rain Dish", "Swift Swim"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 270,
      "evos": ["Lombre"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Lombre",
  "hp": 60,
  "atk": 50,
  "def": 50,
  "spa": 60,
  "spd": 70,
  "spe": 50,
  "weight": 32.5,
  "height": 1.2,
  "types": ["Water", "Grass"],
  "abilities": ["Rain Dish", "Swift Swim"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 271,
      "evos": ["Ludicolo"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Ludicolo",
  "hp": 80,
  "atk": 70,
  "def": 70,
  "spa": 90,
  "spd": 100,
  "spe": 70,
  "weight": 55,
  "height": 1.5,
  "types": ["Water", "Grass"],
  "abilities": ["Rain Dish", "Swift Swim"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 272,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Seedot",
  "hp": 40,
  "atk": 40,
  "def": 50,
  "spa": 30,
  "spd": 30,
  "spe": 30,
  "weight": 4,
  "height": 0.5,
  "types": ["Grass"],
  "abilities": ["Chlorophyll", "Early Bird"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 273,
      "evos": ["Nuzleaf"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Nuzleaf",
  "hp": 70,
  "atk": 70,
  "def": 40,
  "spa": 60,
  "spd": 40,
  "spe": 60,
  "weight": 28,
  "height": 1,
  "types": ["Grass", "Dark"],
  "abilities": ["Chlorophyll", "Early Bird"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 274,
      "evos": ["Shiftry"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Shiftry",
  "hp": 90,
  "atk": 100,
  "def": 60,
  "spa": 90,
  "spd": 60,
  "spe": 80,
  "weight": 59.6,
  "height": 1.3,
  "types": ["Grass", "Dark"],
  "abilities": ["Chlorophyll", "Early Bird"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 275,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Taillow",
  "hp": 40,
  "atk": 55,
  "def": 30,
  "spa": 30,
  "spd": 30,
  "spe": 85,
  "weight": 2.3,
  "height": 0.3,
  "types": ["Normal", "Flying"],
  "abilities": ["Guts"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 276,
      "evos": ["Swellow"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Surskit",
  "hp": 40,
  "atk": 30,
  "def": 32,
  "spa": 50,
  "spd": 52,
  "spe": 65,
  "weight": 1.7,
  "height": 0.5,
  "types": ["Bug", "Water"],
  "abilities": ["Swift Swim"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 283,
      "evos": ["Masquerain"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Shroomish",
  "hp": 60,
  "atk": 40,
  "def": 60,
  "spa": 40,
  "spd": 60,
  "spe": 35,
  "weight": 4.5,
  "height": 0.4,
  "types": ["Grass"],
  "abilities": ["Effect Spore"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 285,
      "evos": ["Breloom"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Breloom",
  "hp": 60,
  "atk": 130,
  "def": 80,
  "spa": 60,
  "spd": 60,
  "spe": 70,
  "weight": 39.2,
  "height": 1.2,
  "types": ["Grass", "Fighting"],
  "abilities": ["Effect Spore"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 286,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Slakoth",
  "hp": 60,
  "atk": 60,
  "def": 60,
  "spa": 35,
  "spd": 35,
  "spe": 30,
  "weight": 24,
  "height": 0.8,
  "types": ["Normal"],
  "abilities": ["Truant"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 287,
      "evos": ["Vigoroth"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Vigoroth",
  "hp": 80,
  "atk": 80,
  "def": 80,
  "spa": 55,
  "spd": 55,
  "spe": 90,
  "weight": 46.5,
  "height": 1.4,
  "types": ["Normal"],
  "abilities": ["Vital Spirit"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 288,
      "evos": ["Slaking"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Slaking",
  "hp": 150,
  "atk": 160,
  "def": 100,
  "spa": 95,
  "spd": 65,
  "spe": 100,
  "weight": 130.5,
  "height": 2,
  "types": ["Normal"],
  "abilities": ["Truant"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 289,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Nincada",
  "hp": 31,
  "atk": 45,
  "def": 90,
  "spa": 30,
  "spd": 30,
  "spe": 40,
  "weight": 5.5,
  "height": 0.5,
  "types": ["Bug", "Ground"],
  "abilities": ["Compound Eyes"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 290,
      "evos": ["Ninjask", "Shedinja"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Ninjask",
  "hp": 61,
  "atk": 90,
  "def": 45,
  "spa": 50,
  "spd": 50,
  "spe": 160,
  "weight": 12,
  "height": 0.8,
  "types": ["Bug", "Flying"],
  "abilities": ["Speed Boost"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 291,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Shedinja",
  "hp": 1,
  "atk": 90,
  "def": 45,
  "spa": 30,
  "spd": 30,
  "spe": 40,
  "weight": 1.2,
  "height": 0.8,
  "types": ["Bug", "Ghost"],
  "abilities": ["Wonder Guard"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 292,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Whismur",
  "hp": 64,
  "atk": 51,
  "def": 23,
  "spa": 51,
  "spd": 23,
  "spe": 28,
  "weight": 16.3,
  "height": 0.6,
  "types": ["Normal"],
  "abilities": ["Soundproof"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 293,
      "evos": ["Loudred"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Loudred",
  "hp": 84,
  "atk": 71,
  "def": 43,
  "spa": 71,
  "spd": 43,
  "spe": 48,
  "weight": 40.5,
  "height": 1,
  "types": ["Normal"],
  "abilities": ["Soundproof"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 294,
      "evos": ["Exploud"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Makuhita",
  "hp": 72,
  "atk": 60,
  "def": 30,
  "spa": 20,
  "spd": 30,
  "spe": 25,
  "weight": 86.4,
  "height": 1,
  "types": ["Fighting"],
  "abilities": ["Guts", "Thick Fat"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 296,
      "evos": ["Hariyama"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Hariyama",
  "hp": 144,
  "atk": 120,
  "def": 60,
  "spa": 40,
  "spd": 60,
  "spe": 50,
  "weight": 253.8,
  "height": 2.3,
  "types": ["Fighting"],
  "abilities": ["Guts", "Thick Fat"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 297,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Nosepass",
  "hp": 30,
  "atk": 45,
  "def": 135,
  "spa": 45,
  "spd": 90,
  "spe": 30,
  "weight": 97,
  "height": 1,
  "types": ["Rock"],
  "abilities": ["Magnet Pull", "Sturdy"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 299,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Skitty",
  "hp": 50,
  "atk": 45,
  "def": 45,
  "spa": 35,
  "spd": 35,
  "spe": 50,
  "weight": 11,
  "height": 0.6,
  "types": ["Normal"],
  "abilities": ["Cute Charm"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 300,
      "evos": ["Delcatty"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Sableye",
  "hp": 50,
  "atk": 75,
  "def": 75,
  "spa": 65,
  "spd": 65,
  "spe": 50,
  "weight": 11,
  "height": 0.5,
  "types": ["Dark", "Ghost"],
  "abilities": ["Keen Eye"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 302,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Aron",
  "hp": 50,
  "atk": 70,
  "def": 100,
  "spa": 40,
  "spd": 40,
  "spe": 30,
  "weight": 60,
  "height": 0.4,
  "types": ["Steel", "Rock"],
  "abilities": ["Rock Head", "Sturdy"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 304,
      "evos": ["Lairon"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Lairon",
  "hp": 60,
  "atk": 90,
  "def": 140,
  "spa": 50,
  "spd": 50,
  "spe": 40,
  "weight": 120,
  "height": 0.9,
  "types": ["Steel", "Rock"],
  "abilities": ["Rock Head", "Sturdy"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 305,
      "evos": ["Aggron"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Aggron",
  "hp": 70,
  "atk": 110,
  "def": 180,
  "spa": 60,
  "spd": 60,
  "spe": 50,
  "weight": 360,
  "height": 2.1,
  "types": ["Steel", "Rock"],
  "abilities": ["Rock Head", "Sturdy"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 306,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Meditite",
  "hp": 30,
  "atk": 40,
  "def": 55,
  "spa": 40,
  "spd": 55,
  "spe": 60,
  "weight": 11.2,
  "height": 0.6,
  "types": ["Fighting", "Psychic"],
  "abilities": ["Pure Power"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 307,
      "evos": ["Medicham"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Medicham",
  "hp": 60,
  "atk": 60,
  "def": 75,
  "spa": 60,
  "spd": 75,
  "spe": 80,
  "weight": 31.5,
  "height": 1.3,
  "types": ["Fighting", "Psychic"],
  "abilities": ["Pure Power"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 308,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Electrike",
  "hp": 40,
  "atk": 45,
  "def": 40,
  "spa": 65,
  "spd": 40,
  "spe": 65,
  "weight": 15.2,
  "height": 0.6,
  "types": ["Electric"],
  "abilities": ["Lightning Rod", "Static"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 309,
      "evos": ["Manectric"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Manectric",
  "hp": 70,
  "atk": 75,
  "def": 60,
  "spa": 105,
  "spd": 60,
  "spe": 105,
  "weight": 40.2,
  "height": 1.5,
  "types": ["Electric"],
  "abilities": ["Lightning Rod", "Static"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 310,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Roselia",
  "hp": 50,
  "atk": 60,
  "def": 45,
  "spa": 100,
  "spd": 80,
  "spe": 65,
  "weight": 2,
  "height": 0.3,
  "types": ["Grass", "Poison"],
  "abilities": ["Natural Cure", "Poison Point"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 315,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Gulpin",
  "hp": 70,
  "atk": 43,
  "def": 53,
  "spa": 43,
  "spd": 53,
  "spe": 40,
  "weight": 10.3,
  "height": 0.4,
  "types": ["Poison"],
  "abilities": ["Liquid Ooze", "Sticky Hold"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 316,
      "evos": ["Swalot"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Swalot",
  "hp": 100,
  "atk": 73,
  "def": 83,
  "spa": 73,
  "spd": 83,
  "spe": 55,
  "weight": 80,
  "height": 1.7,
  "types": ["Poison"],
  "abilities": ["Liquid Ooze", "Sticky Hold"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 317,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Carvanha",
  "hp": 45,
  "atk": 90,
  "def": 20,
  "spa": 65,
  "spd": 20,
  "spe": 65,
  "weight": 20.8,
  "height": 0.8,
  "types": ["Water", "Dark"],
  "abilities": ["Rough Skin"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 318,
      "evos": ["Sharpedo"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Sharpedo",
  "hp": 70,
  "atk": 120,
  "def": 40,
  "spa": 95,
  "spd": 40,
  "spe": 95,
  "weight": 88.8,
  "height": 1.8,
  "types": ["Water", "Dark"],
  "abilities": ["Rough Skin"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 319,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Wailmer",
  "hp": 130,
  "atk": 70,
  "def": 35,
  "spa": 70,
  "spd": 35,
  "spe": 60,
  "weight": 130,
  "height": 2,
  "types": ["Water"],
  "abilities": ["Oblivious", "Water Veil"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 320,
      "evos": ["Wailord"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Wailord",
  "hp": 170,
  "atk": 90,
  "def": 45,
  "spa": 90,
  "spd": 45,
  "spe": 60,
  "weight": 398,
  "height": 14.5,
  "types": ["Water"],
  "abilities": ["Oblivious", "Water Veil"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 321,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Numel",
  "hp": 60,
  "atk": 60,
  "def": 40,
  "spa": 65,
  "spd": 45,
  "spe": 35,
  "weight": 24,
  "height": 0.7,
  "types": ["Fire", "Ground"],
  "abilities": ["Oblivious"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 322,
      "evos": ["Camerupt"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Camerupt",
  "hp": 70,
  "atk": 100,
  "def": 70,
  "spa": 105,
  "spd": 75,
  "spe": 40,
  "weight": 220,
  "height": 1.9,
  "types": ["Fire", "Ground"],
  "abilities": ["Magma Armor"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 323,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Spoink",
  "hp": 60,
  "atk": 25,
  "def": 35,
  "spa": 70,
  "spd": 80,
  "spe": 60,
  "weight": 30.6,
  "height": 0.7,
  "types": ["Psychic"],
  "abilities": ["Own Tempo", "Thick Fat"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 325,
      "evos": ["Grumpig"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Grumpig",
  "hp": 80,
  "atk": 45,
  "def": 65,
  "spa": 90,
  "spd": 110,
  "spe": 80,
  "weight": 71.5,
  "height": 0.9,
  "types": ["Psychic"],
  "abilities": ["Own Tempo", "Thick Fat"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 326,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Spinda",
  "hp": 60,
  "atk": 60,
  "def": 60,
  "spa": 60,
  "spd": 60,
  "spe": 60,
  "weight": 5,
  "height": 1.1,
  "types": ["Normal"],
  "abilities": ["Own Tempo"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 327,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Cacnea",
  "hp": 50,
  "atk": 85,
  "def": 40,
  "spa": 85,
  "spd": 40,
  "spe": 35,
  "weight": 51.3,
  "height": 0.4,
  "types": ["Grass"],
  "abilities": ["Sand Veil"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 331,
      "evos": ["Cacturne"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Cacturne",
  "hp": 70,
  "atk": 115,
  "def": 60,
  "spa": 115,
  "spd": 60,
  "spe": 55,
  "weight": 77.4,
  "height": 1.3,
  "types": ["Grass", "Dark"],
  "abilities": ["Sand Veil"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 332,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Swablu",
  "hp": 45,
  "atk": 40,
  "def": 60,
  "spa": 40,
  "spd": 75,
  "spe": 50,
  "weight": 1.2,
  "height": 0.4,
  "types": ["Normal", "Flying"],
  "abilities": ["Natural Cure"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 333,
      "evos": ["Altaria"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Altaria",
  "hp": 75,
  "atk": 70,
  "def": 90,
  "spa": 70,
  "spd": 105,
  "spe": 80,
  "weight": 20.6,
  "height": 1.1,
  "types": ["Dragon", "Flying"],
  "abilities": ["Natural Cure"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 334,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Zangoose",
  "hp": 73,
  "atk": 115,
  "def": 60,
  "spa": 60,
  "spd": 60,
  "spe": 90,
  "weight": 40.3,
  "height": 1.3,
  "types": ["Normal"],
  "abilities": ["Immunity"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 335,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Seviper",
  "hp": 73,
  "atk": 100,
  "def": 60,
  "spa": 100,
  "spd": 60,
  "spe": 65,
  "weight": 52.5,
  "height": 2.7,
  "types": ["Poison"],
  "abilities": ["Shed Skin"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 336,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Barboach",
  "hp": 50,
  "atk": 48,
  "def": 43,
  "spa": 46,
  "spd": 41,
  "spe": 60,
  "weight": 1.9,
  "height": 0.4,
  "types": ["Water", "Ground"],
  "abilities": ["Oblivious"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 339,
      "evos": ["Whiscash"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Whiscash",
  "hp": 110,
  "atk": 78,
  "def": 73,
  "spa": 76,
  "spd": 71,
  "spe": 60,
  "weight": 23.6,
  "height": 0.9,
  "types": ["Water", "Ground"],
  "abilities": ["Oblivious"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 340,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Corphish",
  "hp": 43,
  "atk": 80,
  "def": 65,
  "spa": 50,
  "spd": 35,
  "spe": 35,
  "weight": 11.5,
  "height": 0.6,
  "types": ["Water"],
  "abilities": ["Hyper Cutter", "Shell Armor"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 341,
      "evos": ["Crawdaunt"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Crawdaunt",
  "hp": 63,
  "atk": 120,
  "def": 85,
  "spa": 90,
  "spd": 55,
  "spe": 55,
  "weight": 32.8,
  "height": 1.1,
  "types": ["Water", "Dark"],
  "abilities": ["Hyper Cutter", "Shell Armor"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 342,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Baltoy",
  "hp": 40,
  "atk": 40,
  "def": 55,
  "spa": 40,
  "spd": 70,
  "spe": 55,
  "weight": 21.5,
  "height": 0.5,
  "types": ["Ground", "Psychic"],
  "abilities": ["Levitate"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 343,
      "evos": ["Claydol"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Claydol",
  "hp": 60,
  "atk": 70,
  "def": 105,
  "spa": 70,
  "spd": 120,
  "spe": 75,
  "weight": 108,
  "height": 1.5,
  "types": ["Ground", "Psychic"],
  "abilities": ["Levitate"],
  "formats": ["OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 344,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Lileep",
  "hp": 66,
  "atk": 41,
  "def": 77,
  "spa": 61,
  "spd": 87,
  "spe": 23,
  "weight": 23.8,
  "height": 1,
  "types": ["Rock", "Grass"],
  "abilities": ["Suction Cups"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 345,
      "evos": ["Cradily"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Cradily",
  "hp": 86,
  "atk": 81,
  "def": 97,
  "spa": 81,
  "spd": 107,
  "spe": 43,
  "weight": 60.4,
  "height": 1.5,
  "types": ["Rock", "Grass"],
  "abilities": ["Suction Cups"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 346,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Anorith",
  "hp": 45,
  "atk": 95,
  "def": 50,
  "spa": 40,
  "spd": 50,
  "spe": 75,
  "weight": 12.5,
  "height": 0.7,
  "types": ["Rock", "Bug"],
  "abilities": ["Battle Armor"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 347,
      "evos": ["Armaldo"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Armaldo",
  "hp": 75,
  "atk": 125,
  "def": 100,
  "spa": 70,
  "spd": 80,
  "spe": 45,
  "weight": 68.2,
  "height": 1.5,
  "types": ["Rock", "Bug"],
  "abilities": ["Battle Armor"],
  "formats": ["UUBL", "OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 348,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Feebas",
  "hp": 20,
  "atk": 15,
  "def": 20,
  "spa": 10,
  "spd": 55,
  "spe": 80,
  "weight": 7.4,
  "height": 0.6,
  "types": ["Water"],
  "abilities": ["Oblivious", "Swift Swim"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 349,
      "evos": ["Milotic"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Shuppet",
  "hp": 44,
  "atk": 75,
  "def": 35,
  "spa": 63,
  "spd": 33,
  "spe": 45,
  "weight": 2.3,
  "height": 0.6,
  "types": ["Ghost"],
  "abilities": ["Insomnia"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 353,
      "evos": ["Banette"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Banette",
  "hp": 64,
  "atk": 115,
  "def": 65,
  "spa": 83,
  "spd": 63,
  "spe": 65,
  "weight": 12.5,
  "height": 1.1,
  "types": ["Ghost"],
  "abilities": ["Insomnia"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 354,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Tropius",
  "hp": 99,
  "atk": 68,
  "def": 83,
  "spa": 72,
  "spd": 87,
  "spe": 51,
  "weight": 100,
  "height": 2,
  "types": ["Grass", "Flying"],
  "abilities": ["Chlorophyll"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 357,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Absol",
  "hp": 65,
  "atk": 130,
  "def": 60,
  "spa": 75,
  "spd": 60,
  "spe": 75,
  "weight": 47,
  "height": 1.2,
  "types": ["Dark"],
  "abilities": ["Pressure"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 359,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Wynaut",
  "hp": 95,
  "atk": 23,
  "def": 48,
  "spa": 23,
  "spd": 48,
  "spe": 23,
  "weight": 14,
  "height": 0.6,
  "types": ["Psychic"],
  "abilities": ["Shadow Tag"],
  "formats": ["Uber"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 360,
      "evos": ["Wobbuffet"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Snorunt",
  "hp": 50,
  "atk": 50,
  "def": 50,
  "spa": 50,
  "spd": 50,
  "spe": 50,
  "weight": 16.8,
  "height": 0.7,
  "types": ["Ice"],
  "abilities": ["Inner Focus"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 361,
      "evos": ["Glalie"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Glalie",
  "hp": 80,
  "atk": 80,
  "def": 80,
  "spa": 80,
  "spd": 80,
  "spe": 80,
  "weight": 256.5,
  "height": 1.5,
  "types": ["Ice"],
  "abilities": ["Inner Focus"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 362,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Spheal",
  "hp": 70,
  "atk": 40,
  "def": 50,
  "spa": 55,
  "spd": 50,
  "spe": 25,
  "weight": 39.5,
  "height": 0.8,
  "types": ["Ice", "Water"],
  "abilities": ["Thick Fat"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 363,
      "evos": ["Sealeo"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Sealeo",
  "hp": 90,
  "atk": 60,
  "def": 70,
  "spa": 75,
  "spd": 70,
  "spe": 45,
  "weight": 87.6,
  "height": 1.1,
  "types": ["Ice", "Water"],
  "abilities": ["Thick Fat"],
  "formats": ["NFE"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 364,
      "evos": ["Walrein"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Walrein",
  "hp": 110,
  "atk": 80,
  "def": 90,
  "spa": 95,
  "spd": 90,
  "spe": 65,
  "weight": 150.6,
  "height": 1.4,
  "types": ["Ice", "Water"],
  "abilities": ["Thick Fat"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 365,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Clamperl",
  "hp": 35,
  "atk": 64,
  "def": 85,
  "spa": 74,
  "spd": 55,
  "spe": 32,
  "weight": 52.5,
  "height": 0.4,
  "types": ["Water"],
  "abilities": ["Shell Armor"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 366,
      "evos": ["Gorebyss", "Huntail"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Huntail",
  "hp": 55,
  "atk": 104,
  "def": 105,
  "spa": 94,
  "spd": 75,
  "spe": 52,
  "weight": 27,
  "height": 1.7,
  "types": ["Water"],
  "abilities": ["Swift Swim"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 367,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Gorebyss",
  "hp": 55,
  "atk": 84,
  "def": 105,
  "spa": 114,
  "spd": 75,
  "spe": 52,
  "weight": 22.6,
  "height": 1.8,
  "types": ["Water"],
  "abilities": ["Swift Swim"],
  "formats": ["UU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 368,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Relicanth",
  "hp": 100,
  "atk": 90,
  "def": 130,
  "spa": 45,
  "spd": 65,
  "spe": 55,
  "weight": 23.4,
  "height": 1,
  "types": ["Water", "Rock"],
  "abilities": ["Rock Head", "Swift Swim"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 369,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Luvdisc",
  "hp": 43,
  "atk": 30,
  "def": 55,
  "spa": 40,
  "spd": 65,
  "spe": 97,
  "weight": 8.7,
  "height": 0.6,
  "types": ["Water"],
  "abilities": ["Swift Swim"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 370,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Bagon",
  "hp": 45,
  "atk": 75,
  "def": 60,
  "spa": 40,
  "spd": 30,
  "spe": 50,
  "weight": 42.1,
  "height": 0.6,
  "types": ["Dragon"],
  "abilities": ["Rock Head"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 371,
      "evos": ["Shelgon"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Shelgon",
  "hp": 65,
  "atk": 95,
  "def": 100,
  "spa": 60,
  "spd": 50,
  "spe": 50,
  "weight": 110.5,
  "height": 1.1,
  "types": ["Dragon"],
  "abilities": ["Rock Head"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 372,
      "evos": ["Salamence"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Salamence",
  "hp": 95,
  "atk": 135,
  "def": 80,
  "spa": 110,
  "spd": 80,
  "spe": 100,
  "weight": 102.6,
  "height": 1.5,
  "types": ["Dragon", "Flying"],
  "abilities": ["Intimidate"],
  "formats": ["OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 373,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Beldum",
  "hp": 40,
  "atk": 55,
  "def": 80,
  "spa": 35,
  "spd": 60,
  "spe": 30,
  "weight": 95.2,
  "height": 0.6,
  "types": ["Steel", "Psychic"],
  "abilities": ["Clear Body"],
  "formats": ["LC"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 374,
      "evos": ["Metang"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Metang",
  "hp": 60,
  "atk": 75,
  "def": 100,
  "spa": 55,
  "spd": 80,
  "spe": 50,
  "weight": 202.5,
  "height": 1.2,
  "types": ["Steel", "Psychic"],
  "abilities": ["Clear Body"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 375,
      "evos": ["Metagross"],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Metagross",
  "hp": 80,
  "atk": 135,
  "def": 130,
  "spa": 95,
  "spd": 90,
  "spe": 70,
  "weight": 550,
  "height": 1.6,
  "types": ["Steel", "Psychic"],
  "abilities": ["Clear Body"],
  "formats": ["OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 376,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Latias",
  "hp": 80,
  "atk": 80,
  "def": 90,
  "spa": 110,
  "spd": 130,
  "spe": 110,
  "weight": 40,
  "height": 1.4,
  "types": ["Dragon", "Psychic"],
  "abilities": ["Levitate"],
  "formats": ["Uber"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 380,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Latios",
  "hp": 80,
  "atk": 90,
  "def": 80,
  "spa": 130,
  "spd": 110,
  "spe": 110,
  "weight": 60,
  "height": 2,
  "types": ["Dragon", "Psychic"],
  "abilities": ["Levitate"],
  "formats": ["Uber"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 381,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Kyogre",
  "hp": 100,
  "atk": 100,
  "def": 90,
  "spa": 150,
  "spd": 140,
  "spe": 90,
  "weight": 352,
  "height": 4.5,
  "types": ["Water"],
  "abilities": ["Drizzle"],
  "formats": ["Uber"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 382,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Groudon",
  "hp": 100,
  "atk": 150,
  "def": 140,
  "spa": 100,
  "spd": 90,
  "spe": 90,
  "weight": 950,
  "height": 3.5,
  "types": ["Ground"],
  "abilities": ["Drought"],
  "formats": ["Uber"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 383,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Rayquaza",
  "hp": 105,
  "atk": 150,
  "def": 90,
  "spa": 150,
  "spd": 90,
  "spe": 95,
  "weight": 206.5,
  "height": 7,
  "types": ["Dragon", "Flying"],
  "abilities": ["Air Lock"],
  "formats": ["Uber"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 384,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Jirachi",
  "hp": 100,
  "atk": 100,
  "def": 100,
  "spa": 100,
  "spd": 100,
  "spe": 100,
  "weight": 1.1,
  "height": 0.3,
  "types": ["Steel", "Psychic"],
  "abilities": ["Serene Grace"],
  "formats": ["OU"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 385,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Deoxys",
  "hp": 50,
  "atk": 150,
  "def": 50,
  "spa": 150,
  "spd": 50,
  "spe": 150,
  "weight": 60.8,
  "height": 1.7,
  "types": ["Psychic"],
  "abilities": ["Pressure"],
  "formats": ["Uber"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 386,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Deoxys-Attack",
  "hp": 50,
  "atk": 180,
  "def": 20,
  "spa": 180,
  "spd": 20,
  "spe": 150,
  "weight": 60.8,
  "height": 1.7,
  "types": ["Psychic"],
  "abilities": ["Pressure"],
  "formats": ["Uber"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 386,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Deoxys-Defense",
  "hp": 50,
  "atk": 70,
  "def": 160,
  "spa": 70,
  "spd": 160,
  "spe": 90,
  "weight": 60.8,
  "height": 1.7,
  "types": ["Psychic"],
  "abilities": ["Pressure"],
  "formats": ["Uber"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 386,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Deoxys-Speed",
  "hp": 50,
  "atk": 95,
  "def": 90,
  "spa": 95,
  "spd": 90,
  "spe": 180,
  "weight": 60.8,
  "height": 1.7,
  "types": ["Psychic"],
  "abilities": ["Pressure"],
  "formats": ["Uber"],
  "isNonstandard": "Standard",
  "oob": {
      "dex_number": 386,
      "evos": [],
      "alts": [],
      "genfamily": ["RS", "DP", "BW", "XY", "SM", "SS"]
  }
}, {
  "name": "Castform-Snowy",
  "hp": 70,
  "atk": 70,
  "def": 70,
  "spa": 70,
  "spd": 70,
  "spe": 70,
  "weight": 0.8,
  "height": 0.3,
  "types": ["Ice"],
  "abilities": ["Forecast"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": null
}, {
  "name": "Castform-Sunny",
  "hp": 70,
  "atk": 70,
  "def": 70,
  "spa": 70,
  "spd": 70,
  "spe": 70,
  "weight": 0.8,
  "height": 0.3,
  "types": ["Fire"],
  "abilities": ["Forecast"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": null
}, {
  "name": "Castform-Rainy",
  "hp": 70,
  "atk": 70,
  "def": 70,
  "spa": 70,
  "spd": 70,
  "spe": 70,
  "weight": 0.8,
  "height": 0.3,
  "types": ["Water"],
  "abilities": ["Forecast"],
  "formats": ["NU"],
  "isNonstandard": "Standard",
  "oob": null
}];

export default rsData;