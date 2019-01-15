import React from "react";
import styled from "styled-components";

import CurrencyFormat from "../currencyFormat";

const TotalPriceLine = props => {
  console.log("TOTALLY");
  const label = props.label.replace(
    "${zip}",
    props.zip || " the national average."
  );
  return (
    <Container>
      <LeftItem style={props.style}>{label}</LeftItem>
      <CurrencyFormat style={props.currencyStyle} value={props.value} />
    </Container>
  );
};
export default TotalPriceLine;

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
  font-size: ${props => (props.style ? props.style.size : 0.75)}rem;
`;
const RightItem = styled.div`
  font-size: ${props => (props.style ? props.style.size : 0.75)}rem;
  color: red;
`;
