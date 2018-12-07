import React from 'react';
import {Link} from 'react-router-dom';

export const PokemonIndexItem = (props) => {
  return (
    <li className="poke">
      <Link className="pokelists" to={`/pokemon/${props.pokemon.id}`}>
        {props.pokemon.id}
        <img src={props.pokemon.image_url}/>
        {props.pokemon.name}
      </Link>
    </li>
  );
};
