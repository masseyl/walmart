import React from "react";
import styled from "styled-components";
const CurrencyFormat = props => {
  let value = props.value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  const prefix = props.prefix || "$";
  return (
    <Item style={props.style}>
      {prefix}
      {value}
    </Item>
  );
};
export default CurrencyFormat;

const Item = styled.div`
  font-size: ${props =>
    props.style && props.style.size ? props.style.size : 0.75}rem;
  text-decoration: ${props =>
    props.style && props.style.decoration ? props.style.decoration : "none"};
  color: ${props =>
    props.style && props.style.color ? props.style.color : "black"};
  font-weight: ${props =>
    props.style && props.style.weight ? props.style.weight : "normal"};
`;
