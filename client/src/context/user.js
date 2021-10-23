import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser({
      isAuth: true
    });
  }, []);

  const setAuth = () => {
    setUser((prev) => ({ ...prev, isAuth: !user.isAuth }));
  };

  const state = {
    user,
    setAuth
  };

  return (
    <UserContext.Provider value={state}>
      { children }
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const value = useContext(UserContext);

  return value;
};
