import axios from 'axios';
import { Dispatch } from 'redux';
import { UsersListActionTypes, UserAction } from '../types/usersList';
import { SingleUserActionTypes, SingleUserAction } from '../types/singleUser';

export const usersListAction = () => async (dispatch: Dispatch<UserAction>) => {
  try {
    dispatch({ type: UsersListActionTypes.USERS_LIST_REQUEST });

    const { data } = await axios.get('https://reqres.in/api/users?page=1');

    dispatch({
      type: UsersListActionTypes.USERS_LIST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: UsersListActionTypes.USERS_LIST_FAIL,
      payload: 'Something went wrong',
    });
  }
};

export const loadMoreUsersAction = () => async (
  dispatch: Dispatch<UserAction>
) => {
  try {
    dispatch({ type: UsersListActionTypes.USERS_LIST_REQUEST });

    const { data } = await axios.get(
      'https://reqres.in/api/users?page=1&per_page=12'
    );

    dispatch({
      type: UsersListActionTypes.LOAD_MORE_USERS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: UsersListActionTypes.USERS_LIST_FAIL,
      payload: 'Something went wrong.',
    });
  }
};

export const getSingleUserAction = (id: string) => async (
  dispatch: Dispatch<SingleUserAction>
) => {
  try {
    dispatch({ type: SingleUserActionTypes.LOAD_SINGLE_USER_REQUEST });

    const { data } = await axios.get(`https://reqres.in/api/users/${id}`);
    dispatch({
      type: SingleUserActionTypes.LOAD_SINGLE_USER_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: SingleUserActionTypes.LOAD_SINGLE_USER_FAIL,
      payload: 'Something went wrong.',
    });
  }
};
