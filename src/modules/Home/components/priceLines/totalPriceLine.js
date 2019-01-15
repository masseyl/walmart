import React from "react";
import styled from "styled-components";

import CurrencyFormat from "../currencyFormat";

const FeesPriceLine = props => {
  const label = props.label.replace(
    "${zip}",
    props.zip || " the national average."
  );
  return (
    <Container>
      <LeftItem>{label}</LeftItem>
      <CurrencyFormat style={props.currencyStyle} value={props.value} />
    </Container>
  );
};
export default FeesPriceLine;

const onClick = event => {
  event.stopPropagation();
  alert("woo");
};
const onMouseOver = event => {
  event.stopPropagation();
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-left: 7px;
  margin-right: 7px;
`;

const LeftItem = styled.div`
  font-size: ${props => props.size || 0.75}rem;
`;
const RightItem = styled.div`
  font-size: ${props => props.size || 0.75}rem;
  color: red;
`;

const PopUpContainer = styled.div`
  position: absolute;
  text-decoration: none;
  top: 19px;
  left: 8%;
  z-index: 1;
  color: rgba(50, 50, 50, 0.8);
`;
const PopUpTriangle = styled.div`
  width: 5px;
  height: 5px;
  border-top: 1px solid rgba(100, 100, 100, 0.5);
  border-left: 1px solid rgba(100, 100, 100, 0.5);
  border-right: none;
  border-bottom: none;
  transform: rotate(45deg);
  background-color: white;
`;
const PopUpText = styled.div`
  font-size: ${props => props.size || 0.75}rem;
  border-radius: 3px;
  margin-left: -23px;
  margin-top: -4px;
  border: 1px solid rgba(100, 100, 100, 0.5);
  padding: 3px;
  border-radius: 4px;
  max-width: 134px;
  padding: 7px;
`;
