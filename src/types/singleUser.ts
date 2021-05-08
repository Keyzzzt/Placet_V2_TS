export interface singleUserInitialStateType {
  user: {};
  loading: boolean;
  error: null | string;
}

export enum SingleUserActionTypes {
  LOAD_SINGLE_USER_REQUEST = 'LOAD_SINGLE_USER_REQUEST',
  LOAD_SINGLE_USER_SUCCESS = 'LOAD_SINGLE_USER_SUCCESS',
  LOAD_SINGLE_USER_FAIL = 'LOAD_SINGLE_USER_FAIL',
}

export type SingleUserAction =
  | LoadSingleUserRequest
  | LoadSingleUserSuccess
  | LoadSingleUserFail;

interface LoadSingleUserRequest {
  type: SingleUserActionTypes.LOAD_SINGLE_USER_REQUEST;
}
interface LoadSingleUserSuccess {
  type: SingleUserActionTypes.LOAD_SINGLE_USER_SUCCESS;
  payload: {};
}
interface LoadSingleUserFail {
  type: SingleUserActionTypes.LOAD_SINGLE_USER_FAIL;
  payload: string;
}
