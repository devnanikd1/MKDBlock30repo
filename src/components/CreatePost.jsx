import { useState } from "react";
import { fetchPosts } from "./api/request"
//import
const COHORT_NAME = "2302-acc-et-web-pt-a";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState("");
  return (
    <form>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="price">Price</label>
      <input
        type="text"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <textarea id="description" />
      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <label htmlFor="willDeliver">WillDeliver</label>
      <input
        type="checkbox"
        id="willDeliver"
        value={willDeliver}
        onChange={(e) => setWillDeliver(e.target.value)}
      />
      <button type="submit">Create Post</button>
    </form>
  );
}



/////posts/////GET///////////////////////
/////A request to this endpoint fetches an array of post objects.///



const makePost = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title: "My favorite stuffed animal",
          description:
            "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
          price: "$480.00",
          willDeliver: true,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};



