import React, { PureComponent } from "react";
import styled from "styled-components";

class Header extends PureComponent {
  constructor(props) {
    super(props);
  }
  toggle = () => {
    this.props.changeState();
  };
  render() {
    const indicator = !this.props.active ? "-" : "+";
    return (
      <Container onClick={this.toggle} active={this.props.active}>
        <div>{this.props.label}</div>
        <Indicator>{indicator}</Indicator>
      </Container>
    );
  }
}
export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  font-size: 0.75rem;
  border: ${props => (!props.active ? "1px solid rgba(100,100,100,.5)" : null)};
  padding-left:${props => (props.active ? 2 : null)}
  margin-left:${props => (props.active ? -2 : null)}
`;
const Indicator = styled.div`
  font-size: 1.75rem;
`;
