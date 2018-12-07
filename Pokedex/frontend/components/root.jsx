import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container.js';
import { HashRouter, Route } from 'react-router-dom';
// import {PokemonIndexItem} from './pokemon/pokemon_index_item'
// import PokemonDetailContainer from './pokemon/pokemon_detail_container.js';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
        <Route component={PokemonIndexContainer} path='/'/>
    </HashRouter>
  </Provider>
);

export default Root;
