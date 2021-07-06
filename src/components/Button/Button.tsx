import { IButtonProps } from "../../types";
import "./styles.css";

function Button({ title, onClick, id }: IButtonProps) {
  return (
    <input
      className={"btn-container"}
      type={"button"}
      onClick={onClick}
      value={title}
      id={id}
    />
  );
}

export default Button;
