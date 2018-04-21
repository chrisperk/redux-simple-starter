import React, { Component } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';

class PostsCreate extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label htmlFor={field.name}>
          {field.label}
          <input
            className="form-control"
            name={field.name}
            id={field.name}
            type={field.type}
            {...field.input}
          />
        </label>
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field
          label="Title"
          type="text"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Tags"
          type="text"
          name="tags"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          type="text"
          name="content"
          component={this.renderField}
        />
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsCreateForm',
})(PostsCreate);
