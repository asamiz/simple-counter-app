import { useState } from "react";
import "./styles.css";
import { Button } from "../../components";

function Home() {
  const [value, setValue] = useState<number>(0);

  const incrementValue = (): void =>
    setValue((preValue: number) => preValue + 1);

  const decrementValue = (): void =>
    setValue((preValue: number) => preValue - 1);

  return (
    <div className={"home-container"}>
      <div className={"home-content-container"}>
        <Button title={"-"} onClick={decrementValue} id={"action-btn-home"} />
        <div className={"home-counter-container"}>
          <h1 className={"home-counter"}>{value}</h1>
        </div>
        <Button title={"+"} onClick={incrementValue} id={"action-btn-home"} />
      </div>
      <div className={"home-bot-view"}>
        <h5 className={"home-bot-note"}>
          {
            "Note: When you click the button this will close the app and open the mobile app, make sure you installed the mobile app successfully."
          }
        </h5>
        <Button title={"Close"} onClick={() => {}} id={"close-btn-home"} />
      </div>
    </div>
  );
}

export default Home;
