import { useState } from "react";
import SignIn from "../components/SignIn";

const LoggerPage = (props) => {
  const [signMethod, setSignMethod] = useState("signin");

  if (signMethod === "signin") {
    return (
      <div>
        <SignIn />
      </div>
    );
  }
};

export default LoggerPage;
