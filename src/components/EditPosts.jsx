// /posts/POST_ID  This endpoint will edit a post whose _id is equal to POST_ID. 
//The request will be rejected if it is either missing a valid token, 
//or if the user represented by the token is not the user that created the original post.
// You will need to insert a variable into the fetch template literal 
// in order to make the POST_ID dynamic. 
// 5e8d1bd48829fb0017d2233b is just for demonstration.
import { Navigate } from "react-router-dom";
function editPost(post){
Navigate(`/post/{post._id}`)
}

function authorizedPost ({post}){
return(
    <div>
      <h2>Title:</h2> 
      <h2>Description:</h2> 
      <h2>Price:</h2> 
      <h2>Seller:</h2> 
      <h2>Location:</h2> 
    
    <div>
      <br></br>
      <button type="edit" >EDIT</button>
      <button type="delete">DELETE</button>
    </div>
    </div>
)

}