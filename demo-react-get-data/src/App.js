import React from 'react';
export default class App extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    var data={};
     data.title=this.refs.title.value;
     data.content=this.refs.content.value;
    console.log(data)
    // let title = this.refs.title.value;
    // let content = this.refs.content.value;
    // let  data={title,content};
    // console.log(data)
  }
  render(){
    return(
      <div>
       <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" ref="title" /> <br />
        <input type="text" ref="content" /> <br />
        <input type="submit"  />
       </form>
      </div>
    )
  }
}
