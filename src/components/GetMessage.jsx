import { useState } from "react";
import { fetchGuest } from "./api/request";
//import
const COHORT_NAME = "2302-acc-et-web-pt-a";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

/////posts/POST_ID/messages/////GET///////////////////////
//////This endpoint will GET message for a post whose _id is equal to POST_ID.///

const getMessage = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/posts/5e8929ddd439160017553e06/messages`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result);
    console.log("got the message");
    return result;
  } catch (err) {
    console.error(err);
  }
};
