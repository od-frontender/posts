import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import NotFoundPage from '../pages/NotFoundPage';
import Posts from '../pages/Posts';
import PostIdPage from '../pages/PostIdPage';
import About from '../pages/About';
import { AuthContext } from '../context';

export default function AppRouter() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  return (
    <Routes>
      <Route
        path="/"
        element={isAuth ? <Navigate to="/posts" /> : <Navigate to="/login" />}
      />
      <Route path="/posts" element={isAuth ? <Posts /> : <Login />} />
      <Route path="/posts/:id" element={isAuth ? <PostIdPage /> : <Login />} />
      <Route path="/about" element={isAuth ? <About /> : <Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
