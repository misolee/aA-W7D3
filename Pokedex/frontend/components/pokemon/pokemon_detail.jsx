import React from 'react';

class PokemonDetail extends React.Component {
  componentDidMount() {
    // debugger
    this.props.requestPoke(this.props.pokemonId);
  }
  componentDidUpdate(prevProps) {
    if (this.props.pokemonId !== prevProps.pokemonId) {
      this.props.requestPoke(this.props.pokemonId);
    }
  }

  render() {

    if (this.props.poke === undefined) return null;
    if (this.props.poke.pokemon === undefined) return null;
    let moves = this.props.poke.pokemon.moves.join(', ');
    let items = Object.values(this.props.items);
    let names = items.map((item, i) => {
      return (
        <ul key={i} className="itemDetails">
          <li><img className="itemImg" src={item.image_url}/></li>
          <li className="itemdet">{item.name}</li>
          <li className="itemdet">Happiness: {item.happiness}</li>
          <li className="itemdet">Price: ${item.price}</li>
        </ul>
      );
    });
    // debugger;
    return(
      <div className="pokeDetail">
        <img className="pokeDetailImg" src={this.props.poke.pokemon.image_url}/>
        <h1 className="pokeDetailName">{this.props.poke.pokemon.name}</h1>
        <h3>Type: {this.props.poke.pokemon.poke_type}</h3>
        <h3>Attack: {this.props.poke.pokemon.attack}</h3>
        <h3>Defense: {this.props.poke.pokemon.defense}</h3>
        <h3>Moves: {moves}</h3>
        <h3>Items:</h3>
        <div className="itemslists">
          {names}
        </div>
      </div>
    );
  }
}

export default PokemonDetail;
