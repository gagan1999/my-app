import React from "react";
import './Post.css';

function PostComponent(props){
  return (
    <section className="products">
     {props.data.map((post) => (
      <div key={post.id} className="product-card">
        <div className="product-image">
          <img src={`https://picsum.photos/200/300?random=${post.id}`}/>
        </div>
        <hr></hr>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
      </div>
      ))} 
  </section>
  )
}

function HeaderComponent(props){
  return (
     <h1 style={{textAlign:"center"}}>{props.HeaderValue}</h1>
  )
}

class PostList extends React.Component {
  state = {
      posts: []
  }
  
  componentDidMount() {
    let posts = localStorage.getItem("posts");
    if(posts){
      posts = JSON.parse(posts);
      this.setState({ posts: posts });
    }else{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then(postsList => {
          this.setState({ posts: postsList });
          localStorage.setItem("posts", JSON.stringify(postsList));
      });
    }
  }
  
  render() {
      return (
        <>
        <HeaderComponent HeaderValue="MyPosts"></HeaderComponent>
        <PostComponent data = {this.state.posts}></PostComponent>
          </>
      )
  }
}

export default PostList