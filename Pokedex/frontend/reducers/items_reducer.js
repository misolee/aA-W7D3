import { RECEIVE_POKE } from '../actions/pokemon_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POKE:
      return action.poke.items;
    default:
      return state;
  }
};
