import { createContext, useState } from "react";
  
export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [contextData, setContextData] = useState();

  const updateDataContext = val => setContextData(val);

  return (
    <AuthContext.Provider value={{ 
       contextData: contextData,
       updateDataContext: updateDataContext 
    }}>
      {props.children}
    </AuthContext.Provider>
  );
}; 