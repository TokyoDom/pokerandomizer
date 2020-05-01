import React from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import CachedOutlinedIcon from "@material-ui/icons/CachedOutlined";
import "./styles/Pokemon.css";

function Pokemon({ pokemon, i, getSlot, lock, toggleLock }) {
  const renderImage = () => {
    let img = pokemon.pokemon.toLowerCase().replace(/[^\w-]+/g, "");
    if (img === "kommo-o") {
      img = "kommoo";
    }

    if (img === "ho-oh") {
      img = "hooh";
    }

    if(img === "oricorio-pom-pom") {
      img = "oricorio-pompom";
    }

    return (
      <img
        src={`https://play.pokemonshowdown.com/sprites/ani/${img}.gif`}
        alt={pokemon.pokemon}
      />
    );
  };

  return (
    <section className="pokemon">
      <div className="image-info">
        <div className="image">
          {renderImage()}
          <div className="icons">
            {lock ? (
              <LockOutlinedIcon
                onClick={e => toggleLock(i)}
                style={{ color: "red" }}
              />
            ) : (
              <LockOpenOutlinedIcon onClick={e => toggleLock(i)} />
            )}
            <CachedOutlinedIcon
              onClick={e => {
                getSlot(i);
                if (lock) toggleLock(i);
              }}
            />
          </div>
        </div>
        <div className="info">
          <div>{pokemon.pokemon}</div>
          <div>{pokemon.items[0]}</div>
          <div>{pokemon.abilities[0]}</div>
        </div>
      </div>
      <div className="moves">
        <div>
          {pokemon.moveslots.length > 0
            ? `${pokemon.moveslots[0][0].move} ${
                pokemon.moveslots[0][0].type ? pokemon.moveslots[0][0].type : ""
              }`
            : null}
        </div>
        <div>
          {pokemon.moveslots.length > 1
            ? `${pokemon.moveslots[1][0].move} ${
                pokemon.moveslots[1][0].type ? pokemon.moveslots[1][0].type : ""
              }`
            : null}
        </div>
        <div>
          {pokemon.moveslots.length > 2
            ? `${pokemon.moveslots[2][0].move} ${
                pokemon.moveslots[2][0].type ? pokemon.moveslots[2][0].type : ""
              }`
            : null}
        </div>
        <div>
          {pokemon.moveslots.length > 3
            ? `${pokemon.moveslots[3][0].move} ${
                pokemon.moveslots[3][0].type ? pokemon.moveslots[3][0].type : ""
              }`
            : null}
        </div>
      </div>
    </section>
  );
}

export default Pokemon;
