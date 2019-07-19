import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import {axiosWithAuth} from './utils/auth'

function RegForm() {
  return (
    <Form>
    <label>Reg</label>
      <Field type="text" name="username" placeholder="username" />
      <Field type="password" name="password" placeholder="Password" />
      <button type='submit'>Submit!</button>
    </Form>
  );
}

const FormikRegForm = withFormik({
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
  handleSubmit (values, { resetForm, setErrors, setSubmitting,formikBag }) {
    
     axiosWithAuth()
        .post("http://localhost:8000/api/register", values)
        .then(res => {
          console.log('here',res); // Data was created successfully and logs to console
         
        })
        .catch(err => {
          console.log(err,'error'); // There was an error creating the data and logs to console
          setSubmitting(false);
        });
    
  }
})(RegForm);

export default FormikRegForm;