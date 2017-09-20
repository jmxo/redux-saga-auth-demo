import { CLIENT_SET, CLIENT_UNSET } from './constants'

export const setClient = token => ({
  type: CLIENT_SET,
  token,
})

export const unsetClient = () => ({
  type: CLIENT_UNSET,
})
