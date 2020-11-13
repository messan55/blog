import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../actions";
import AuthField from "./AuthField";

function LoginPage({ signinUser, history, handleSubmit }) {

  const addUSer = (credentials) => {
    signinUser(credentials, history);
  };

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit(addUSer)}>
        <div className="row">
          <h3>Connexion</h3>
          <div className="input-field col s6">
            <Field
              className="validate"
              name="email"
              type="text"
              component={AuthField}
              label="email"
            />
            <Field
              className="validate"
              name="password"
              type="password"
              component={AuthField}
              label="Password"
          />
          <button type="submit" className="green btn-flat white-text">
            Log In
          </button>
          </div>
        </div> 
      </form>
    </div>
  )
};

const loginForm = reduxForm({
  form: 'authForm',
})(LoginPage);

export default connect(null, actions)(loginForm);
