import React, { Component } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';

class PostsCreate extends Component {
  render() {
    return (
      <form>
        <Field
          name="title"
          component={}
        />
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsCreateForm',
})(PostsCreate);
