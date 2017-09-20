import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import client from './client/reducer'

const IndexReducer = combineReducers({
  client,
  form,
})

export default IndexReducer
