import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import '../styles/App.scss';

import UsersList from './UsersList';
import SingleUser from './SingleUser';
import AddUser from './AddUser';

const Main: React.FC = () => {
  const { pageValue } = useTypedSelector((state) => state.pageValue);

  return (
    <div className='main-container'>
      {pageValue === 'list' && <UsersList />}
      {pageValue === 'add' && <AddUser />}
      {pageValue === 'single' && <SingleUser />}
    </div>
  );
};

export default Main;
