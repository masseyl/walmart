import React, { PureComponent } from "react";
import styled from "styled-components";
import PriceLines from "./priceLines/priceLines";

class Container extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: { ...props.data },
      labels: { ...props.labels }
    };
    console.log(this.state);
  }
  applyPickupDiscount = () => {
    this.props.applyPickupDiscount();
  };
  applyPromoCode = () => {
    this.props.applyPromoCode();
  };
  render() {
    return (
      <Wrapper>
        <PriceLines
          data={this.state.data}
          labels={this.state.labels}
          applyPickupDiscount={this.applyPickupDiscount}
          applyPromoCode={this.applyPromoCode}
        />
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  display: flex;
  height: 200px;
  background-color: white;
  -webkit-backface-visibility: hidden;
  -webkit-transform-style: preserve-3d;
`;
export default Container;
