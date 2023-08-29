import { useState } from "react";
//import {CreatePost} from "./CreatePost"
import { fetchPosts } from "../api/request";
const COHORT_NAME = "2302-acc-et-web-pt-a";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
//This route is used to grab an already logged in user's relevant data. It includes messages they have received


export default function UserProfile({ guest, buttonText, handleSubmit }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  console.log(guest, "NOPE");
  const myData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      console.log(result, "fetchguest ");
      return result;
    } catch (err) {
      console.error(err);
    }
  };
   
  return(
    <div>
      <h1>WELCOME </h1> 
      </div>
    )
}
