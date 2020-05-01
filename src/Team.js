import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle
} from "react";
import Pokemon from "./Pokemon";
import axios from "axios";
import ssData from "./genData/ssData";
import smData from "./genData/smData";
import xyData from "./genData/xyData";
import bwData from "./genData/bwData";
import dpData from "./genData/dpData";
import rsData from "./genData/rsData";
import gsData from "./genData/gsData";
import rbData from "./genData/rbData";
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

function Team({ gen, tier }, ref) {
  const [team, setTeam] = useState(new Array(6).fill(ditto));
  const [dexNums, setDexNums] = useState(new Array(6).fill(132)); //to not make repeats on forms
  const [locks, setLocks] = useState(new Array(6).fill(false));

  //reset locks if gen or tier changes
  useEffect(() => {
    setLocks(new Array(6).fill(false));
  }, [gen, tier]);

  useImperativeHandle(ref, () => ({
    getTeam,
    getLowerTeam,
    exportTeam
  }));

  //for shuffling lists
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

  //get list of viable pokemon for tier
  const getList = () => {
    //all bl tiers converted to higher tier in data
    /* Not working:
    GS NU - not enough pokemon sets (changed in Routes)
    DP - some abilities undefined in database. ex: Skarmory
    BW - some abilities undefined in database. ex: Mew, Swampert
    SS PU - not enough pokemon sets (changed in Routes)
    */
    let list;
    switch (gen) {
      case "SS":
        list = ssData.filter(poke => poke.formats.includes(tier) && poke.oob);
        break;
      case "SM":
        list = smData.filter(poke => poke.formats.includes(tier) && poke.oob);
        break;
      case "XY":
        list = xyData.filter(poke => poke.formats.includes(tier) && poke.oob);
        break;
      case "BW":
        list = bwData.filter(poke => poke.formats.includes(tier) && poke.oob);
        break;
      case "DP":
        list = dpData.filter(poke => poke.formats.includes(tier) && poke.oob);
        break;
      case "RS":
        list = rsData.filter(poke => poke.formats.includes(tier) && poke.oob);
        break;
      case "GS":
        list = gsData.filter(poke => poke.formats.includes(tier) && poke.oob);
        break;
      case "RB":
        list = rbData.filter(poke => poke.formats.includes(tier) && poke.oob);
        break;
      default:
        break;
    }

    return shuffle(list);
  };

  //get second list for mixed or heat
  const getLowerList = () => {
    let list;
    switch (gen) {
      case "SS":
        list = ssData.filter(poke => poke.oob);
        break;
      case "SM":
        list = smData.filter(poke => poke.oob);
        break;
      case "XY":
        list = xyData.filter(poke => poke.oob);
        break;
      case "BW":
        list = bwData.filter(poke => poke.oob);
        break;
      case "DP":
        list = dpData.filter(poke => poke.oob);
        break;
      case "RS":
        list = rsData.filter(poke => poke.oob);
        break;
      case "GS":
        list = gsData.filter(poke => poke.oob);
        break;
      case "RB":
        list = rbData.filter(poke => poke.oob);
        break;
      default:
        break;
    }

    let tiers;
    switch (tier) {
      case "Uber":
        tiers = ["Uber", "OU", "UU", "RU", "NU", "PU"];
        list = list.filter(poke =>
          tiers.some(tier => poke.formats.includes(tier))
        );
        break;
      case "OU":
        tiers = ["OU", "UU", "RU", "NU", "PU"];
        list = list.filter(poke =>
          tiers.some(tier => poke.formats.includes(tier))
        );
        break;
      case "UU":
        tiers = ["UU", "RU", "NU", "PU"];
        list = list.filter(poke =>
          tiers.some(tier => poke.formats.includes(tier))
        );
        break;
      case "RU":
        tiers = ["RU", "NU", "PU"];
        list = list.filter(poke =>
          tiers.some(tier => poke.formats.includes(tier))
        );
        break;
      case "NU":
        tiers = ["NU", "PU"];
        list = list.filter(poke =>
          tiers.some(tier => poke.formats.includes(tier))
        );
        break;
      default:
        list = list.filter(poke => poke.formats.includes(tier));
        break;
    }

    return shuffle(list);
  };

  //return sets and dex nums
  const fetchSets = async (prevDex, prevTeam, list, i) => {
    //get new pokemon that have data
    let newDex = [...prevDex];
    let newTeam = [...prevTeam];
    let count = 0;
    while (newTeam.length < i) {
      if (locks[newDex.length]) {
        //check for locks
        newTeam = [...newTeam, team[newDex.length]];
        newDex = [...newDex, dexNums[newDex.length]];
      } else {
        if (!newDex.includes(list[count].oob.dex_number)) {
          //check if dex num is used already
          const pokeTier = list[count].formats.filter(
            format => !format.match(/BL/)
          ); //use pokes tier
          const result = await axios(
            `http://192.168.1.2:5000/gen/${gen}/${pokeTier[0]}/${list[count].name}`
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
    }

    return {
      newTeam,
      newDex
    };
  };

  //get standard team
  const getTeam = async () => {
    const list = getList();

    const { newTeam, newDex } = await fetchSets([], [], list, 6);

    setTeam(newTeam);
    setDexNums(newDex);
  };

  //get mixed or heat team
  const getLowerTeam = async listLen => {
    const list = getList();
    const lowerList = getLowerList();

    const { newTeam, newDex } = await fetchSets([], [], list, listLen);
    const { newTeam: finalTeam, newDex: finalDex } = await fetchSets(
      newDex,
      newTeam,
      lowerList,
      6
    );

    setTeam(finalTeam);
    setDexNums(finalDex);
  };

  //get new pokemon for slot
  const getSlot = async i => {
    const list = getList().filter(
      poke => !dexNums.includes(poke.oob.dex_number)
    );

    //find 1 pokemon with set
    let pokemon = null;
    let count = 0;
    while (!pokemon) {
      const result = await axios(
        `http://192.168.1.2:5000/gen/${gen}/${tier}/${list[count].name}`
      );
      pokemon = result.data;
      count++;
    }

    let newArr = [...team];
    newArr[i] =
      pokemon.movesets[Math.floor(Math.random() * pokemon.movesets.length)];
    setTeam(newArr);
  };

  //change lock state
  const toggleLock = i => {
    let newLocks = [...locks];
    newLocks[i] = !newLocks[i];
    setLocks(newLocks);
  };

  //generate export string for showdown
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
          evString += `/ ${evs[ev]} ${ev} `;
        }
      }
      evString = evString.replace("/", "");

      let ivString = "";
      if (poke.ivconfigs.length > 0) {
        const ivs = poke.ivconfigs[0];
        for (const iv in ivs) {
          if (ivs[iv] !== 31) {
            ivString += `/ ${ivs[iv]} ${iv} `;
          }
        }
        ivString = ivString.replace("/", "");
      }

      let moves = "";
      poke.moveslots.forEach(slot => {
        let move;
        if (slot[0].type) {
          move = `${slot[0].move} ${slot[0].type}`;
        } else {
          move = slot[0].move;
        }
        moves += `- ${move}\n`;
      });

      //doesnt work for RB and GS
      let set;
      if (ivString !== "") {
        set = `${name} @ ${item}
Ability: ${ability}
EVs:${evString}
${nature} Nature
IVs:${ivString}
${moves}
`;
      } else {
        set = `${name} @ ${item}
Ability: ${ability}
EVs:${evString}
${nature} Nature
${moves}
`;
      }

      exTeam += set;
    });

    return exTeam;
  };

  return (
    <section className="team" ref={ref}>
      {team.map((pokemon, i) => (
        <Pokemon
          key={i}
          pokemon={pokemon}
          i={i}
          getSlot={getSlot}
          lock={locks[i]}
          toggleLock={toggleLock}
        />
      ))}
    </section>
  );
}

export default forwardRef(Team);
