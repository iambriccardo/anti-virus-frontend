import { SET_ACTIVE_ROLE_ACTION_TYPE } from '../constants/action-types';

export function setActiveRole(activeRoleId, activeRoleType) {
  return { type: SET_ACTIVE_ROLE_ACTION_TYPE, activeRoleId, activeRoleType };
}
