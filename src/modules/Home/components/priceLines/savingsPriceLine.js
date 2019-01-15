import React, { PureComponent } from "react";
import styled from "styled-components";

import CurrencyFormat from "../currencyFormat";

class SavingsPriceLine extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };
  }

  onClick = event => {
    this.hidePopup(event);
    this.props.applyPickup();
  };

  onMouseOut = event => {
    this.hidePopup(event);
  };

  onMouseOver = event => {
    event.stopPropagation();
    this.setState({ showPopup: true });
  };

  hidePopup = event => {
    event.stopPropagation();
    this.setState({ showPopup: false });
  };

  render() {
    return (
      <Container>
        <LeftItem
          onClick={this.onClick}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
        >
          {this.props.label}
          {this.state.showPopup && (
            <PopUpContainer onClick={this.hidePopup}>
              <PopUpTriangle />
              <PopUpText>{this.props.pickUpText}</PopUpText>
            </PopUpContainer>
          )}
        </LeftItem>
        <CurrencyFormat
          style={this.props.currencyStyle}
          value={this.props.value}
        />
      </Container>
    );
  }
}

export default SavingsPriceLine;

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
  text-decoration: underline;
  cursor: pointer;
  :hover {
    color: rgba(200, 100, 10, 0.4);
  }
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
  z-index: 99;
  color: rgba(50, 50, 50, 0.8);
  background-color: white;
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
  margin-left: 23px;
`;

const PopUpText = styled.div`
  font-size: ${props => props.size || 0.75}rem;
  border-radius: 3px;
  margin-top: -4px;
  border: 1px solid rgba(100, 100, 100, 0.5);
  padding: 3px;
  border-radius: 4px;
  max-width: 134px;
  padding: 7px;
`;
