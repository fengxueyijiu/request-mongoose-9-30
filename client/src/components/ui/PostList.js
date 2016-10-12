import React, { Component } from 'react';
import map from 'lodash/fp/map';
import axios from 'axios';
import {Link} from 'react-router';
import Settings from '../../settings';
import filter from 'lodash/fp/filter';
export default class PostList extends Component {
  constructor() {
    super();
    this.state={
      posts: []
    };
  }
  getStyles() {
    return {
      content: {
        position: 'relative',
        width: '100%',
        height: '60px',
        maxWidth: '600px',
        margin: '20px auto',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '16px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
        minHeight: '80px'
      },
      title: {
        fontSize: '1.2em'
      },
      link:{
        color:'#fff',
        display:'block',
        width:'5em',
        height:'2em',
        backgroundColor:'#00bcd4',
        textDecoration:'none',
        lineHeight:'2em',
        borderRadius:'5px',
        textAlign:'center',
        margin:'10px auto'
      },
      actions:{
      position:'absolute',
      right:'16px',
      bottom:'16px'
      }

    }
  }
  componentWillMount() {
    //  Promise
    axios.get('http://localhost:3000/posts').then(res => {
      console.log('axios');
      this.setState({
        posts: res.data.posts
      });
      console.log(res.data.posts);
    });
  }
  filterPosts(id) {
    const posts = filter((post) => {
      console.log(post._id)
      return post._id !== id
    }, this.state.posts);

    this.setState({ posts: posts })
  }
  handleClick(value){
    // REST
    console.log(value);
    console.log("----handleClick!!!");
    axios.delete(`${Settings.host}/posts/${value}`).then(res => {
      console.log('deleted!');
      console.log(res.data);
      console.log('filering..!');
      this.filterPosts(value);
    })
  }
  render() {
    const styles = this.getStyles();
    const postList = map((post) => {

      return (
        <div style={styles.content} key={post._id}>
          <div style={styles.title}>{post.title}</div>
          <div style={styles.actions}>
            <Link to={`/posts/${post._id}`} style={styles.link}>查看</Link>
            <Link to={`/posts/${post._id}/edit`} style={styles.link}>编辑</Link>
            <Link to={``} style={styles.link} onClick={this.handleClick.bind(this, post._id)}>删除</Link>
          </div>
        </div>
      )
    }, this.state.posts);
    return(
      <div>
        <Link to="/write" style={styles.link}>写文章</Link>
        {postList}
      </div>
    );
  }
}
