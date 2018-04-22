import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';

function renderField(field) {
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
        {field.meta.error}
      </label>
    </div>
  );
}

function validate(values) {
  // Create empty object to append errors to.
  const errors = {};

  // Validate the inputs from values param.
  if (!values.title || values.title.length < 3) {
    errors.title = 'Enter a title that is at least 3 characters!';
  }

  if (!values.categories) {
    errors.categories = 'Enter some categories!';
  }

  if (!values.content) {
    errors.content = 'Enter some content!';
  }

  // If errors object is empty, the form is fine to submit.
  // If errors has any properties, redux-form assumes form is invalid and will not submit.
  return errors;
}

function onSubmit(values) {
  console.log(values);
}

const PostsCreate = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field
        label="Title"
        type="text"
        name="title"
        component={renderField}
      />
      <Field
        label="Categories"
        type="text"
        name="categories"
        component={renderField}
      />
      <Field
        label="Post Content"
        type="text"
        name="content"
        component={renderField}
      />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

PostsCreate.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  validate,
  form: 'PostsCreateForm',
})(PostsCreate);
