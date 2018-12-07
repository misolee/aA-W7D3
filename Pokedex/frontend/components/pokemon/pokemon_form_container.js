import { connect } from 'react-redux';
import { createPoke } from '../../actions/pokemon_actions';

const mDTP = dispatch => ({
  createPoke: disaptch(createPoke())
});

export default connect(null, mDTP)(PokemonForm);
