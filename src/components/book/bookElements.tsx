import { Link } from "react-router-dom";
import styled from "styled-components";

export const BookCard = styled(Link)<{ imageurl: any }>`
  position: relative;
  overflow: hidden;
  width: 250px;
  height: 333px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 50px 2rem;
  border: 5px solid #1a163f;
  border-radius: 2px;
  box-shadow: 10px 10px 10px #111;
  transition: background-color 0.25s linear;
  cursor: pointer;
  background-image: url(${(props) => props.imageurl});
  background-size: cover;
  background-blend-mode: color;
  text-decoration: none;

  &:hover {
    border-color: #01bf71;
    background-color: rgba(0, 0, 0, 0.8);
    .title,
    .year,
    .author {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const BookCardDetails = styled.div`
  opacity: 0;
  font-size: 15px;
  color: #fff;
  transition: transform 0.24s ease-in $delay, opacity 0.3s linear;
`;

export const BookTitle = styled(BookCardDetails)`
  margin-top: 50px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: xx-large;
  color: white;
`;

export const BookCardYear = styled(BookCardDetails)``;

export const BookCardAuthor = styled(BookCardDetails)``;

export const BookDescription = styled.div`
  max-height: 200px;
  padding: 15px 10px;
  font-size: 17px;
  color: #fff;
  opacity: 0;
  transition: transform 0.31s ease-in $delay, opacity 0.3s linear;
`;
