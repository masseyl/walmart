import React from "react";
import styled from "styled-components";
import CurrencyFormat from "../currencyFormat";
const SimplePriceLine = props => {
  console.log("simple");
  return (
    <Container>
      <Item>{props.label}</Item>
      <CurrencyFormat style={props.currencyStyle} value={props.value} />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-left: 7px;
  margin-right: 7px;
`;
export default SimplePriceLine;

const Item = styled.div`
  font-size: ${props => props.size || 0.75}rem;
`;
