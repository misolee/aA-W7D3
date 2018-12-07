import * as ApiUtil from '../util/api_util';
export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKE = 'RECEIVE_POKE';
export const RECEIVE_NEW_POKE = 'CREATE_POKE';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receivePoke = poke => ({
  type: RECEIVE_POKE,
  poke
});

export const receiveNewPoke = poke => ({
  type: RECEIVE_NEW_POKE,
  poke
});

export const requestAllPokemon = () => (dispatch) => (
  ApiUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestPoke = (id) => (dispatch) => (
  ApiUtil.fetchPoke(id)
    .then(poke => dispatch(receivePoke(poke)))
);

export const createPoke = () => (dispatch) => (
  ApiUtil.createPoke()
    .then(poke => dispatch(receiveNewPoke(poke)))
);
