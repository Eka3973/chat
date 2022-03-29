import {handleActions} from 'redux-actions';
import * as actions from '../actions';

const defaultState = {
     userData: null
};

const userReducer = handleActions(
    {
        [actions.setUser]: (state, {payload}) => ({
            ...state,
            userData: payload,
        }),
        [actions.deleteUser]: (state) => ({
            ...state,
            userData: null,
        }),
    },
    defaultState
);

export default userReducer;
