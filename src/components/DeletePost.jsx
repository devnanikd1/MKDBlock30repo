import { useState } from "react";
import { fetchGuest } from "./api/request"
//import
const COHORT_NAME = "2302-acc-et-web-pt-a";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;


//posts/POST_ID////DELETE Post///////////////////


const deletePost = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts/5e8d1bd48829fb0017d2233b`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
  