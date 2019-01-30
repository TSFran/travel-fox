import * as actionTypes from './actionTypes';

export interface UsersState {
  isFetching: boolean;
  items: any[];
  error: boolean;
}

const initialStateUser: UsersState = {
  isFetching: true,
  error: false,
  items: [{}]
};

export const users = (state: UsersState = initialStateUser, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case actionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    case actionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
        items: action.users
      };
    default:
      return state;
  }
};
