import { MockedProvider } from "@apollo/client/testing";
import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter, Route } from "react-router-dom";
import Details from ".";
import { GET_BOOK_BY_ISBN } from "../../graphql/queries";
import { IBook } from "../../models/book";
import { screen } from "@testing-library/react";

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

const mocks = [
  {
    request: {
      query: GET_BOOK_BY_ISBN,
      variables: { isbn: "006170654X" },
    },
    result: {
      data: {
        book: {
          title: "Wench",
          description:
            "Tawawa House in many respects is like any other American resort before the Civil War. Situated in Ohio, this idyllic retreat is particularly nice in the summer when the Southern humidity is too much to bear. The main building, with its luxurious finishes, is loftier than the white cottages that flank it,but then again, the smaller structures are better positioned to catch any breeze that may come off the pond. And they provide more privacy, which best suits the needs of the Southern white men who vacation there every summer with their black, enslaved mistresses. It's their open secret. Lizzie, Reenie, and Sweet are regulars at Tawawa House. They have become friends over the years as they reunite and share developments in their own lives and on their respective plantations. They don't bother too much with questions of freedom, though the resort is situated in free territory-but when truth-telling Mawu comes to the resort and starts talking of running away, things change.",
          author: "Dolen Perkins-Valdez",
          year: 2009,
          cover: "https://covers.openlibrary.org/b/id/9444658-L.jpg",
          isbn: "006170654X",
        },
      },
    },
  },
];

it("render book details with book from mock api", async () => {
  const mockResult: IBook = mocks[0]["result"]["data"]["book"];
  await act(async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter initialEntries={["/book/006170654X"]}>
          <Route exact path="/book/:isbn" component={Details} />
        </MemoryRouter>
      </MockedProvider>,
      container
    );

    await new Promise((resolve) => setTimeout(resolve, 0));
  });

  expect(container.querySelector("h1").textContent).toBe(mockResult.title);
  expect(
    container.querySelector('[aria-label="Book author"]').textContent
  ).toBe(mockResult.author);
  expect(
    parseInt(
      container.querySelector('[aria-label="Book published year"]').textContent
    )
  ).toBe(mockResult.year);
  expect(
    container.querySelector('[aria-label="Book description"]').textContent
  ).toBe(mockResult.description);
});

it("renders error page on error during or from the call", async () => {
  const errorMock = {
    request: {
      query: GET_BOOK_BY_ISBN,
      variables: { isbn: "006170654X" },
    },
    error: new Error("An error occured"),
  };

  await act(async () => {
    render(
      <MockedProvider mocks={[errorMock]} addTypename={false}>
        <MemoryRouter initialEntries={["/book/006170654X"]}>
          <Route exact path="/book/:isbn" component={Details} />
        </MemoryRouter>
      </MockedProvider>,
      container
    );
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

  const errorElement = screen.getByText(/Ooops! Something went wrong!/);
  expect(errorElement).toBeInTheDocument();
});
