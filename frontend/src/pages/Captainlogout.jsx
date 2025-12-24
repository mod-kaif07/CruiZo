import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Captainlogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      const token = localStorage.getItem("c-token");

      // ✅ logout client-side FIRST
      localStorage.removeItem("c-token");

      try {
        if (token) {
          await axios.get(
            `${import.meta.env.VITE_BASE_URL}/captains/logoutCaptain`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        }
      } catch (error) {
        console.error("Logout API failed:", error.response?.data || error.message);
      } finally {
        navigate("/captain-login", { replace: true });
      }
    };

    logout();
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default Captainlogout;
