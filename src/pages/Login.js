import React, { useContext } from 'react';
import Button from '../components/button/Button';
import Input from '../components/input/Input';
import { AuthContext } from '../context';

export default function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = e => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={login}>
        <Input type="text" placeholder="Enter login" />
        <Input type="password" placeholder="Enter password" />
        <Button>Enter</Button>
      </form>
    </div>
  );
}
