import React, { Component } from "react";
import { connect } from "react-redux";

import Background from "../../components/background";
import DetailContainer from "./components/detailContainer";
import Container from "./components/container";
import Loading from "./components/loading";

import { getMessages, removeMessage } from "./actions";
import { dimensions, sharedTimings } from "../../config/defaults";

class Home extends Component {
  getTaxRate = zip => {
    return tax[zip] || 0.05;
  };
  render() {
    const content = this.props.messages;
    const width = this.state.width;
    let listHeight = this.state.height || window.innerHeight;

    return (
      <Background>
        <Container data={item} labels={labels} getTaxRate={this.getTaxRate} />
      </Background>
    );
  }
}

function mapStateToProps(state) {
  return {
    item: state.Home.present.item,
    labels: state.Home.present.labels
  };
}

function mapPropsToDispatch(dispatch) {
  return {
    applyPromoCode: (limit, pageToken) =>
      dispatch(applyPromoCode(limit, pageToken)),
    applyPickupDiscount: index => dispatch(applyPickupDiscount(index))
  };
}

export default connect(
  mapStateToProps,
  mapPropsToDispatch
)(Home);
