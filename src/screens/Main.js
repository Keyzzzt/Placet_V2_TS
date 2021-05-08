import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/App.scss'


import UsersList from './UsersList'
import SingleUser from './SingleUser'
import AddUser from './AddUser'

const Main = () => {
    const { pageValue } = useSelector(state => state.pageValue)

    return (
        <div className="main-container">
            {pageValue === 'list' && <UsersList />}
            {pageValue === 'add' && <AddUser />}
            {pageValue === 'single' && <SingleUser />}
        </div>
    );
}

export default Main