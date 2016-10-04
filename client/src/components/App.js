import React, { Component, PropTypes } from 'react';
import PostList from './PostList';

export default class App extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div>
         <PostList />
      </div>
    )
  }

};
