import React, { Component } from 'react';

import { connect } from 'react-redux';

class PostItemComponent extends Component {
  render() {
  return (
   <div className="product-card">
      <div className="product-image">
          <img alt="" src={`https://picsum.photos/200/300?random=${this.props.post.id}`}/>
      </div>
      <hr></hr>
        <h4>{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <button>Edit</button>
        <button onClick={()=>this.props.dispatch( {type:'DELETE_POST',id:this.props.post.id} )}>Delete</button>
   </div>
  );
 }
}
export default connect()(PostItemComponent);