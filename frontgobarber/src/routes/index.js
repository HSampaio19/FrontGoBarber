/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';

export default function Rotas() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <SingIn />
          </PrivateRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PrivateRoute>
            <SingUp />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard isPrivate />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile isPrivate />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
