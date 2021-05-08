export interface PageValueISType {
  pageValue: string;
}
export enum PageValueActionTypes {
  ADD_NEW_USER_PAGE = 'ADD_NEW_USER_PAGE',
  SINGLE_USER_PAGE = 'SINGLE_USER_PAGE',
  ALL_USERS_PAGE = 'ALL_USERS_PAGE',
}
export type PageValueAction = AddNewUserPage | SingleUserPage | AllUsersPage;

interface AddNewUserPage {
  type: PageValueActionTypes.ADD_NEW_USER_PAGE;
  payload: string;
}
interface SingleUserPage {
  type: PageValueActionTypes.SINGLE_USER_PAGE;
  payload: string;
}
interface AllUsersPage {
  type: PageValueActionTypes.ALL_USERS_PAGE;
  payload: string;
}
