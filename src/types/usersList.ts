export interface UsersListInitialStateType {
  users: {}[];
  loading: boolean;
  error: null | string;
}

export enum UsersListActionTypes {
  USERS_LIST_REQUEST = 'USERS_LIST_REQUEST',
  USERS_LIST_SUCCESS = 'USERS_LIST_SUCCESS',
  USERS_LIST_FAIL = 'USERS_LIST_FAIL',
  LOAD_MORE_USERS_SUCCESS = 'LOAD_MORE_USERS_SUCCESS',
}

export type UserAction =
  | UsersListRequest
  | UsersListSuccess
  | LoadMoreUsersListSuccess
  | UsersListFail;

interface UsersListRequest {
  type: UsersListActionTypes.USERS_LIST_REQUEST;
}
interface UsersListSuccess {
  type: UsersListActionTypes.USERS_LIST_SUCCESS;
  payload: {}[];
}
interface LoadMoreUsersListSuccess {
  type: UsersListActionTypes.LOAD_MORE_USERS_SUCCESS;
  payload: {}[];
}
interface UsersListFail {
  type: UsersListActionTypes.USERS_LIST_FAIL;
  payload: string;
}
