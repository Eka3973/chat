import {createAction} from "redux-actions"

export const addMessage = createAction('ADD_MESSAGE_REQUEST')
export const addMessageSuccess = createAction('ADD_MESSAGE_SUCCESS')
export const addMessageFailure = createAction('ADD_MESSAGE_FAILURE')

export const getMessages = createAction('GET_MESSAGES_REQUEST')
export const getMessagesSuccess = createAction('GET_MESSAGES_SUCCESS')
export const getMessagesFailure = createAction('GET_MESSAGES_FAILURE')

export const setMessages = createAction('SET_MESSAGES')


