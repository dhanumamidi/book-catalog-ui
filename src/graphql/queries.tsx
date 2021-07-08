import { gql } from "@apollo/client";

export const GET_ALL_BOOKS = gql`
  {
    books {
      title
      author
      year
      cover
      isbn
    }
  }
`;

export const GET_BOOK_BY_ISBN = gql`
  query Book($isbn: String) {
    book(isbn: $isbn) {
      title
      description
      author
      year
      cover
      isbn
    }
  }
`;
