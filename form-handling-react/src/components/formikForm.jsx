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
        console.log("Form Submitted:", values);
      }}
    >
      {() => (
        <Form className="rounded flex flex-col justify-self-center p-6 mt-4 bg-yellow-50 shadow-xl">
          <div className=" ">
            
            <label className="">Username:</label>
            <Field
              type="text"
              name="username"
              placeholder="Username"
              className=" border-b-2 border-gray-400 hover:border-gray-300 drop-shadow-black m-2"
            />
            <ErrorMessage name="username" component="p" />
          </div>

          <div>
            <label>Email:</label>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className=" border-b-2 border-gray-400 hover:border-gray-300 drop-shadow-black m-2"
              
            />
            <ErrorMessage name="email" component="p" />
          </div>

          <div>
            <label>Password:</label>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className=" border-b-2 border-gray-400 hover:border-gray-300 drop-shadow-black m-2"

            />
            <ErrorMessage name="password" component="p" />
          </div>
          <div >
            <button type="submit" 
                    className="border-2 border-blue-300 rounded-lg flex justify-self-center p-2 bg-blue-100 hover:bg-blue-200 active:scale-95"
            >
              Submit
            </button>
          </div>

          {submitted && <p>Form submitted successfully!</p>}
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;

