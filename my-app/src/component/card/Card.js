import React from "react";
import styled, { css } from "styled-components";

// style component css
const StyledCard = styled.div`
  position: relative;
  width: auto;
`;

const CardImageWrapper = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const CardContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  width: calc(100% - 72px);
  bottom: 0;
  border-radius: 20px;
  background-color: white;
  padding: 20px;
  z-index: 10;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const UserName = styled.span`
  font-size: 16px;
  font-weight: 300;
  color: #333;
`;
const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;

const CardAmount = styled.span`
  /* nếu có props fontSize thì xài lấy giá trị của nó còn ko có thì lấy 18px */
  font-size: ${(props) => props.fontSize || "18px"};
  font-weight: bold;

  ${(props) =>
    props.secondary &&
    css`
      background: linear-gradient(86.88deg, #20e3b2, #2cccff);
    `};
  ${(props) =>
    !props.secondary &&
    css`
      background: linear-gradient(
        86.88deg,
        #7d6aff 1.38%,
        #ffb86c 64.35%,
        #fc2872 119.91%
      );
    `};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;
const Card = (props) => {
  console.log("🚀 ~ file: Card.js ~ line 100 ~ Card ~ props", props);
  return (
    <StyledCard>
      <CardImageWrapper className="">
        <CardImg
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1200x900&vertical=top"
          alt=""
        />
      </CardImageWrapper>
      <CardContent className="">
        <CardTop className="">
          <CardUser className="">
            <UserAvatar
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
            <UserName>@zndrson</UserName>
          </CardUser>
          <CardMeta className="">
            <img src="/coolicon.svg" alt="" />
            256
          </CardMeta>
        </CardTop>
        <CardFooter className="">
          <CartTitle>Cosmic Perspective</CartTitle>
          <CardAmount secondary={props.secondary} fontSize="22px">
            12,000 PSL
          </CardAmount>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
