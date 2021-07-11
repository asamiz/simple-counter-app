import { useState } from "react";
import "./styles.css";
import { Button } from "../../components";
import { isBrowser } from "react-device-detect";

function Home() {
  const [value, setValue] = useState<number>(0);

  const incrementValue = (): void =>
    setValue((preValue: number) => preValue + 1);

  const decrementValue = (): void =>
    setValue((preValue: number) => preValue - 1);

  const openMobileApp = (): void => {
    if (isBrowser) {
      alert(
        "You can not perform this action on web app, please open from your phone"
      );
      return;
    }
    const url: string = process.env.REACT_APP_MOBILE_BASE_URL! + value;
    window.location.assign(url);
  };

  return (
    <div className={"home-container"} data-testid={"home-container"}>
      <div className={"home-content-container"}>
        <div className={"home-counter-section-container"}>
          <Button
            title={"-"}
            onClick={decrementValue}
            id={"action-btn-home"}
            testId={"action-btn-decrement"}
          />
          <div className={"home-counter-container"}>
            <h1 className={"home-counter"} data-testid={"app-counter"}>
              {value}
            </h1>
          </div>
          <Button
            title={"+"}
            onClick={incrementValue}
            id={"action-btn-home"}
            testId={"action-btn-increment"}
          />
        </div>
        <div className={"home-bot-view"}>
          <h5 className={"home-bot-note"}>
            {
              "Note: When you click the button this will close the app and open the mobile app, make sure you installed the mobile app successfully."
            }
          </h5>
          <Button
            title={"Open Mobile App"}
            onClick={openMobileApp}
            id={"close-btn-home"}
            testId={"close-btn-home"}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
