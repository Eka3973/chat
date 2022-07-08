import {createAction} from "redux-actions"

export const getMembers = createAction('GET_MEMBERS_REQUEST')
export const getMembersSuccess = createAction('GET_MEMBERS_SUCCESS')
export const getMembersFailure = createAction('GET_MEMBERS_FAILURE')

export const setMembers = createAction('SET_MEMBERS')

export const setMember = createAction('SET_MEMBER')


