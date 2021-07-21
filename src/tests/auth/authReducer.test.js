import { authReducer } from '../../auth/authReducer'
import { types } from '../../types/types';

describe('Tests on authReducer', () => {
  
  test('should return default state', () => {
    expect(authReducer()).toEqual({logged: false})
  })
  
  test('should auth & show user name', () => {
    const loginUser = {
      type: types.login,
      payload: {
        name: 'Facundo'
      }
    }
    const userState = authReducer({}, loginUser)
    expect(userState.name).toBe('Facundo');
    expect(userState.logged).toBe(true)
  })
  
  test('should logout user', () => {
    const user = {
      name: 'Facundo',
      logged: true,
    }
    const logoutUser = {
      type: types.logout,
    }
    const userState = authReducer(user, logoutUser)
    expect(userState.name).toBe(undefined);
    expect(userState.logged).toBe(false)
  })
});
