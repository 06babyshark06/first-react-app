import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .min(10, "Too Short!")
    .required("Required")
    .matches(phoneRegExp, "Phone number is not valid"),
  email: Yup.string().email("Invalid email").required("Required"),
  event: Yup.string().required("Required"),
});

export const ValidationSchemaExample = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        name: "",
        phone: "",
        email: "",
        event: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values));
        setSubmitting(false);
        console.log(values);
      }}
    >
      {({ values, errors, touched, isSubmitting }) => (
        <Form>
          <label htmlFor="name">Name</label>
          <Field name="name" placeholder="Enter a name" />
          {errors.name && touched.name ? <div>{errors.name}</div> : null}
          <label htmlFor="phone">Phone</label>
          <Field name="phone" placeholder="Enter your phone number" />
          {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
          <label htmlFor="email" placeholder="Enter your email">
            Email
          </label>
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <Field component="select" id="event" name="event" multiple={false}>
            <option value="">Select...</option>
            <option value="event1">Event 1</option>
            <option value="event2">Event 2</option>
            <option value="event2">Event 3</option>
          </Field>
          {errors.event && touched.event ? <div>{errors.event}</div> : null}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">Detail</p>
              <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">
                {values.name},{values.phone},{values.email},{values.event}
                <a href="#">@bulmaio</a>. <a href="#">#css</a>{" "}
                <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">
                Save
              </a>
              <a href="#" class="card-footer-item">
                Edit
              </a>
              <a href="#" class="card-footer-item">
                Delete
              </a>
            </footer>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);
