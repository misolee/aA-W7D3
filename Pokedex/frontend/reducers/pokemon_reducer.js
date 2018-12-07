import { RECEIVE_ALL_POKEMON, RECEIVE_POKE, RECEIVE_NEW_POKE } from '../actions/pokemon_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return Object.assign({}, action.pokemon, state);
    case RECEIVE_POKE:
      newState = Object.assign({}, state, {[action.poke.pokemon.id]: action.poke});
      return newState;
    case RECEIVE_NEW_POKE:
      newState = Object.assign({}, state, {[action.poke.id]: action.poke});
      return newState;
    default:
      return state;
  }
};
