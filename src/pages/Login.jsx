import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
const COHORT_NAME = "2302-acc-et-web-pt-a";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function Login({ setToken }) {
  const { action } = useParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const [liveToken, setLiveToken] =useState("");
  console.log(action);
  // TODO Sign in with correct username/password combination
  //This route is used for a user to login when they already have an account.
  ///users/login
  
  const login = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          },
        }),
      });
      const result = await response.json();
      console.log(result, "RESULT");
      setToken(result.data.token);
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    await login();
    navigate("/profile");
    console.log("Login form submitted");
  }
  return (
    <div>
      <h1>Log In</h1>
      <AuthForm
        buttonText="Login"
        handleSubmit={handleSubmit}
        password={password}
        setPassword={setPassword}
        username={username}
        setUsername={setUsername}
      />
    </div>
  );
}
