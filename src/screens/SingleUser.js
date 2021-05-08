import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../styles/App.scss'

import { ADD_NEW_USER_PAGE } from '../constants/usersConstants'

const SingleUser = () => {

    const singleUser = useSelector(state => state.singleUser)
    const { loading, error, user } = singleUser

    const dispatch = useDispatch()

    return (
        <div className="single-user-container">
            <div className="button-container">
                <button type='submit' onClick={() => dispatch({ type: ADD_NEW_USER_PAGE, payload: 'list' })} className='button'>Back</button>
            </div>
            <table className='table'>
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
                        <td><img className="avatar" src={user.avatar} alt="Avatar" /></td>
                    </tr>

                </tbody>

            </table>
        </div>
    );
}

export default SingleUser