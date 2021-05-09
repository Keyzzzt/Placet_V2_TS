import {addUserReducer} from './usersListReducer'
import {AddUserActionTypes} from '../types/addUser'

test('user input data should be length of 4', () => {
    // 1. Test data
    let action = {type: AddUserActionTypes.NAME, payload: 'John'}
    let state = {  
        name: '',
        surname: '',
        email: '',
        age: '',
        occupation: ''
    }
    // 2. Action
    let newState = addUserReducer(state, action)
    // 3. Expectation
    expect(newState.name.length).toBe(4)
});
