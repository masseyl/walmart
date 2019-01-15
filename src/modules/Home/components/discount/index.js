import React, { PureComponent } from "react";
import styled from "styled-components";
import Header from "./header";
import CurrencyFormat from "../currencyFormat";
class Discount extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { active: true, value: "" };
    console.log(this.props);
  }

  changeState = active => {
    this.setState({ active: !this.state.active });
  };

  applyPromoCode = event => {
    this.props.applyPromoCode(this.state.value);
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    const header = this.state.active
      ? this.props.labels.applyPromoCode
      : this.props.labels.hidePromoCode;
    return (
      <Container>
        <Header
          changeState={this.changeState}
          label={header}
          active={this.state.active}
        />
        {!this.state.active && (
          <Body>
            <TextContainer>
              <Label>Promo code</Label>
              <Input onChange={this.handleChange} value={this.state.value} />
            </TextContainer>
            <Button onClick={this.applyPromoCode}>Apply</Button>
          </Body>
        )}
      </Container>
    );
  }
}
export default Discount;

const Container = styled.div`
  margin-top: 7px;
  margin-bottom: 7px;
  margin-left: 7px;
  width: 98%;
`;

const Image = styled.img`
  width: 25%;
  height: 25%;
`;
const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const TextContainer = styled.div`
  margin-top: 7px;
`;
const Label = styled.div`
  font-size: 0.75rem;
  font-weight: "normal";
  color: rgba(100, 100, 100, 0.5);
`;
const Input = styled.input`
  height: 22px;
`;
const Total = styled.div`
  color: rgba(100, 100, 100, 0.5);
`;

const Button = styled.div`
  cursor: pointer;
  :hover {
    background-color: rgba(200, 100, 10, 0.4);
  }
  margin-top: 14px;
  padding: 7px;
  border-radius: 4px;
  border: 1px solid black;
`;
