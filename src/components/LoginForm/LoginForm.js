import React, { Component } from "react"
import { Formik } from "formik"
import "./loginform.css"

class LoginForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={values => {
          let errors = {}
          if (!values.email) {
            errors.email = "Required"
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address"
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <div margin="auto">
            <form className="form" onSubmit={handleSubmit}>
              <input
                className="form-input"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <input
                className="form-input"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button
                className="form-submit"
                type="submit"
                disabled={isSubmitting}
              >
                Login
              </button>
            </form>
          </div>
        )}
      </Formik>
    )
  }
}
export default LoginForm
