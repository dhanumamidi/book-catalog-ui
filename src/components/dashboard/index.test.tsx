import { render, unmountComponentAtNode } from "react-dom";
import { MockedProvider } from "@apollo/client/testing";
import Dashboard from ".";
import { GET_ALL_BOOKS } from "../../graphql/queries";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
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
      query: GET_ALL_BOOKS,
    },
    result: {
      data: {
        books: [
          {
            title: "Welcome to Temptation",
            author: "Jennifer Crusie",
            year: 1996,
            cover: "https://covers.openlibrary.org/b/id/6606877-L.jpg",
            isbn: "0312932804",
          },
          {
            title: "Altered",
            author: "Jennifer Rush",
            year: 2013,
            cover: "https://covers.openlibrary.org/b/id/9524767-L.jpg",
            isbn: "0316197084",
          },
        ],
      },
    },
  },
];

it("renders all the books fetched from mock", async () => {
  await act(async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter>
          <Dashboard />
        </MemoryRouter>
      </MockedProvider>,
      container
    );
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

  expect(container.querySelectorAll(".title").length).toBe(2);
});

it("renders error page on error during or from the call", async () => {
  const errorMock = {
    request: {
      query: GET_ALL_BOOKS,
    },
    error: new Error("An error occured"),
  };

  await act(async () => {
    render(
      <MockedProvider mocks={[errorMock]} addTypename={false}>
        <MemoryRouter>
          <Dashboard />
        </MemoryRouter>
      </MockedProvider>,
      container
    );
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

  const errorElement = screen.getByText(/Ooops! Something went wrong!/);
  expect(errorElement).toBeInTheDocument();
});
