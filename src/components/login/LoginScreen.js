import React from 'react'


const LoginScreen = ({ history }) => {
  
  const handleClick = () => {
    // Push add a new path to history and let user go back
    // history.push('/');
    // Replace as it name indicates, replaces the actual path in history, so user wont be able to navigate back
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
