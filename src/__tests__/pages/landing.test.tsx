import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { LandingPage } from "../../pages";
import { App } from "../../App/";

describe("Test landing page functionality", () => {
  test("Page is rendered correctly", () => {
    render(<LandingPage />);
    const page = screen.getByText(/Click here to go to the counter page 👇/i);
    expect(page).toBeInTheDocument();
  });

  test("Page navigates correctly to the counter page", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(
      screen.getByText(/Click here to go to the counter page 👇/)
    ).toBeInTheDocument();
    const leftClick = { button: 0 };
    userEvent.click(screen.getByTestId("counter-page-btn"), leftClick);
    expect(screen.getByTestId("home-container")).toBeInTheDocument();
  });
});
