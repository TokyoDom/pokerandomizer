import React, { useState, forwardRef, useImperativeHandle } from "react";
import Pokemon from "./Pokemon";
import axios from "axios";
import ssData from "./genData/ssData";
import "./styles/Team.css";

//default
const ditto = {
  abilities: ["Imposter"],
  evconfigs: [
    {
      hp: 252,
      atk: 4,
      def: 252,
      spa: 0,
      spd: 0,
      spe: 0
    }
  ],
  items: ["Choice Scarf"],
  ivconfigs: [
    {
      hp: 31,
      atk: 31,
      def: 31,
      spa: 31,
      spd: 31,
      spe: 31
    }
  ],
  moveslots: [[{ move: "Transform", type: null }]],
  name: "Choice Scarf",
  natures: ["Relaxed"],
  pokemon: "Ditto"
};

function Team({ gen, tier, weight }, ref) {
  const [team, setTeam] = useState(new Array(6).fill(ditto));
  const [dexNums, setDexNums] = useState(new Array(6).fill(132)); //to not make repeats on forms

  useImperativeHandle(ref, () => ({
    getTeam,
    exportTeam
  }));

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
  };

  const getTeam = async () => {
    //get list of allowed pokemon
    const list = ssData.filter(poke => poke.formats.includes(tier) && poke.oob);
    shuffle(list);

    //get 6 new pokemon that have data
    let newTeam = [];
    let newDex = [];
    let count = 0;
    while (newTeam.length !== 6) {
      if (!newDex.includes(list[count].oob.dex_number)) {
        //check if dex num is used already
        const result = await axios(
          `http://192.168.1.2:5000/gen/SS/${tier}/${list[count].name}`
        );
        const data = result.data;
        if (data) {
          newTeam = [
            ...newTeam,
            data.movesets[Math.floor(Math.random() * data.movesets.length)]
          ];
          newDex = [...newDex, list[count].oob.dex_number];
        }
      }

      count++;
    }

    setTeam(newTeam);
    setDexNums(newDex);
  };

  const exportTeam = () => {
    let exTeam = "";
    team.forEach(poke => {
      const name = poke.pokemon;
      const item = poke.items[0];
      const ability = poke.abilities[0];
      const nature = poke.natures[0];

      const evs = poke.evconfigs[0];
      let evString = "";
      for (const ev in evs) {
        if (evs[ev] !== 0) {
          evString += `${evs[ev]} ${ev} / `;
        }
      }

      let ivString = "";
      if (poke.ivconfigs.length > 0) {
        const ivs = poke.ivconfigs[0];
        for (const iv in ivs) {
          if (ivs[iv] !== 31) {
            ivString += `${ivs[iv]} ${iv} / `;
          }
        }
      }

      let moves = "";
      poke.moveslots.forEach(slot => {
        const move = slot[0].move;
        moves += `- ${move}\n`;
      });

      let set;
      if (ivString !== "") {
        set = `
        ${name} @ ${item}
        Ability: ${ability}
        EVs: ${evString}
        ${nature} Nature
        IVs: ${ivString}
        ${moves}`;
      } else {
        set = `
      ${name} @ ${item}
      Ability: ${ability}
      EVs: ${evString}
      ${nature} Nature
      ${moves}`;
      }

      exTeam += set;
    });

    console.log(exTeam);
  };

  return (
    <section className="team" ref={ref}>
      {team.map((pokemon, i) => (
        <Pokemon pokemon={pokemon} key={i} />
      ))}
    </section>
  );
}

export default forwardRef(Team);
