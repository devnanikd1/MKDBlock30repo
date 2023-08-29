import { useState } from "react";
import AuthForm from "../components/AuthForm";
import { registerUser } from "../api/request";

export default function signup({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  
  //TODO Sign up for an account with username and password
  async function handleSubmit(e) {
    e.preventDefault();
    const user = await registerUser(username, password);
    console.log(user, token);
    setToken(user, token);
  }
  return (
    <div>
      <h1>Register</h1>
      <AuthForm
        buttonText="Register"
        handleSubmit={handleSubmit}
        password={password}
        setPassword={setPassword}
        username={username}
        setUsername={setUsername}
      />
    </div>
  );
}
