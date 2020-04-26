import { SET_ACTIVE_ROLE_ACTION_TYPE } from '../constants/action-types';

const initialState = {
  activeRole: undefined
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_ROLE_ACTION_TYPE:
            return {
                ...state,
                activeRole: {
                    id: action.activeRoleId,
                    type: action.activeRoleType
                }
            }
        default:
            return state;
    }
}

export default rootReducer;
