// Logout.js

import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { logout } from "../../apiCalls"; // Assuming you have a logout function in your apiCalls file

const Logout = () => {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout(); // Call your logout function from API calls
      dispatch({ type: "LOGOUT" }); // Dispatch logout action
      localStorage.removeItem("user"); // Remove user details from local storage
      history.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Logging out...</h1>
      {/* You can add a loader or any other UI element here while the user is being logged out */}
      {/* You may also call handleLogout() in useEffect to logout automatically when this component mounts */}
    </div>
  );
};

export default Logout;
