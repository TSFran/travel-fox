import * as actionTypes from './actionTypes';

import { serviceUsers } from './services';

const fetchUsersRequest = () => ({
  type: actionTypes.FETCH_USERS_REQUEST
});

const fetchUsersSuccess = users => ({
  type: actionTypes.FETCH_USERS_SUCCESS,
  users
});

const fetchUsersFailure = () => ({
  type: actionTypes.FETCH_USERS_FAILURE
});

export const fetchUsers = (): any => {
  return async dispatch => {
    dispatch(fetchUsersRequest());
    try {
      let data = await serviceUsers.getUsers();
      console.log(data, 'AQUI LA DATA QUE NECESITO')
      dispatch(fetchUsersSuccess(data));
    } catch (e) {
      dispatch(fetchUsersFailure());
    }
  };
};
// export const fetchUsers = (): any => {
//   return dispatch => {
//     dispatch(fetchUsersRequest());
//     serviceUsers
//       .get()
//       .then(response => {
//         const data = response;
//         dispatch(fetchUsersSuccess(data));
//       })
//       .catch(e => {
//         dispatch(fetchUsersFailure());
//       });
//   };
// };
