import React from 'react';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }
  render() {
    const poke = this.props.pokemon.map ((poke, idx) => <li className="poke" key={idx}>{idx + 1} <img src={poke.image_url}/> {poke.name}</li>);
    return (
      <div className="pokelist">
        {poke}
      </div>
    );
  }
}

export default PokemonIndex;