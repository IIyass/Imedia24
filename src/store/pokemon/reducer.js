import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getPokemonData: ["id"],
  getPokemonsData: [],
  pokemonsDataSuccess: ["data"],
  pokemonsDataFailed: ["message"],
  pokemonDataSuccess: ["data"],
  pokemonDataFailed: ["message"],
  onCloseModal: [],
  onOpenModal: [],
  nextPokemons: [],
});

export const pokemonTypes = Types;
export const pokemonActions = Creators;

/* ------------- Initial State ------------- */
export const initialState = {
  loading: true,
  count: 0,
  offset: 0,
  allPokemons: [],
  serverErrMessages: null,
  loadingSinglePokemon: true,
  pokemon: {},
  serverErrMessages2: null,
  open: false,
  loadingScroll: false,
};

/* ------------- Reducers ------------- */

export const pokemonsSuccess = (state, { data }) => {
  return {
    ...state,
    count:data.count,
    loadingScroll: false,
    loading: false,
    allPokemons: [...state.allPokemons, ...data.results],
  };
};

export const pokemonsFailed = (state, { message }) => {
  return { ...state, serverErrMessages: message, loading: false };
};

export const pokemonSuccess = (state, { data }) => {
  return {
    ...state,
    pokemon: {
      pokemonMetadata: data.pokemonMetadata,
      pokemonLocation: data.pokemonLocation,
    },
    loadingSinglePokemon: false,
  };
};

export const pokemonFailed = (state, { message }) => {
  return { ...state, serverErrMessages2: message, loadingSinglePokemon: false };
};

export const closeModal = (state) => {
  return { ...state, open: false, pokemon: {}, loadingSinglePokemon: true };
};

export const openModal = (state) => {
  return { ...state, open: true, pokemon: {} };
};

export const nextPokemons = (state) => {
  return { ...state, loadingScroll: true, offset: state.offset + 20 };
};

/* ------------- Hookup Reducers To Types ------------- */
const reducer = createReducer(initialState, {
  [Types.POKEMONS_DATA_SUCCESS]: pokemonsSuccess,
  [Types.POKEMONS_DATA_FAILED]: pokemonsFailed,
  [Types.POKEMON_DATA_SUCCESS]: pokemonSuccess,
  [Types.POKEMON_DATA_FAILED]: pokemonFailed,
  [Types.ON_CLOSE_MODAL]: closeModal,
  [Types.ON_OPEN_MODAL]: openModal,
  [Types.NEXT_POKEMONS]: nextPokemons,
});

export default reducer;
