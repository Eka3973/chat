import {handleActions} from 'redux-actions';
import * as actions from '../actions';

const defaultState = {
     userData: null
};

const userReducer = handleActions(
    {
        [actions.setUser]: (state, {payload}) => ({
            ...state,
            user: payload,
        }),
        [actions.deleteUser]: (state) => ({
            ...state,
            user: null,
        }),
    },
    defaultState
);

export default userReducer;
