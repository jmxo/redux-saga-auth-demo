import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import client from './client/reducer'
import signup from './signup/reducer'
import login from './login/reducer'

const IndexReducer = combineReducers({
  client,
  signup,
  login,
  form,
})

export default IndexReducer
