import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_ALL_BOOKS } from "../../graphql/queries";
import Book from "../book";
import { BookCardContainer } from "./dashboardElements";

const Dashboard = () => {
  const { data } = useQuery(GET_ALL_BOOKS);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    if (data) {
      setBooks(data.books);
    }
  }, [data]);

  const bookCards = books.map((book) => <Book book={book} />);
  return (
    <>
      <BookCardContainer>{bookCards}</BookCardContainer>
    </>
  );
};

export default Dashboard;
