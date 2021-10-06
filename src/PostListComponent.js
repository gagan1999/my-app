import React,{Component} from "react";
import { connect } from "react-redux";
import './Post.css'
import Post from "./PostItemComponent";

class PostListComponent extends Component {
    render() {
        return (
          <section className="products">
                {this.props.posts.map((post) => <Post key={post.id} post={post} />)}
          </section>
        );
    }
  }
  
  const mapStateToProps = (state) => {
    return {
        posts: state
    }
  }
  export default connect(mapStateToProps)(PostListComponent);