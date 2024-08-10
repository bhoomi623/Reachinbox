import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold">ReachInBox-Assignment</h1>
      <div className="text-center">
        <div className="m-4">
          <a href="https://reachinbox-assignment-4rf9.onrender.com/auth/google" className="btn-google">
            Sign in With Google
          </a>
        </div>
        <div className="m-4">
          <a href="https://reachinbox-assignment-4rf9.onrender.com/outlook/signin" className="btn-microsoft">
            Sign in With Microsoft
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
