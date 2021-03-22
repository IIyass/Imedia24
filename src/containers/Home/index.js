import React, { useEffect, useRef, useCallback } from "react";
import { string, func, bool, array, number, object } from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { pokemonActions } from "store/pokemon/reducer";
import PokemonCard from "components/PokemonCard";
import DetailedCard from "components/DetailedCard";

import {
  Wrapper,
  ErrorContainer,
  InfinitScrollLoading,
  PokemonsContainer,
  Title,
} from "./style";
import LoadingIdecator from "../../components/LoadingIndecator";
import Modal from "../../components/Modal";

const Home = (props) => {
  const {
    fetchAllPokemons,
    fetchPokemon,
    loading,
    allPokemons,
    serverErrMessages,
    open,
    pokemon,
    loadingSinglePokemon,
    onClose,
    nextPokemons,
    loadingScroll,
    count,
  } = props;

  const observer = useRef();
  const lastPokemonRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (
          entries[0].isIntersecting &&
          !loadingScroll &&
          allPokemons.length < count
        ) {
          nextPokemons();
        }
      });
      if (node) observer.current.observe(node);
    },
    [allPokemons.length, count, loading, loadingScroll, nextPokemons]
  );

  useEffect(() => {
    fetchAllPokemons();
  }, [fetchAllPokemons]);

  return (
    <Wrapper>
      <Modal onClose={onClose} open={open}>
        {loadingSinglePokemon ? (
          <LoadingIdecator />
        ) : (
          <DetailedCard
            height={pokemon.pokemonMetadata.height}
            name={pokemon.pokemonMetadata.name}
            weight={pokemon.pokemonMetadata.weight}
            location={pokemon.pokemonLocation}
          />
        )}
      </Modal>
      <Title className="title">Pokemons</Title>
      {loading ? (
        <LoadingIdecator />
      ) : serverErrMessages ? (
        <ErrorContainer>{serverErrMessages}</ErrorContainer>
      ) : (
        <>
          <PokemonsContainer className="pokemonContainer">
            {allPokemons.map(({ name }, index) =>
              allPokemons.length === index + 1 ? (
                <div
                  ref={lastPokemonRef}
                  key={index}
                  onClick={() => fetchPokemon(index)}
                >
                  <PokemonCard name={name} />
                </div>
              ) : (
                <div key={index} onClick={() => fetchPokemon(index)}>
                  <PokemonCard name={name} />
                </div>
              )
            )}
          </PokemonsContainer>

          {loadingScroll && (
            <InfinitScrollLoading>
              <LoadingIdecator color="#2a75bb" height={150} width={150} />
            </InfinitScrollLoading>
          )}
        </>
      )}
    </Wrapper>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    fetchAllPokemons: () => dispatch(pokemonActions.getPokemonsData()),
    fetchPokemon: (id) => dispatch(pokemonActions.getPokemonData(id)),
    onClose: () => dispatch(pokemonActions.onCloseModal()),
    nextPokemons: () => dispatch(pokemonActions.nextPokemons()),
  };
}

const mapStateToProps = (state) => ({
  loading: state.pokemonReducer.loading,
  allPokemons: state.pokemonReducer.allPokemons,
  serverErrMessages: state.pokemonReducer.serverErrMessages,
  serverErrMessages2: state.pokemonReducer.serverErrMessages2,
  loadingSinglePokemon: state.pokemonReducer.loadingSinglePokemon,
  pokemon: state.pokemonReducer.pokemon,
  open: state.pokemonReducer.open,
  loadingScroll: state.pokemonReducer.loadingScroll,
  count: state.pokemonReducer.count,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

Home.propTypes = {
  fetchAllPokemons: func,
  fetchPokemon: func,
  loading: bool,
  allPokemons: array,
  serverErrMessages: string,
  open: bool,
  pokemon: object,
  loadingSinglePokemon: bool,
  onClose: func,
  nextPokemons: func,
  loadingScroll: bool,
  count: number,
};

export default compose(withConnect)(Home);
