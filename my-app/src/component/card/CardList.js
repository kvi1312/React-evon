import React from "react";
import styled from "styled-components";

const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 100px;
  padding: 30px;
`;
const CardList = (props) => {
  return <StyledCardList>{props.children}</StyledCardList>;
};

export default CardList;
