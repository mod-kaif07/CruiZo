import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Userlogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/users/logout`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          // Clear all user-related data from localStorage
          localStorage.removeItem("token");
          localStorage.removeItem("userToken");
          alert("Logout successful.");
          // Navigate to login page
          navigate("/user-login");
        }
      } catch (error) {
        console.error("Logout error:", error);
        alert("Logout failed. Please try again.");

        // Even if API call fails, clear token and redirect
        localStorage.removeItem("token");
        localStorage.removeItem("userToken");

        navigate("/user-login");
      }
    };

    handleLogout();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4"></div>
        <p className="text-lg text-gray-600">Logging out...</p>
      </div>
    </div>
  );
};

export default Userlogout;
