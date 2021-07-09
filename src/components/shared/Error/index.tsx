import React from "react";
import styled from "styled-components";
import { DefaultWrapper } from "../defaultWrapper/DefaultWrapper";

const Error = styled.div`
  color: #991f1f;
  align-items: center;
  margin: auto;
  font-size: 30px;
  font-weight: 500;
`;

const ErrorPage = () => {
  return (
    <>
      <DefaultWrapper>
        <Error>Ooops! Something went wrong!</Error>
      </DefaultWrapper>
    </>
  );
};

export default ErrorPage;
