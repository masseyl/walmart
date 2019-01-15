import React, { PureComponent } from "react";
import styled from "styled-components";
import Header from "./header";
import CurrencyFormat from "../currencyFormat";
class ItemDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { active: true };
    console.log(this.props);
  }

  changeState = active => {
    this.setState({ active: !this.state.active });
  };

  render() {
    const header = this.state.active
      ? this.props.labels.showItemDetails
      : this.props.labels.hideItemDetails;
    return (
      <Container>
        <Header
          changeState={this.changeState}
          label={header}
          active={this.state.active}
        />
        {!this.state.active && (
          <Body>
            <Image src={this.props.data.itemImageUrl} />
            <TextContainer>
              <Description>{this.props.data.itemDescription}</Description>
              <Total>
                <CurrencyFormat
                  style={{
                    decoration: "line-through",
                    size: 0.75,
                    color: "rgba(100,100,100,.5)",
                    weight: "bold"
                  }}
                  value={this.props.originalPrice}
                />
              </Total>
              <MarkedDown>
                <CurrencyFormat
                  style={{
                    size: 1.1,
                    weight: "bold"
                  }}
                  value={this.props.subTotal}
                />
              </MarkedDown>
            </TextContainer>
          </Body>
        )}
      </Container>
    );
  }
}
export default ItemDetail;

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
  justify-content: space-between;
  width: 100%;
`;
const TextContainer = styled.div`
  width: 100%;
`;
const Description = styled.div`
  width: 100%;
`;
const MarkedDown = styled.div`
  font-weight: bold;
`;
const Total = styled.div`
  color: rgba(100, 100, 100, 0.5);
`;
