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
  mapPropsToValues({ email }) {
    return {
      email: email || ''
    }
  }
})(App)

export default FormikApp
