import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_ALL_BOOKS } from "../../graphql/queries";
import { IBook } from "../../models/book";
import Book from "../book";
import { DefaultWrapper } from "../shared/defaultWrapper/DefaultWrapper";
import ErrorPage from "../shared/Error";
import { LoadingSpinner } from "../shared/Loader/LoadingSpinner";
import { BookCardContainer } from "./dashboardElements";

const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_ALL_BOOKS);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    if (data) {
      setBooks(data.books);
    }
  }, [data]);

  if (loading) {
    return (
      <>
        <DefaultWrapper>
          <LoadingSpinner />
        </DefaultWrapper>
      </>
    );
  }
  if (error) {
    return (
      <>
        <ErrorPage />
      </>
    );
  }
  const bookCards = books.map((book: IBook) => (
    <Book book={book} key={book.isbn} />
  ));
  return (
    <>
      <BookCardContainer>{bookCards}</BookCardContainer>
    </>
  );
};

export default Dashboard;
