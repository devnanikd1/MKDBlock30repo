import { useState } from "react";
import { fetchGuest } from "./api/request"
//import
const COHORT_NAME = "2302-acc-et-web-pt-a";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

/////posts/POST_ID/messages/////POST///////////////////////
//////This endpoint will create a new message for a post whose _id is equal to POST_ID.///

const postMessage = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts/5e8929ddd439160017553e06/messages`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          message: {
            content: "Do you still have this?  Would you take $10 less?"
          }
        })
      });
      const result = await response.json();
      console.log(result);
      console.log("message posted");
      return result
    } catch (err) {
      console.error(err);
    }
}