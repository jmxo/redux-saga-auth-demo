import { SIGNUP_REQUESTING } from './constants'

const signupRequest = ({ email, password }) => ({
  type: SIGNUP_REQUESTING,
  email,
  password,
})

export default signupRequest
