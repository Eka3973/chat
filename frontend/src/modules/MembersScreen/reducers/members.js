import {handleActions} from 'redux-actions';
import * as actions from '../actions';

const defaultState = {
    members: [],
    member: null,
    isLoading: false,
    error: null,
};


const membersReducer = handleActions(
    {
        [actions.getMembers]: (state) => ({
            ...state,
            isLoading: true,
        }),
        [actions.getMembersSuccess]: (state) => ({
            ...state,
            isLoading: false,

        }),
        [actions.getMembersFailure]: (state, {payload}) => ({
            ...state,
            isLoading: false,
            error: payload,
        }),
        [actions.setMembers]: (state, {payload}) => ({
            ...state,
            members: payload,
        }),
        [actions.setMember]: (state, {payload}) => ({
            ...state,
            member: payload,
        }),
    },
    defaultState
);

export default membersReducer;
