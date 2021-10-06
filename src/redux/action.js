import axios from "axios";

export const fetchPosts  = ()  => {   
  return async dispatch => {
      try{
          let posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
                  dispatch({
                    type:"FETCH_POSTS_SUCCESS",
                    payload: posts.data
                  });
        }
        catch(e){
          console.log(e);
        }
      }
}
