import React, { PropTypes } from 'react';
import axios from 'axios';
class ShowPost extends React.Component {
  constructor(){
    super();
    this.state={
      data:{}
    }
  }
  componentDidMount(){
    let id = this.props.params.id;
    let address =`http://localhost:3000/post/${id}`;
    axios.get(address).then(res =>{
      this.setState({data:res.data.post})
      console.log(this.state.data)
    })
  }
  render () {
    return(
      <div>
      题目：  { this.state.data.title } <br />
      类别：  { this.state.data.category } <br />
      内容：  { this.state.data.content }
      </div>
    )
  }
}

export default ShowPost;
