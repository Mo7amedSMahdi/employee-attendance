// LoginPage.tsx

import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="bg-blue-500 text-white p-4">
      <h1 className="text-1xl">Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
