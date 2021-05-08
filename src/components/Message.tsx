import React from 'react';
import '../styles/App.scss';

interface MessageProps {
  type: string;
  message: string;
}

const Message: React.FC<MessageProps> = (props) => {
  return (
    <div className='message-container'>
      <div
        className={props.type === 'error' ? 'error-message' : 'success-message'}
      >
        {props.message}
      </div>
    </div>
  );
};

export default Message;
