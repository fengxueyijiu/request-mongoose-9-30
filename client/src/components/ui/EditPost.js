import React, { Component } from 'react';
import axios from 'axios';
import Settings from '../../settings';
import EditForm from './EditForm';
import isEmpty from 'lodash/fp/isEmpty';
export default class EditPost extends Component {
  constructor() {
    super();
    this.state = {
      post: {}
    }
  }
  componentDidMount() {
    var id = this.props.params.id;

    axios.get(`${Settings.host}/post/${id}`).then(res => {
      this.setState({
        post:res.data.post
         // 10s 后得到 this.state.post 不为空
      })
      console.log(res)
    })
  }

  render(){
    return(

      <div>

        { !isEmpty(this.state.post) ? <EditForm post={this.state.post} />: "plz wait..."}
      </div>
    )
  }

}
