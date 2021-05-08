import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';

import '../styles/App.scss';
import '../components/Loader';

import {
  NAME,
  SURNAME,
  EMAIL,
  BIRTH_DATE,
  OCCUPATION,
  ALL_USERS_PAGE,
  TEXT_FIELD_ERROR,
  AGE_ERROR,
  RESET_ERRORS,
  ALL_GOOD,
} from '../constants/usersConstants';

const AddUser: React.FC = () => {
  const { name, surname, email, birthDate, occupation } = useTypedSelector(
    (state) => state.addUser
  );
  const { textFieldError, ageError, allGood } = useTypedSelector(
    (state) => state.addUserErrors
  );

  const dispatch = useDispatch();

  const formValidation = () => {
    if (
      name === '' ||
      name === null ||
      RegExp(/[!@#$%^&*(),.?":{}|<>]/).test(name) ||
      RegExp(/[0-9]/).test(name) ||
      !RegExp(/^\w+$/).test(name)
    ) {
      dispatch({ type: TEXT_FIELD_ERROR });
    } else if (
      RegExp(/[!@#$%^&*(),.?":{}|<>]/).test(surname) ||
      RegExp(/[0-9]/).test(surname)
    ) {
      dispatch({ type: TEXT_FIELD_ERROR });
    } else if (occupation === '') {
      dispatch({ type: TEXT_FIELD_ERROR });
    }
    // else if (
    //   (new Date().getTime() - new Date(birthDate)) /
    //     (24 * 3600 * 365.25 * 1000).toFixed() <
    //   18
    // ) {
    //   dispatch({ type: AGE_ERROR });
    // }
    else {
      dispatch({ type: ALL_GOOD });
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
            onClick={() => dispatch({ type: ALL_USERS_PAGE, payload: 'list' })}
            className='button'
          >
            Back
          </button>
        </div>
        <div className='form-group'>
          <input
            onFocus={() => dispatch({ type: RESET_ERRORS })}
            onChange={(e) => dispatch({ type: NAME, payload: e.target.value })}
            type='text'
            placeholder='Name'
            value={name}
            required
          />
        </div>

        <div className='form-group'>
          <input
            onFocus={() => dispatch({ type: RESET_ERRORS })}
            onChange={(e) =>
              dispatch({ type: SURNAME, payload: e.target.value })
            }
            type='text'
            placeholder='Surname'
            value={surname}
            required
          />
        </div>

        <div className='form-group'>
          <input
            onFocus={() => dispatch({ type: RESET_ERRORS })}
            onChange={(e) => dispatch({ type: EMAIL, payload: e.target.value })}
            type='email'
            placeholder='Email'
            value={email}
            required
          />
        </div>
        <div className='form-group'>
          <input
            onFocus={() => dispatch({ type: RESET_ERRORS })}
            onChange={(e) =>
              dispatch({ type: BIRTH_DATE, payload: e.target.value })
            }
            type='date'
            placeholder='Date of Birth'
            required
          />
        </div>
        <div className='form-group'>
          <select
            onFocus={() => dispatch({ type: RESET_ERRORS })}
            name='occupation'
            onChange={(e) =>
              dispatch({ type: OCCUPATION, payload: e.target.value })
            }
          >
            <option value=''>Choose occupation</option>
            <option value='frontend'>Frontend</option>
            <option value='Backend'>Backend</option>
            <option value='Fullstack'>Fullstack</option>
          </select>
        </div>
        {textFieldError && (
          <div className='error-message'>
            All fields should be filled out with latin letters only.
          </div>
        )}
        {ageError && (
          <div className='error-message'>
            You should be at least 18 years old to proceed.
          </div>
        )}
        {allGood && <div className='success-message'>All good!</div>}
      </form>
    </div>
  );
};

export default AddUser;
