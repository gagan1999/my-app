import React,{Component} from "react";
import './Post.css'
import HeaderComponent from "./HeaderComponent";
import PostListComponent from './PostListComponent'

class App extends Component {
  render() {
    return(
    <>
    <HeaderComponent HeaderValue="MyPosts"></HeaderComponent>
    <PostListComponent></PostListComponent>
    </>
    )
  }
}
export default App