import React from "react";
import styled from "styled-components";
import { string } from "prop-types";

const PokemonCardContainer = styled.div`
  cursor: pointer;
  border: 2px solid #2a75bb;
  display:flex;
  h1 {
    color: #ffcb05;
    margin:auto;
    padding:20px;
  }
  :hover {
    transition: all 0.3s ease 0s;
    transform: translateY(-10px);
    transition-duration: 500ms;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 5px,
      rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;
  }
`;
const PokemonCard = ({ name }) => (
  <PokemonCardContainer>
    <h1>{name}</h1>
  </PokemonCardContainer>
);


PokemonCard.propTypes = {
  name: string,
};

export default PokemonCard;
