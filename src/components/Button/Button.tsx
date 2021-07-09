import { IButtonProps } from "../../types";
import "./styles.css";

function Button({ title, onClick, id, testId = "app-btn" }: IButtonProps) {
  return (
    <input
      data-testid={testId}
      className={"btn-container"}
      type={"button"}
      onClick={onClick}
      value={title}
      id={id}
    />
  );
}

export default Button;
