import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';

import '../styles/App.scss';

import {
  usersListAction,
  loadMoreUsersAction,
  getSingleUserAction,
} from '../actions/userActions';
import {
  ADD_NEW_USER_PAGE,
  SINGLE_USER_PAGE,
} from '../constants/usersConstants';
import Loader from '../components/Loader';

const UsersList: React.FC = () => {
  const [clickedShowMore, setClickedShowMore] = useState(false);
  const dispatch = useDispatch();

  const { loading, error, users } = useTypedSelector(
    (state) => state.usersList
  );

  useEffect(() => {
    dispatch(usersListAction());
  }, [dispatch]);

  const loadMoreHandler = () => {
    setClickedShowMore(true);
    dispatch(loadMoreUsersAction());
  };
  const loadLessHandler = () => {
    setClickedShowMore(false);
    dispatch(usersListAction());
  };
  const singleUserPageHandler = (id: string) => {
    dispatch({ type: SINGLE_USER_PAGE, payload: 'single' });
    dispatch(getSingleUserAction(id));
  };

  return (
    <div className='usersListScreen-container'>
      {!users ? (
        <Loader />
      ) : (
        <>
          <div className='button-container'>
            {clickedShowMore && (
              <button className='button' onClick={() => loadLessHandler()}>
                Show less
              </button>
            )}
            {!clickedShowMore && (
              <button className='button' onClick={() => loadMoreHandler()}>
                Show more
              </button>
            )}
            <button
              className='button'
              onClick={() =>
                dispatch({ type: ADD_NEW_USER_PAGE, payload: 'add' })
              }
            >
              Add
            </button>
          </div>
          <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Last name</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  onClick={() => singleUserPageHandler(user.id)}
                  className='user-field'
                >
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default UsersList;
