import React, { FormEvent } from 'react';
import '../styles/App.scss';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { AddUserActionTypes } from '../types/addUser';
import { PageValueActionTypes } from '../types/pageValue';
import { AddUserErrorsActionTypes } from '../types/addUserErrors';

import Message from '../components/Message'

const AddUser: React.FC = () => {
  const user = useTypedSelector(
    (state) => state.addUser
  );
  const { name, surname, email, age, occupation } = user;
  const { textFieldError, ageError, allGood } = useTypedSelector(
    (state) => state.addUserErrors
  );
  const dispatch = useDispatch();
  
  function getAge(dateString: string) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const formValidation = () => {
    if (
      name === '' ||
      name === null ||
      RegExp(/[!@#$%^&*(),.?":{}|<>]/).test(name) ||
      RegExp(/[0-9]/).test(name) ||
      !RegExp(/^\w+$/).test(name)
    ) {
      dispatch({ type: AddUserErrorsActionTypes.TEXT_FIELD_ERROR });
    } else if (
      RegExp(/[!@#$%^&*(),.?":{}|<>]/).test(surname) ||
      RegExp(/[0-9]/).test(surname)
    ) {
      dispatch({ type: AddUserErrorsActionTypes.TEXT_FIELD_ERROR });
    } else if (occupation === '') {
      dispatch({ type: AddUserErrorsActionTypes.TEXT_FIELD_ERROR });
    } else if (getAge(age) < 18) {
      dispatch({ type: AddUserErrorsActionTypes.AGE_ERROR });
    } else {
      dispatch({ type: AddUserErrorsActionTypes.ALL_GOOD });
    }
  };

  const validateUserHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formValidation();
  };

  return (
    <div className='form-container'>
      <form onSubmit={(e) => validateUserHandler(e)} className='form'>
        <div className='button-container'>
          <button type='submit' className='button'>
            Add user
          </button>
          <button
            type='submit'
            onClick={() =>
              dispatch({
                type: PageValueActionTypes.ALL_USERS_PAGE,
                payload: 'list',
              })
            }
            className='button'
          >
            Back
          </button>
        </div>
        <div className='form-group'>
          <input
            onFocus={() =>
              dispatch({ type: AddUserErrorsActionTypes.RESET_ERRORS })
            }
            onChange={(e) =>
              dispatch({
                type: AddUserActionTypes.NAME,
                payload: e.target.value,
              })
            }
            type='text'
            placeholder='Name'
            value={name}
            required
          />
        </div>

        <div className='form-group'>
          <input
            onFocus={() =>
              dispatch({ type: AddUserErrorsActionTypes.RESET_ERRORS })
            }
            onChange={(e) =>
              dispatch({
                type: AddUserActionTypes.SURNAME,
                payload: e.target.value,
              })
            }
            type='text'
            placeholder='Surname'
            value={surname}
            required
          />
        </div>

        <div className='form-group'>
          <input
            onFocus={() =>
              dispatch({ type: AddUserErrorsActionTypes.RESET_ERRORS })
            }
            onChange={(e) =>
              dispatch({
                type: AddUserActionTypes.EMAIL,
                payload: e.target.value,
              })
            }
            type='email'
            placeholder='Email'
            value={email}
            required
          />
        </div>
        <div className='form-group'>
          <input
            onFocus={() =>
              dispatch({ type: AddUserErrorsActionTypes.RESET_ERRORS })
            }
            onChange={(e) =>
              dispatch({
                type: AddUserActionTypes.AGE,
                payload: getAge(e.target.value),
              })
            }
            type='date'
            placeholder='Date of Birth'
            required
          />
        </div>
        <div className='form-group'>
          <select
            onFocus={() =>
              dispatch({ type: AddUserErrorsActionTypes.RESET_ERRORS })
            }
            name='occupation'
            onChange={(e) =>
              dispatch({
                type: AddUserActionTypes.OCCUPATION,
                payload: e.target.value,
              })
            }
          >
            <option value=''>Choose occupation</option>
            <option value='frontend'>Frontend</option>
            <option value='Backend'>Backend</option>
            <option value='Fullstack'>Fullstack</option>
          </select>
        </div>
        {textFieldError && (
          <Message type="error" message="All fields should be filled out with latin letters only."/>
        )}
        {ageError && (
          <Message type="error" message="You should be at least 18 years old to proceed."/>
        )}
        {allGood && <Message type="success" message="User successfully added." userData={true} user={user} />}
      </form>
    </div>
  );
};

export default AddUser;
