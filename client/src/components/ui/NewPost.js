import React, { Component  } from 'react';
import Form from './Form';
import axios from 'axios';
class NewPost extends Component {
  getStyles() {
    return {
      content: {
        width: '100%',
        maxWidth: '600px',
        margin: '30px auto',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      title: {
        fontSize: '1.2em',
        textAlign: 'center',
        paddingTop: '20px'
      }
    };
  }
  newPost(data){
    //axios 传统上我们认为他就是发ajax请求的，类似 $.ajax()
    // axios 就是用来发 http 请求的
    axios.post('http://localhost:3000/posts',data)  //POST /posts according to REST api structure
                                                    //例如把一篇博客当做一个resource ,资源
                                                    //GET /posts         列出所有博客
                                                    // PUT /posts/:post_id   更新一篇博客

                                                    //DELETE /posts/:post_id  删除一篇博客
                                                    //GET /posts/:posts_id    打开一篇博客

                                                    //REST架构有两大优势
                                                    // 1.请求的格式符合正常用户思维
                                                    //2.最大程度的尊重了 http verb 设计者的原始意图
    .then(res =>{
      console.log(res.data.message);
      this.context.router.push('/');
    })
  }
  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.content}>
        <div style={styles.title}>写文章</div>
        <Form newPost={this.newPost.bind(this)} />
      </div>
    );
  }
}
NewPost.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default NewPost;
