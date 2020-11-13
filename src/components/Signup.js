import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import * as actions from "../actions";
import AuthField from "./AuthField";

const FIELDS = {
  email: "email",
  password: "password",
  secondPassword: "secondPassword"
};
function Signup({ handleSubmit, signupUser, history }) {
  const addUSer = formValues => {
    signupUser(formValues, history);
  };
  return (
    <form onSubmit={handleSubmit(addUSer)}>
      <div className="row justify-content-md-center">
        <h1>Inscription</h1>
      </div>
      <Field
        name={FIELDS.email}
        component={AuthField}
        type="text"
        label="email"
      />
      <Field
        name={FIELDS.password}
        component={AuthField}
        type="password"
        label="Mot de passe"
      />
      <Field
        name={FIELDS.secondPassword}
        component={AuthField}
        type="password"
        label="Mot de passe (répétez)"
      />
      <div className="row justify-content-md-center">
        <button type="submit" className="btn btn-primary btn-raised">
          Inscription
        </button>
      </div>
    </form>
  );
}

const signupForm = reduxForm({
  form: "SignupForm",
})(Signup);

export default connect(null, actions)(signupForm);