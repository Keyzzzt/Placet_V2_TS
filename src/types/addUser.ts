export interface AddUserInitialStateType {
  name: string;
  surname: string;
  email: string;
  birthDate: string;
  occupation: string;
}
export enum AddUserActionTypes {
  NAME = 'NAME',
  SURNAME = 'SURNAME',
  EMAIL = 'EMAIL',
  BIRTH_DATE = 'BIRTH_DATE',
  OCCUPATION = 'OCCUPATION',
}
export type AddUserAction = Name | Surname | Email | BirthDate | Occupation;

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
interface BirthDate {
  type: AddUserActionTypes.BIRTH_DATE;
  payload: string;
}
interface Occupation {
  type: AddUserActionTypes.OCCUPATION;
  payload: string;
}
