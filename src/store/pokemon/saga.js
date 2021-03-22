import { call, put, select, takeLatest } from "redux-saga/effects";
import { pokemonTypes, pokemonActions } from "./reducer";
import axiosInstance from "../../utils/axiosInstance";
const {
  pokemonsDataFailed,
  pokemonsDataSuccess,
  pokemonDataSuccess,
  pokemonDataFailed,
  onOpenModal,
  nextPokemons,
} = pokemonActions;

const getPokemon = (state) => state.pokemonReducer;

export function* fetchAllPokemons() {
  try {
    const state = yield select(getPokemon);

    const response = yield call(
      axiosInstance,
      `pokemon/?limit=20&offset=${state.offset}`
    );

    yield put(pokemonsDataSuccess(response.data));
  } catch (err) {
    yield put(pokemonsDataFailed("Error"));
  }
}

export function* fetchNextPokemons() {
  try {
    yield call(nextPokemons);
    yield fetchAllPokemons();
  } catch (err) {
    console.log(err);
  }
}

export function* fetchPokemon({ id }) {
  try {
    yield put(onOpenModal());
    const pokemonData = yield call(axiosInstance, `pokemon/${id + 1}`);
    const pokemonLocation = yield call(
      axiosInstance,
      `pokemon/${id + 1}/encounters`
    );
    yield put(
      pokemonDataSuccess({
        pokemonMetadata: pokemonData.data,
        pokemonLocation: pokemonLocation.data,
      })
    );
  } catch (err) {
    yield put(pokemonDataFailed("Error "));
  }
}

const { GET_POKEMON_DATA, NEXT_POKEMONS, GET_POKEMONS_DATA } = pokemonTypes;

const Watchers = [
  takeLatest(GET_POKEMONS_DATA, fetchAllPokemons),
  takeLatest(NEXT_POKEMONS, fetchNextPokemons),
  takeLatest(GET_POKEMON_DATA, fetchPokemon),
];

export default Watchers;
