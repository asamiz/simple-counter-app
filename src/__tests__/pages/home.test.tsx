import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { HomePage } from "../../pages/";

describe("Test HomePage functionalities", () => {
  test("Page renders correctly", () => {
    render(<HomePage />);
    const page = screen.getByTestId("app-counter");
    expect(page).toBeInTheDocument();
  });

  test("Counter has initial value of 0", () => {
    const { getByTestId } = render(<HomePage />);
    const counter = getByTestId("app-counter");
    expect(counter.textContent).toBe("0");
  });

  test("Counter value is incremented when user presses on increment button", () => {
    const { getByTestId } = render(<HomePage />);
    const incrementButton = getByTestId("action-btn-increment");
    const counter = getByTestId("app-counter");
    fireEvent.click(incrementButton);
    expect(counter.textContent).toBe("1");
  });

  test("Counter value is decremented when user presses on decrement button", () => {
    const { getByTestId } = render(<HomePage />);
    const incrementButton = getByTestId("action-btn-decrement");
    const counter = getByTestId("app-counter");
    fireEvent.click(incrementButton);
    expect(counter.textContent).toBe("-1");
  });

  test("App alerts the user when he / sher tries to open the mobile app from the web application", () => {
    global.alert = jest.fn();
    const { getByTestId } = render(<HomePage />);
    const closeButton = getByTestId("close-btn-home");
    fireEvent.click(closeButton);
    expect(global.alert).toBeCalled();
  });
});
