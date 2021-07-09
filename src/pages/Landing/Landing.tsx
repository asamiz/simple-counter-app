import "./styles.css";
import { useHistory } from "react-router-dom";
import { Button } from "../../components";

function Landing() {
  const history = useHistory();
  function handleClick() {
    history.push("/home");
  }
  return (
    <div className={"landing-container"}>
      <div className={"landing-left-view"}>
        <h1 className={"landing-header"}>{"Simple counter app"}</h1>
        <p className={"landing-body"}>
          {
            "A simple counter app using developed using React framework which user can use to change the value of the counter and close the web app to open the mobile app and mobile app will add the add the counter value to a counter inside the mobile app and preserve this value even the app is closed!"
          }
        </p>
      </div>
      <div className={"landing-right-view"}>
        <h3 className={"landing-bot-view-text"}>
          {"Click here to go to the counter page 👇"}
        </h3>
        <Button
          onClick={handleClick}
          title={"Counter Page"}
          testId={"counter-page-btn"}
        />
      </div>
    </div>
  );
}

export default Landing;
