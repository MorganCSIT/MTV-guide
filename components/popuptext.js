import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const popoutin = keyframes`
  0% {
    color: black;
    transform: scale(0);
    opacity: 0;
    text-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  25% {
    color: red;
    transform: scale(2);
    opacity: 1;
    text-shadow: 3px 10px 5px rgba(0, 0, 0, 0.5);
  }
  50% {
    color: black;
    transform: scale(1);
    opacity: 1;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    transform: scale(1);
    opacity: 1;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0);
  }
`;

const PopOutInText = styled.div`
  animation: 2s ${popoutin} ease infinite;
`;

const MyComponent = () => {
  return <PopOutInText>This text pops in and out!</PopOutInText>;
};

export default MyComponent;
