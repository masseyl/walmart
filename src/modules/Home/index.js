import React, { Component } from "react";
import { connect } from "react-redux";

import Background from "../../components/background";
import Container from "./components/container";

import { applyPickupDiscount, applyPromoCode, changeZipCode } from "./actions";

class Home extends Component {
  changeZipCode = zip => {
    this.props.changeZipCode(zip);
  };

  render() {
    return (
      <Background>
        <Container
          item={this.props.item}
          labels={this.props.labels}
          changeZipCode={this.changeZipCode}
          taxRate={this.props.taxRate}
          zipcode={this.props.zipcode}
          applyPickupDiscount={this.props.applyPickupDiscount}
          applyPromoCode={this.props.applyPromoCode}
          promoDiscount={this.props.promoDiscount}
          pickupDiscount={this.props.pickupDiscount}
        />
      </Background>
    );
  }
}

function mapStateToProps(state) {
  return {
    item: state.Home.present.item,
    labels: state.Home.present.labels,
    taxRate: state.Home.present.currentTaxRate,
    pickupDiscount: state.Home.present.pickupDiscount,
    promoDiscount: state.Home.present.promoDiscount,
    zipcode: state.Home.present.currentZipCode
  };
}

function mapPropsToDispatch(dispatch) {
  return {
    applyPromoCode: value => dispatch(applyPromoCode(value)),
    applyPickupDiscount: () => dispatch(applyPickupDiscount()),
    changeZipCode: zip => dispatch(changeZipCode(zip))
  };
}

export default connect(
  mapStateToProps,
  mapPropsToDispatch
)(Home);
