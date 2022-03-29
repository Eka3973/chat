import {createAction} from "redux-actions"

export const setRegistrationValue = createAction('SET_REGISTRATION_VALUE')
export const registration = createAction('REGISTRATION_REQUEST')
export const registrationSuccess = createAction('REGISTRATION_SUCCESS')
export const registrationFailure = createAction('REGISTRATION_FAILURE')


export const setLoginValue = createAction('SET_LOGIN_VALUE')
export const login = createAction('LOGIN_REQUEST')
export const loginSuccess = createAction('LOGIN_SUCCESS')
export const loginFailure = createAction('LOGIN_FAILURE')


export const logout = createAction('LOGOUT')
