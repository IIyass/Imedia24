import React from "react";
import styled from "styled-components";
import media from "Devices";
import { string, array, number } from "prop-types";

const DetailedCardContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;

  h1 {
    color: #2a75bb;
    margin: auto;
    padding: 20px;

    ${media.laptopL`
      font-size:22px;
    `}

    ${media.laptopL`
     font-size:12px;
  `}
  }

  span,
  li {
    color: #ffcb05;
  }
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;

    li {
      margin-bottom: 10px;
      font-size: 20px;
    }
  }
`;

const DetailedCard = ({ name, weight, height, location }) => (
  <DetailedCardContainer>
    <h1>
      Pokemon Name : <span>{name}</span>{" "}
    </h1>
    <h1>
      Pokemon Weight :<span>{weight}</span>{" "}
    </h1>
    <h1>
      Pokemon Height : <span>{height}</span>{" "}
    </h1>
    <h1> Pokemon Location :</h1>
    <ul>
      {location.length > 0 ? (
        location.map(({ location_area }, index) => (
          <li key={index}>{location_area.name}</li>
        ))
      ) : (
        <span>No Location found</span>
      )}
    </ul>
  </DetailedCardContainer>
);

DetailedCard.propTypes = {
  name: string,
  height: number,
  weight: number,
  location: array,
};

export default DetailedCard;
