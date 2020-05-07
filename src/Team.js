import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle
} from "react";
import Pokemon from "./Pokemon";
import axios from "axios";
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
  const [dexNums, setDexNums] = useState(new Array(6).fill(132)); //to not make repeats on pokemon
  const [locks, setLocks] = useState(new Array(6).fill(false));
  const [loading, setLoading] = useState(new Array(6).fill(false));

  //reset locks if option changes
  useEffect(() => {
    setLocks(new Array(6).fill(false));
  }, [gen, tier, weight]);

  //functions for randomizerJS
  useImperativeHandle(ref, () => ({
    getTeam,
    getLowerTeam,
    exportTeam,
    importTeam
  }));

  //fetch standard team
  const getTeam = async () => {
    setLoading(locks.map(lock => lock ? false : true));
    const result = await axios(`/gen/${gen}/${tier}/${weight}`);
    const list = result.data;

    const { newTeam, newDex } = filterSets([], [], list, 6);

    setLoading(loading.fill(false));
    setTeam(newTeam);
    setDexNums(newDex);
  };

  //fetch mixed or heat team
  const getLowerTeam = async listLen => {
    setLoading(locks.map(lock => lock ? false : true));
    const result = await axios(`gen/${gen}/${tier}/${weight}`);
    const list = result.data.filter(poke => poke.formats.includes(tier));
    const lowerList = result.data;

    const { newTeam, newDex } = filterSets([], [], list, listLen);
    const { newTeam: finalTeam, newDex: finalDex } = filterSets(
      newDex,
      newTeam,
      lowerList,
      6
    );

    setTeam(finalTeam);
    setDexNums(finalDex);
    setLoading(loading.fill(false));
  };

  //fetch 1 slot
  const getSlot = async i => {
    let loadSlot = [...loading];
    loadSlot[i] = true;
    setLoading(loadSlot);

    const result = await axios(`gen/${gen}/${tier}/${weight}`);
    const list = result.data.filter(poke => !dexNums.includes(poke.oob.dex_number));

    let count = 0;
    let setAdded = false;

    while (!setAdded) {
      const movesets = secondaryFilter(list[count].setFormats, team);

      //pick random set if available
      if (movesets.length > 0) {
        let newArr = [...team];
        newArr[i] = movesets[Math.floor(Math.random() * movesets.length)];
        setLoading(loading.fill(false));
        setTeam(newArr);
        setAdded = true;
      }
      count++;
    }
  };

  //for team randomize
  const filterSets = (prevDex, prevTeam, list, i) => {
    //get new pokemon that have data
    let newDex = [...prevDex];
    let newTeam = [...prevTeam];
    let count = 0;
    while (newTeam.length < i) {
      if (locks[newDex.length]) {
        //check for lock at i
        newTeam = [...newTeam, team[newDex.length]];
        newDex = [...newDex, dexNums[newDex.length]];
      } else {
        const lockedDexNums = dexNums.filter((num, i) => locks[i]);
        const currentMon = list[count];
        if (
          !newDex.includes(currentMon.oob.dex_number) &&
          !lockedDexNums.includes(currentMon.oob.dex_number)
        ) { //check if dex num is used already

          const movesets = secondaryFilter(currentMon.setFormats, newTeam);
          if (movesets.length > 0) {
            newTeam = [
              ...newTeam,
              movesets[Math.floor(Math.random() * movesets.length)]
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

  //filter tier, z, mega options
  const secondaryFilter = (setFormats, newTeam) => {
    //check for set from tier, otherwise use diff non-uber tier
    if (setFormats.some(set => set.format === tier)) {
      setFormats = setFormats.filter(set => set.format === tier);
    } else {
      setFormats = setFormats.filter(
        set => ["OU", "UU", "RU", "NU", "PU", "ZU"].some(tier => tier === set.format)
      );
    }

    if(setFormats.length > 0) {
      let movesets = setFormats[0].movesets;
    
      //check for z crystal or mega stone
      const lockedSlots = team.filter((poke, i) => locks[i]);

      let hasZ =
        newTeam.some(poke => {
          if (poke.items[0] !== undefined) {
            return poke.items[0].match(/.*\sZ/);
          } else {
            return false;
          }
        }) ||
        lockedSlots.some(poke => {
          if (poke.items[0] !== undefined) {
            return poke.items[0].match(/.*\sZ/);
          } else {
            return false;
          }
        });

      if (hasZ)
        movesets = movesets.filter(set => !set.items[0].match(/.*\sZ/));

      let hasMega =
        newTeam.some(poke => {
          if (poke.items[0] !== undefined) {
            return poke.items[0].match(/.*(ite)/);
          } else {
            return false;
          }
        }) ||
        lockedSlots.some(poke => {
          if (poke.items[0] !== undefined) {
            return poke.items[0].match(/.*(ite)/);
          } else {
            return false;
          }
        });

      if (hasMega)
        movesets = movesets.filter(set => !set.items[0].match(/.*(ite)/));

      return movesets;
    } else {
      return [];
    }
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

      let set = name;
      if (item) set += ` @ ${item}`;
      if (ability) set += `\nAbility: ${ability}`;
      if (evString !== "") set += `\nEVs:${evString}`;
      if (nature) set += `\n${nature} Nature`;
      if (ivString !== "") set += `\nIVs:${ivString}`;
      if (moves !== "") set += `\n${moves}\n`;

      exTeam += set;
    });

    return exTeam;
  };

  //import team from showdown
  const importTeam = async showdownImport => {
    setLoading(true);
    const getStats = (mon, eviv) => {
      let statObj = {};
      const evivs = mon.filter(str => str.includes(eviv)); //EVs:
      if (evivs.length > 0) {
        let stats = evivs[0].slice(4, evivs[0].length);
        stats = stats.split("/");
        stats = stats.map(stat => stat.trim().toLowerCase());

        const keys = ["hp", "atk", "def", "spa", "spd", "spe"];
        keys.forEach(key => {
          const stat = stats.filter(stat => stat.includes(key));
          if (stat.length > 0) {
            statObj[key] = parseInt(stat[0].slice(0, stat[0].indexOf(" ")));
          } else {
            if (eviv === "EVs:") {
              statObj[key] = 0;
            } else {
              statObj[key] = 31;
            }
          }
        });
        return [statObj];
      }

      return null;
    };

    let strArr = showdownImport.trim().split("\n");
    let setsLeft = true;
    let team = [];

    while (setsLeft) {
      const index = strArr.indexOf("");
      let mon;
      if (index !== -1) {
        mon = strArr.splice(0, index + 1);
        mon.pop();
      } else {
        if (strArr[strArr.length - 1] === "") {
          mon = strArr.pop();
        } else {
          mon = strArr;
        }
        setsLeft = false;
      }

      let monObj = {
        abilities: [],
        evconfigs: [],
        items: [],
        ivconfigs: [],
        moveslots: [],
        natures: [],
        pokemon: ""
      };

      if (mon[0].indexOf("@") !== -1) {
        monObj.pokemon = mon[0].slice(0, mon[0].indexOf("@")).trim();
        monObj.items = [
          mon[0].slice(mon[0].indexOf("@") + 2, mon[0].length).trim()
        ];
      } else {
        monObj.pokemon = mon[0].trim();
      }

      const pokemon = monObj.pokemon;
      if (pokemon.includes("(F)"))
        monObj.pokemon = pokemon.slice(0, pokemon.indexOf("(") - 1);
      if (pokemon.includes("(M)"))
        monObj.pokemon = pokemon.slice(0, pokemon.indexOf("(") - 1);

      const ability = mon.filter(str => str.includes("Ability:"));
      if (ability.length > 0) {
        monObj.abilities = [
          ability[0]
            .slice(ability[0].indexOf(":") + 2, ability[0].length)
            .trim()
        ];
      }

      const nature = mon.filter(str => str.includes(" Nature"));
      if (nature.length > 0) {
        monObj.natures = [nature[0].slice(0, nature[0].indexOf(" "))];
      }

      const evs = getStats(mon, "EVs:");
      if (evs) {
        monObj.evconfigs = evs;
      }

      const ivs = getStats(mon, "IVs:");
      if (ivs) {
        monObj.ivconfigs = ivs;
      }

      const moves = mon.filter(str => str.charAt(0) === "-");
      if (moves.length > 0) {
        let moveslots = [];
        moves.forEach(move => {
          let moveObj = {};
          if (move.includes("Hidden Power")) {
            moveObj.move = "Hidden Power";
            moveObj.type = move
              .slice(move.indexOf("r") + 2, move.length)
              .trim();
          } else {
            moveObj.move = move.slice(2, move.length).trim();
            moveObj.type = null;
          }

          moveslots = [...moveslots, [moveObj]];
        });
        monObj.moveslots = moveslots;
      }

      team = [...team, monObj];
    }

    //fetch dexnums
    let url = 'gen/IMPORT/?pokemon=';
    team.forEach(poke => url += `${poke.pokemon};`);
    url = url.slice(0, -1);

    const result = await axios(url);
    const dex_numbers = result.data.map(poke => poke.oob.dex_number);

    let newTeam = new Array(6).fill(ditto);
    team.forEach((slot, i) => {
      if (i <= 6) newTeam[i] = slot;
    });

    setTeam(newTeam);
    setDexNums(dex_numbers);
    setLocks(locks.fill(false));
    setLoading(loading.fill(false));
  };

  return (
    <section className="team" ref={ref}>
      {team.map((pokemon, i) => (
        <Pokemon
          loading={loading}
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
