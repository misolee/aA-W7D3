export const fetchAllPokemon = () => {
  return $.ajax ({
    method: 'GET',
    url: '/api/pokemon'
  });
};

export const fetchPoke = (id) => {
  return $.ajax ({
    method: 'GET',
    url: `/api/pokemon/${id}`
  });
};

export const createPoke = () => {
  return $.ajax ({
    method: 'post',
    url: `/api/pokemon/`
  });
};
