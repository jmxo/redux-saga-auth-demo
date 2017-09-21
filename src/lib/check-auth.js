import { setClient } from '../client/actions'

function checkAuthorization (dispatch) {
  const storedToken = localStorage.getItem('token')
  if (storedToken) {
    const token = JSON.parse(storedToken)

    const createdDate = new Date(token.created)
    const created = Math.round(createdDate.getTime() / 1000)
    const ttl = 1209600
    const expiry = created + ttl

    if (created > expiry) return false

    // otherwise, dispatch the token to our setClient action
    // which will update our redux state with the token and return true
    dispatch(setClient(token))
    return true
  }

  return false
}

export function checkIndexAuthorization ({ dispatch }) {
  return (nextState, replace, next) => {
    // If we pass the authentication check, go to widgets
    if (checkAuthorization(dispatch)) {
      replace('widgets')
      return next()
    }
     // Otherwise go to login
    replace('login')
    return next()
  }
}

export function checkWidgetAuthorization ({ dispatch, getState }) {
  return (nextState, replace, next) => {
    const client = getState().client

    // is it defined and does it have a token? good, go ahead to widgets
    if (client && client.token) return next()

    // not set yet?  Let's try and set it and if so, go ahead to widgets
    if (checkAuthorization(dispatch)) return next()

    // nope?  okay back to login ya go.
    replace('login')
    return next()
  }
}
