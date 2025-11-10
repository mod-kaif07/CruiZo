import React, { createContext, use, useState } from "react";
export const UserDataContext = createContext();

const UserContext = ({ children }) => {
  const [userdata, setuserdata] = useState({
    email:'',
    password:'',
    fullname: {
      firstname: '',
      lastname:'',
    },
  });
  return (
    <div>
      <UserDataContext.Provider value={{ userdata, setuserdata }}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

export default UserContext;
