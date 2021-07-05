import { IButtonProps } from "../../types";
import "./styles.css";

function Button({ title, onClick, containerStyle }: IButtonProps) {
  return (
    <input
      className={"btn-container"}
      type={"button"}
      onClick={onClick}
      style={containerStyle}
      value={title}
    />
  );
}

export default Button;
