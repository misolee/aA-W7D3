import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import {requestPoke} from '../../actions/pokemon_actions';

const mSTP = (state, ownProps) => {
  // debugger
  return (
    {pokemonId: ownProps.match.params.pokemonId,
      poke: state.entities.pokemon[ownProps.match.params.pokemonId],
      items: state.entities.items}
  );
};

const mDTP = dispatch => ({
  requestPoke: (id) => dispatch(requestPoke(id))
});

export default connect(
  mSTP,
  mDTP
)(PokemonDetail);
