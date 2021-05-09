import React, { useEffect, useState } from 'react';
import '../styles/App.scss';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { PageValueActionTypes } from '../types/pageValue';
import {
  usersListAction,
  loadMoreUsersAction,
  getSingleUserAction,
} from '../actions/userActions';

import Loader from '../components/Loader';
import Message from '../components/Message'

const UsersList: React.FC = () => {
  const dispatch = useDispatch();

  const [clickedShowMore, setClickedShowMore] = useState(false);
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
    dispatch({
      type: PageValueActionTypes.SINGLE_USER_PAGE,
      payload: 'single',
    });
    dispatch(getSingleUserAction(id));
  };

  return (
    <div className='usersListScreen-container'>
       {loading && <Loader/>}
      {error && <Message type="error" message={error}/>}
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
                dispatch({
                  type: PageValueActionTypes.ADD_NEW_USER_PAGE,
                  payload: 'add',
                })
              }
            >
              Add
            </button>
          </div>
          <table className='table-large-all'>
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
