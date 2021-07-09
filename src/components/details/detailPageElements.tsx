import styled from "styled-components";
import Background from "../../assets/images/backgroundImage_01.jpg";

export const BookDetailsContainer = styled.div`
  min-height: 100vh;
  background-image: url(${Background});
  background-size: cover;
`;

export const ContainerOverlay = styled.div`
  z-index: 2;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-items: center;
  background: linear-gradient(180deg, rgba(150, 150, 150, 0.75) 0, #1d1d1d);

  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

export const BookCover = styled.img`
  width: 300px;
  height: 400px;
  margin-top: 6rem;
  margin-left: 10rem;
  border: 5px solid white;

  @media screen and (max-width: 450px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const BookInfo = styled.div`
  margin-top: 6rem;
  margin-left: 2rem;
  max-width: 600px;

  @media screen and (max-width: 450px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    width: 300px;
  }
`;

export const BookTitle = styled.h1`
  color: ivory;
  font-size: xx-large;
  margin-top: 0;

  p {
    font-size: 16px;
    margin-top: -2px;
  }
`;

export const BookDetailInfo = styled.div`
  font-size: 16px;
  margin-top: -2px;
  display: flex;
  justify-content: flex-start;
`;

export const BookAuthor = styled.div`
  font-weight: 700;
`;

export const BookYear = styled.div`
  margin-left: 10px;
  font-weight: 500;
`;

export const BookDescription = styled.p`
  color: white;

  @media screen and (max-width: 450px) {
    overflow-y: scroll;
  }
`;
