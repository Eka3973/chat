import {handleActions} from 'redux-actions';
import * as actions from '../actions';

const defaultState = {
    messages: [],
    isLoading: false,
    error: null,
};


const messagesReducer = handleActions(
    {
        [actions.addMessage]: (state) => ({
            ...state,
            isLoading: true,
        }),
        [actions.addMessageSuccess]: (state) => ({
            ...state,
            isLoading: false,

        }),
        [actions.addMessageFailure]: (state, {payload}) => ({
            ...state,
            isLoading: false,
            error: payload,
        }),
        [actions.getMessages]: (state) => ({
            ...state,
            isLoading: true,
        }),
        [actions.getMessagesSuccess]: (state) => ({
            ...state,
            isLoading: false,

        }),
        [actions.getMessagesFailure]: (state, {payload}) => ({
            ...state,
            isLoading: false,
            error: payload,
        }),
        [actions.setMessages]: (state, {payload}) => ({
            ...state,
            messages: payload,
        }),
    },
    defaultState
);

export default messagesReducer;
