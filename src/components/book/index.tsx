import React from "react";
import { IBook } from "../../models/book";
import {
  BookCard,
  BookTitle,
  BookCardAuthor,
  BookCardYear,
} from "./bookElements";

const Book = ({ book }: { book: IBook }) => {
  return (
    <>
      <BookCard to={{ pathname: `/book/${book.isbn}` }} imageUrl={book.cover}>
        <BookTitle className="title" aria-label="Book Tile">
          {book.title}
        </BookTitle>
        <BookCardYear className="year" aria-label="Book Year">
          {book.year}
        </BookCardYear>
        <BookCardAuthor className="author" aria-label="Author">
          {book.author}
        </BookCardAuthor>
      </BookCard>
    </>
  );
};

export default Book;
