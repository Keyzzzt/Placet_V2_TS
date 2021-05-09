import React from 'react';
import '../styles/App.scss';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { PageValueActionTypes } from '../types/pageValue';

import Loader from '../components/Loader'
import Message from '../components/Message'


const SingleUser: React.FC = () => {
  const { loading, error, user } = useTypedSelector(
    (state) => state.singleUser
  );
  const dispatch = useDispatch();

  return (
    <div className='single-user-container'>
      {loading && <Loader/>}
      {error && <Message type="error" message={error}/>}
      {!user ? <Loader/> : (
        <>
          <div className='button-container'>
          <button
            type='submit'
            onClick={() =>
              dispatch({
                type: PageValueActionTypes.ADD_NEW_USER_PAGE,
                payload: 'list',
              })
            }
            className='button'
          >
            Back
          </button>
        </div>
        <table className='table-large'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Name</th>
              <th>Last name</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>
                <img className='avatar' src={user.avatar} alt='Avatar' />
              </td>
            </tr>
          </tbody>
        </table>
        <table className='table-small'>
          <thead>
            <tr>
              <th>Title</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ID</td>
              <td>{user.id}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{user.first_name}</td>
            </tr>
            <tr>
              <td>Surname</td>
              <td>{user.last_name}</td>
            </tr>
            <tr>
              <td>Avatar</td>
              <td><img className='avatar' src={user.avatar} alt='Avatar' /></td>
            </tr>
          </tbody>
        </table>
      </>
      )} 
    </div>
  );
};

export default SingleUser;
