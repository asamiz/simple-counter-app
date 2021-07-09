import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "../../components";

describe("Test button component functionality", () => {
  test("Component renders with the correct passed title", () => {
    const { getByTestId } = render(
      <Button title={"Click me!"} onClick={() => {}} id={"test-id"} />
    );
    const button = getByTestId("app-btn");
    expect(button).toHaveDisplayValue("Click me!");
  });

  test("Component onClick handler to be called", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Button title={"Click me!"} onClick={onClick} id={"test-id"} />
    );
    const button = getByTestId("app-btn");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  test("Component renders with the correct passed id", () => {
    const { container } = render(
      <Button title={"Click me!"} onClick={() => {}} id={"test-id"} />
    );
    const _button = container.querySelector("#test-id");
    expect(_button).not.toBeNull();
  });
});
