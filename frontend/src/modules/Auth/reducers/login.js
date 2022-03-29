import {handleActions} from 'redux-actions';
import * as actions from '../actions';

const defaultState = {
    value: {
        email: 'testsunt848@gmail.com',
        password: '12345',
    },
    isLoading: false,
    error: null,
};


const loginReducer = handleActions(
    {
        [actions.setLoginValue]: (state, {payload}) => ({
            ...state,
            value: payload,
        }),
        [actions.login]: (state) => ({
            ...state,
            isLoading: true,
        }),
        [actions.loginSuccess]: (state) => ({
            ...state,
            isLoading: false,

        }),
        [actions.loginFailure]: (state, {payload}) => ({
            ...state,
            isLoading: false,
            error: payload,
        }),
    },
    defaultState
);

export default loginReducer;
