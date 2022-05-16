import React from "react";
import styled, { css } from "styled-components";

const StyledCard = styled.div`
  position: relative;
  .Card-image {
    height: 400px;
    width: 100%;
    border-radius: 8px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }
  .CardContent {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    width: calc(100% - 72px);
    bottom: 0;
    border-radius: 20px;
    background-color: white;
    padding: 20px;
    z-index: 10;
    .CardTop {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
    }
    .CardUser {
      display: flex;
      align-items: center;
      column-gap: 12px;

      img {
        width: 30px;
        height: 30px;
        border-radius: 100rem;
        object-fit: cover;
        flex-shrink: 0;
      }
      span {
        font-size: 16px;
        font-weight: 300;
        color: #333;
        /* color: ${(props) => props.theme.orange}; */
      }
    }
    .CardMeta {
      display: flex;
      align-items: center;
      column-gap: 10px;
    }
    .CardFooter {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .card-title {
        font-size: 18px;
        font-weight: 500;
        /* thằng theme này nhận bên fill app.js */

        color: black;
      }
      .CardAmount {
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
      }
    }
  }
`;
// style component css
// const StyledCard = styled.div`
//   position: relative;
//   width: auto;
// `;

const Card = (props) => {
  console.log("🚀 ~ file: Card.js ~ line 100 ~ Card ~ props", props);
  return (
    <StyledCard secondary={props.secondary}>
      <div className="Card-image">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1200x900&vertical=top"
          alt=""
        />
      </div>
      <div className="CardContent">
        <div className="CardTop">
          <div className="CardUser">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
              className="UserAvatar"
            />
            <span>@zndrson</span>
          </div>
          <div className="">
            <img src="/coolicon.svg" alt="" />
            256
          </div>
        </div>
        <div className="CardFooter">
          <h3 className="card-title">Cosmic Perspective</h3>
          <span
            className="CardAmount"
            secondary={props.secondary}
            fontSize="22px"
          >
            12,000 PSL
          </span>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
