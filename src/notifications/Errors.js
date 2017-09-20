import React from 'react'
import PropTypes from 'prop-types'


const Errors = ({ errors }) => (
  <div>
    <ul>
      {errors.map(errors => (
        <li key={errors.time}>{errors.body}</li>
      ))}
    </ul>
  </div>
)

Errors.propTypes = {
  errors: PropTypes.arrayOf(
      PropTypes.shape({
        body: PropTypes.string,
        time: PropTypes.date,
      })),
}

export default Errors
