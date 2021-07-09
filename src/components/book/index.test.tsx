import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import Book from ".";
import { IBook } from "../../models/book";

let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const fakeBook: IBook = {
  title: "Rich dad, poor dad",
  author: "Robert T. Kiyosaki",
  year: 1990,
  description:
    "Argues that a good education and a secure job are not guarantees for financial success, and describes six guidelines for making money work for oneself. ",
  cover:
    "https://ia801605.us.archive.org/BookReader/BookReaderPreview.php?id=richdadpoordadwh00kiyo_0&itemPath=%2F4%2Fitems%2Frichdadpoordadwh00kiyo_0&server=ia801605.us.archive.org&page=cover_w500_h500.jpg",
  isbn: "0964385619",
};

it("renders with fake book", () => {
  act(() => {
    render(
      <MemoryRouter>
        <Book book={fakeBook} />
      </MemoryRouter>,
      container
    );
  });
  expect(container.querySelector(".title")?.textContent).toBe(fakeBook.title);
  expect(parseInt(container.querySelector(".year")?.textContent)).toBe(
    fakeBook.year
  );
  expect(container.querySelector(".author")?.textContent).toBe(fakeBook.author);
});

it("routes to details page when clicked", () => {
  act(() => {
    render(
      <MemoryRouter>
        <Book book={fakeBook} />
      </MemoryRouter>,
      container
    );
  });
});
