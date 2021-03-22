import styled from "styled-components";
import media from "Devices";

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 100px;
`;

export const ErrorContainer = styled.h2`
  color: #ff3333;
  text-align: center;
`;

export const PokemonsContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: grid;
  grid-template-columns: auto auto auto;
  row-gap: 4rem;
  column-gap: 2rem;

  ${media.laptopL`
     grid-template-columns: auto auto ;
  `}

  ${media.mobile`
     grid-template-columns: auto ;
  `}
`;

export const InfinitScrollLoading = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin: auto;
  margin-top: 10px;
`;

export const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  color: #2a75bb;

  ${media.laptopL`
    font-size: 45px;
  `}

  ${media.mobile`
    font-size: 35px;
  `}
`;
