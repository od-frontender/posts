import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context';
import Button from '../button/Button';

export default function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = e => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };
  return (
    <div className="navbar">
      <Button onClick={logout}>Exit</Button>
      <div className="navbar_link">
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
}
