import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_BOOK_BY_ISBN } from "../../graphql/queries";
import { IBook } from "../../models/book";
import { DefaultWrapper } from "../shared/defaultWrapper/DefaultWrapper";
import ErrorPage from "../shared/Error";
import { LoadingSpinner } from "../shared/Loader/LoadingSpinner";
import {
  BookAuthor,
  BookCover,
  BookDescription,
  BookDetailInfo,
  BookDetailsContainer,
  BookInfo,
  BookTitle,
  BookYear,
  ContainerOverlay,
} from "./detailPageElements";

const Details = (props: any) => {
  const isbn = props.match.params["isbn"];
  const { loading, error, data } = useQuery(GET_BOOK_BY_ISBN, {
    variables: { isbn: isbn },
  });
  const [book, setBook] = useState<IBook | null>(null);
  useEffect(() => {
    if (data) {
      setBook(data.book);
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
  return (
    <>
      {book && (
        <BookDetailsContainer>
          <ContainerOverlay>
            <BookCover src={book.cover} />
            <BookInfo>
              <BookTitle aria-label="Book title">{book.title}</BookTitle>
              <BookDetailInfo>
                <BookAuthor aria-label="Book author">{book.author}</BookAuthor>
                <BookYear aria-label="Book published year">
                  {book.year}
                </BookYear>
              </BookDetailInfo>
              <BookDescription aria-label="Book description">
                {book.description}
              </BookDescription>
            </BookInfo>
          </ContainerOverlay>
        </BookDetailsContainer>
      )}
    </>
  );
};

export default Details;
