import React from 'react'
import { withFormik } from 'formik'

const App = ({ values, handleChange }) => (
  <div>
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={values.email}
      onChange={handleChange}
    />
  </div>
)

const FormikApp = withFormik({
  mapPropsToValues() {
    return {
      email: 'test email'
    }
  }
})(App)

export default FormikApp
