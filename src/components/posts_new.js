import React, {Component} from 'react';
import {reduxForm,Field} from 'redux-form';
import {createPost} from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class PostsNew extends Component{
  render(){

    const {handleSubmit} = this.props;
    handleSubmit.bind(this);
    console.log(handleSubmit);
    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create a new post</h3>

        <Field name="title" component={title=>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
        </div>}/>

        <Field name="categories" component={categories=>
        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
        </div>}/>

        <Field name="content" component={content=>
        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content}/>
        </div>}/>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
export default reduxForm({
  form: 'PostNewForm'
})(connect(null,{createPost})(PostsNew));
