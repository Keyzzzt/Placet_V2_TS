import {
  UsersListInitialStateType,
  UsersListActionTypes,
  UserAction,
} from '../types/usersList';
import {
  singleUserInitialStateType,
  SingleUserAction,
  SingleUserActionTypes,
} from '../types/singleUser';
import {
  AddUserInitialStateType,
  AddUserAction,
  AddUserActionTypes,
} from '../types/addUser';
import {
  PageValueISType,
  PageValueActionTypes,
  PageValueAction,
} from '../types/pageValue';
import {
  AddUserErrorsISType,
  AddUserErrorsActionTypes,
  AddUserErrorsAction,
} from '../types/addUserErrors';

const usersListInitialState: UsersListInitialStateType = {
  users: [],
  loading: false,
  error: null,
};
export const usersListReducer = (
  state = usersListInitialState,
  action: UserAction
): UsersListInitialStateType => {
  switch (action.type) {
    case UsersListActionTypes.USERS_LIST_REQUEST:
      return { ...state, loading: true };
    case UsersListActionTypes.USERS_LIST_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case UsersListActionTypes.LOAD_MORE_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case UsersListActionTypes.USERS_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const singleUserInitialState: singleUserInitialStateType = {
  user: {},
  loading: false,
  error: null,
};
export const singleUserReducer = (
  state = singleUserInitialState,
  action: SingleUserAction
): singleUserInitialStateType => {
  switch (action.type) {
    case SingleUserActionTypes.LOAD_SINGLE_USER_REQUEST:
      return { ...state, loading: true };
    case SingleUserActionTypes.LOAD_SINGLE_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case SingleUserActionTypes.LOAD_SINGLE_USER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const addUserInitialState: AddUserInitialStateType = {
  name: '',
  surname: '',
  email: '',
  birthDate: '',
  occupation: '',
};
export const addUserReducer = (
  state = addUserInitialState,
  action: AddUserAction
): AddUserInitialStateType => {
  switch (action.type) {
    case AddUserActionTypes.NAME:
      return {
        ...state,
        name: action.payload,
      };
    case AddUserActionTypes.SURNAME:
      return {
        ...state,
        surname: action.payload,
      };
    case AddUserActionTypes.EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case AddUserActionTypes.BIRTH_DATE:
      return {
        ...state,
        birthDate: action.payload,
      };
    case AddUserActionTypes.OCCUPATION:
      return {
        ...state,
        occupation: action.payload,
      };
    default:
      return state;
  }
};
const pageValueIS: PageValueISType = {
  pageValue: 'list',
};
export const pageValueReducer = (
  state = pageValueIS,
  action: PageValueAction
): PageValueISType => {
  switch (action.type) {
    case PageValueActionTypes.ALL_USERS_PAGE:
      return {
        pageValue: action.payload,
      };
    case PageValueActionTypes.ADD_NEW_USER_PAGE:
      return {
        pageValue: action.payload,
      };
    case PageValueActionTypes.SINGLE_USER_PAGE:
      return {
        pageValue: action.payload,
      };
    default:
      return state;
  }
};

const addUserErrorsIS: AddUserErrorsISType = {
  textFieldError: false,
  ageError: false,
  allGood: false,
};
export const addUserErrorsReducer = (
  state = addUserErrorsIS,
  action: AddUserErrorsAction
): AddUserErrorsISType => {
  switch (action.type) {
    case AddUserErrorsActionTypes.TEXT_FIELD_ERROR:
      return { ...state, textFieldError: true };
    case AddUserErrorsActionTypes.AGE_ERROR:
      return { ...state, ageError: true };
    case AddUserErrorsActionTypes.RESET_ERRORS:
      return {
        textFieldError: false,
        ageError: false,
        allGood: false,
      };
    case AddUserErrorsActionTypes.ALL_GOOD:
      return { ...state, allGood: true };
    default:
      return state;
  }
};
