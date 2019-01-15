import React from "react";
import styled from "styled-components";

import SimplePriceLine from "./simplePriceLine";
import SavingsPriceLine from "./savingsPriceLine";
import FeesPriceLine from "./feesPriceLine";
import TotalPriceLine from "./totalPriceLine";
import Border from "../border";

const PriceLines = props => {
  console.log("priceline");
  console.log(props.total);
  return (
    <Container>
      <SimplePriceLine
        label={props.labels.subTotal}
        value={props.data.itemPrice}
      />
      <SavingsPriceLine
        label={props.labels.discount}
        value={props.data.itemPickupDiscount}
        pickUpText={props.labels.pickUp}
        currencyStyle={{ color: "red" }}
        applyPickup={() => {
          props.applyPickupDiscount();
        }}
      />
      <FeesPriceLine
        label={props.labels.estFees}
        value={props.fees}
        currencyStyle={{ color: "red" }}
        zipcode={props.zipcode}
      />
      <Border />
      <TotalPriceLine
        label={props.labels.total}
        value={props.total}
        style={{ weight: "bold", size: 1.1 }}
        currencyStyle={{ weight: "bold", size: 1.2 }}
      />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 30%;
  min-height: 150px;
  justify-content: space-around;
  align-items: center;
  margin-left: 7px;
  margin-right: 7px;
`;
export default PriceLines;
