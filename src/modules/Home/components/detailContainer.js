import React from "react";
import styled from "styled-components";

const DetailContainer = props => {
  const toggle = event => {
    event.stopPropagation();
    props.toggle(false);
  };

  return (
    <Container
      onClick={toggle}
      onMouseMove={event => event.stopPropagation()}
      show={props.show}
    >
      {props.children}
    </Container>
  );
};
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  display: ${props => (props.show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(200, 200, 200, 0.8);
`;
export default DetailContainer;
