import React, { PureComponent } from "react";
import styled from "styled-components";
import PriceLines from "./priceLines/priceLines";
import ItemDetail from "./itemDetails";
import Discount from "./discount";
import Border from "./border";
class Container extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: { ...props.item },
      labels: { ...props.labels },
      taxRate: 0,
      total: 0,
      fees: 0
    };
    console.log("this.state");
    console.log(this.state);
  }

  applyPickupDiscount = () => {
    this.props.applyPickupDiscount();
  };

  applyPromoCode = value => {
    this.props.applyPromoCode(value);
  };

  calculateValues = () => {
    const taxRate = this.props.taxRate;
    const pickupDiscount = this.props.pickupDiscount;
    const promoDiscount = this.props.promoDiscount;
    const itemPrice = this.props.item.itemPrice;
    const subTotal = itemPrice - (pickupDiscount + itemPrice * promoDiscount);
    const total = subTotal + subTotal * taxRate;
    const fees = subTotal * taxRate;
    return [fees, total, subTotal];
  };
  changeTaxZone = zip => {
    this.props.changeTaxZone(zip);
  };

  render() {
    const [fees, total, subTotal] = this.calculateValues(this.props);
    return (
      <Wrapper>
        <PriceLines
          data={this.state.data}
          labels={this.state.labels}
          fees={fees}
          total={total}
          applyPickupDiscount={this.applyPickupDiscount}
          applyPromoCode={this.applyPromoCode}
          changeTaxZone={this.changeTaxZone}
          zipcode={this.props.zipcode}
        />
        <Border />
        <ItemDetail
          data={this.state.data}
          labels={this.state.labels}
          fees={fees}
          subTotal={subTotal}
          originalPrice={this.props.item.itemPrice}
        />
        <Border />
        <Discount
          data={this.state.data}
          labels={this.state.labels}
          fees={fees}
          subTotal={subTotal}
          originalPrice={this.props.item.itemPrice}
          applyPromoCode={this.applyPromoCode}
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: 250px;
  min-width: 235px;
  border: 10px solid green;
  background-color: white;
`;
export default Container;
