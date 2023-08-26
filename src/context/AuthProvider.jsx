import { useContext, createContext, useState } from "react";
const AuthProviderContext = createContext();
const AuthProviderContextDispatcher = createContext();

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(false);
  // const userData = localStorage.getItem("AuthState");
  // // if (userData) {
  // //   setState(JSON.parse(userData));
  // // } else console.log(state);
  return (
    <AuthProviderContext.Provider value={state}>
      <AuthProviderContextDispatcher.Provider value={setState}>
        {children}
      </AuthProviderContextDispatcher.Provider>
    </AuthProviderContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthProviderContext);
export const useAuthActions = () => useContext(AuthProviderContextDispatcher);
