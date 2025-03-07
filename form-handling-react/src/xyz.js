import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function FormikForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setSubmitted(true);
        // Simulating form submission
        console.log("Form Submitted:", values);
      }}
    >
      {() => (
        <Form>
          <div>
            <label>Username</label>
            <Field
              type="text"
              name="username"
              placeholder="Username"
            />
            <ErrorMessage name="username" component="p" />
          </div>

          <div>
            <label>Email</label>
            <Field
              type="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage name="email" component="p" />
          </div>

          <div>
            <label>Password</label>
            <Field
              type="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage name="password" component="p" />
          </div>

          <button type="submit">Submit</button>

          {submitted && <p>Form submitted successfully!</p>}
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;

