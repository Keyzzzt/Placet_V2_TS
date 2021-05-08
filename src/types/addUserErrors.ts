export interface AddUserErrorsISType {
  textFieldError: boolean;
  ageError: boolean;
  allGood: boolean;
}
export enum AddUserErrorsActionTypes {
  TEXT_FIELD_ERROR = 'TEXT_FIELD_ERROR',
  AGE_ERROR = 'AGE_ERROR',
  RESET_ERRORS = 'RESET_ERRORS',
  ALL_GOOD = 'ALL_GOOD',
}

export type AddUserErrorsAction =
  | TextFieldError
  | AgeError
  | ResetErrors
  | AllGood;

interface TextFieldError {
  type: AddUserErrorsActionTypes.TEXT_FIELD_ERROR;
}
interface AgeError {
  type: AddUserErrorsActionTypes.AGE_ERROR;
}
interface ResetErrors {
  type: AddUserErrorsActionTypes.RESET_ERRORS;
}
interface AllGood {
  type: AddUserErrorsActionTypes.ALL_GOOD;
}
