import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
function LoginForm() {
  return (
    <Form>
      <Field type="text" name="username" placeholder="Username" />
      <Field type="password" name="password" placeholder="Password" />
      <button type="submit">Submit!</button>
    </Form>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
//======VALIDATION SCHEMA==========
validationSchema: Yup.object().shape({
    username: Yup.string()
      .required(),
    password: Yup.string()
     
      .required()
  }),
  //======END VALIDATION SCHEMA==========
  handleSubmit(values, formikBag) {
    const url =
      "http://localhost:8000/api/login";
    axios
      .post(url, values)
      .then(response => {
          console.log('here is token', response.data)
        localStorage.setItem("token", response.data.token);
        formikBag.props.history.push("/user");
      })
      .catch(e => {
        console.log(e);
      });  const token = localStorage.getItem("token");
      console.log(token)
  }
})(LoginForm);

export default FormikLoginForm;