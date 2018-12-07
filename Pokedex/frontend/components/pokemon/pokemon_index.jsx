import React from 'react';
import { PokemonIndexItem } from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route, NavLink } from 'react-router-dom';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }
  render() {
    // debugger
    // const poke = this.props.pokemon.map ((poke, idx) => <li className="poke" key={idx}>{idx + 1} <img src={poke.image_url}/> {poke.name}</li>);
    const pokemonItems = this.props.pokemon.map(poke => {
      if (poke.id === undefined) {
        return <PokemonIndexItem key={poke.pokemon.id} pokemon={poke.pokemon} />;
      } else {
        return <PokemonIndexItem key={poke.id} pokemon={poke} />;
      }
    });

    return (

      <div className="pokelist">
        <div className="list">
          <div>
            <NavLink className="navlink" to="/">All Pokemon</NavLink>
          </div>
          <div>
            {pokemonItems}
          </div>
        </div>
        <Route component={PokemonDetailContainer} path='/pokemon/:pokemonId'/>
      </div>
    );
  }
}

export default PokemonIndex;
