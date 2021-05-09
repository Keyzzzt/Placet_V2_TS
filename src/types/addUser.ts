export interface AddUserInitialStateType {
  name: string;
  surname: string;
  email: string;
  age: string;
  occupation: string;
}
export enum AddUserActionTypes {
  NAME = 'NAME',
  SURNAME = 'SURNAME',
  EMAIL = 'EMAIL',
  AGE = 'AGE',
  OCCUPATION = 'OCCUPATION',
}
export type AddUserAction = Name | Surname | Email | Age | Occupation;

interface Name {
  type: AddUserActionTypes.NAME;
  payload: string;
}
interface Surname {
  type: AddUserActionTypes.SURNAME;
  payload: string;
}
interface Email {
  type: AddUserActionTypes.EMAIL;
  payload: string;
}
interface Age {
  type: AddUserActionTypes.AGE;
  payload: string;
}
interface Occupation {
  type: AddUserActionTypes.OCCUPATION;
  payload: string;
}
