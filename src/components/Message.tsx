import React from 'react';
import '../styles/App.scss';

import Loader from './Loader'

interface MessageProps {
  type: string;
  message: string;
  userData?: boolean;
  user?: {
    name?: string;
    surname?: string;
    email?:string;
    age?: string;
    occupation?: string;
  }
}

const Message: React.FC<MessageProps> = ({type, message, userData, user}) => {
  return (
    <div className='message'>
      <div className={type === 'error' ? 'error-message' : 'success-message'}>
        {user && (
          <>
            <div className="message-title">{message}</div>
            <div className="message-body">
              <div>Name: {user.name}</div>
              <div>Surname: {user.surname}</div>
              <div>Email: {user.email}</div>
              <div>Age: {user.age}</div>
              <div>Occupation: {user.occupation}</div>
            </div>
          </>
        )}
        {type === 'error' && <div>{message}</div>}
      </div>
    </div>
  );
};

export default Message;
