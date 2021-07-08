import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { GET_BOOK_BY_ISBN } from "../../graphql/queries";
import { IBook } from "../../models/book";
import {
  BookCover,
  BookDescription,
  BookDetailsContainer,
  BookInfo,
  BookTitle,
  ContainerOverlay,
} from "./detailPageElements";

const Details = (props: any) => {
  const isbn = props.match.params["isbn"];
  const { data } = useQuery(GET_BOOK_BY_ISBN, {
    variables: { isbn: isbn },
  });
  const [book, setBook] = useState<IBook | null>(null);
  useEffect(() => {
    if (data) {
      setBook(data.book);
    }
  }, [data]);

  return (
    <>
      {book && (
        <BookDetailsContainer>
          <ContainerOverlay>
            <BookCover src={book.cover} />
            <BookInfo>
              <BookTitle aria-label="Book title">
                {book.title}
                <p>{book.year}</p>
              </BookTitle>
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
