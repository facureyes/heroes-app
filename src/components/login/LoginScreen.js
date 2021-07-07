import React, {useContext} from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
// import { authReducer } from '../auth/authReducer'


const LoginScreen = ({ history }) => {
  
  const { dispatch } = useContext(AuthContext);

  const handleClick = () => {
    // Push add a new path to history and let user go back
    // history.push('/');
    // Replace as it name indicates, replaces the actual path in history, so user wont be able to navigate back
    // history.replace('/') ;
    dispatch({
      type: types.login,
      payload: {
        name: 'Facu',
        logged: true,
      }
    })
    history.replace('/') ;
  }
  return (
    <div className="container mt-5">
      <h1>Login Screen</h1>
      <hr />
      <button
        className="btn btn-dark"
        onClick={handleClick}
      >
        Login
      </button>
    </div>
  )
}

export default LoginScreen
