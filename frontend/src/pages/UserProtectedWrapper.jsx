import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const UserProtectedWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("userToken");

  useEffect(() => {
    // Just check if token exists, then stop loading
    setIsLoading(false);
  }, []);

  // Show loading while checking
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4"></div>
          <p className="text-lg text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // If no token, redirect to login
  if (!token) {
    return <Navigate to="/user-login" replace />;
  }

  // If token exists, render the protected content
  return children;
};

export default UserProtectedWrapper;