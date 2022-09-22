import React from "react";
import { Formik, Form } from "formik";

const Signup = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
    >
      {(formik) => {
        <div>
          <h1 className="my-4 font-weight-bold-display-4">SignUp</h1>
          {console.log(formik)}
        </div>;
      }}
    </Formik>
  );
};

export default Signup;
