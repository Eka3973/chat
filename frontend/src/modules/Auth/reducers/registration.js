import {handleActions} from 'redux-actions';
import * as actions from '../actions';

const defaultState = {
    value: {
        userName: 'Ekaterina',
        email: 'testsunt848@gmail.com',
        password: '12345',
    },
    isLoading: false,
    error: null,
};


const registrationReducer = handleActions(
    {
        [actions.setRegistrationValue]: (state, {payload}) => ({
            ...state,
           value: payload,
        }),
        [actions.registration]: (state) => ({
            ...state,
            isLoading: true,
        }),
        [actions.registrationSuccess]: (state) => ({
            ...state,
            isLoading: false,

        }),
        [actions.registrationFailure]: (state, {payload}) => ({
            ...state,
            isLoading: false,
            error: payload,
        }),
    },
    defaultState
);

export default registrationReducer;
