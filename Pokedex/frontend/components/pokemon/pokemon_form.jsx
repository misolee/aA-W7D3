import React from 'react';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      attack: "",
      defense: "",
      poke_type: "",
      moves: {},
      image_url: ""
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPoke(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.name} placeholder="Name" type="text" onChange={this.update(name)}></input>
        <input value={this.state.attack} placeholder="Attack" type="text" onChange={this.update(attack)}></input>
        <input value={this.state.defense} placeholder="Defense" type="text" onChange={this.update(defense)}></input>
        <input value={this.state.poke_type} placeholder="Type" type="text" onChange={this.update(poke_type)}></input>
        <input value={this.state.moves} placeholder="Moves" type="text" onChange={this.update(moves)}></input>
        <input value={this.state.image_url} placeholder="Image Url" type="text" onChange={this.update(image_url)}></input>
        <button>Create Pokemon </button>
      </form>
    );
  }
}

export default PokemonForm;
