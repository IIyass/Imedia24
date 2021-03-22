import React from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { string ,number} from 'prop-types'

const FallBackContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const LoadingIndecator = ({height=500,width=500,color="#ffcb05"}) => {
  return (
    <FallBackContainer>
      <Loader
        type="TailSpin"
        color={color}
        height={height}
        width={width}
        timeout={10000000}
      />
    </FallBackContainer>
  );
};

LoadingIndecator.propTypes = {
  height: number,
  width:number,
  color:string,
}

export default LoadingIndecator;
