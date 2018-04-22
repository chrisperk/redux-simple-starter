/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';

function renderField(field) {
  const {
    meta: { touched, error },
    name,
    label,
    type,
    input,
  } = field;
  const className = `form-group ${touched && error ? 'has-danger' : ''}`;

  return (
    <div className={className}>
      <label htmlFor={name}>
        {label}
        <input
          className="form-control"
          name={name}
          id={name}
          type={type}
          {...input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
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

const PostsCreate = (props) => {
  const { handleSubmit } = props;

  function onSubmit(values) {
    props.createPost(values, () => {
      props.history.push('/');
    });
  }

  return (
    // Use redux-form's handleSubmit method and pass our onSubmit function to it as param.
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
      <Link className="btn btn-danger" to="/">
        Cancel
      </Link>
    </form>
  );
};

PostsCreate.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default reduxForm({
  validate,
  form: 'PostsCreateForm',
})(connect(null, { createPost })(PostsCreate));
