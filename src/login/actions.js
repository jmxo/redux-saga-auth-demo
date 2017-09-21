import {
  LOGIN_REQUESTING,
} from './constants'

const loginRequest = ({ email, password }) => ({
  type: LOGIN_REQUESTING,
  email,
  password,
})

export default loginRequest
