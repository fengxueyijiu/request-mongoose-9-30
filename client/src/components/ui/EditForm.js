import React,{Component} from 'react';
export default class EditForm extends React.Component{
  constructor(props){
    super(props);
    console.log(this)
    this.state = {        //state用到父组件props时 constructor和super必须加上props，否则无法调用
      title: this.props.post.title
    }
  }
  render(){
    return(
      <div>
        {JSON.stringify(this.props.post)}
        <form >
          { console.log(this.props.post.title)}
           <input defaultValue={this.state.title} />   {/* react 表单默认值 */}
        </form>
      </div>
    )
  }
}
