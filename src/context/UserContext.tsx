import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserContextProps {
  user: string;
  isLoggedIn: boolean;
  setUser: (user: string) => void;
  logOut: () => void;
}

const UserDefault: string = 'Guest';

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUserState] = useState<string>(UserDefault);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        setUserState(storedUser);
        setIsLoggedIn(true);
      } else {
        // setUserState(UserDefault);
        setIsLoggedIn(false);
      }
    };
    loadUser();
  }, []);

  const setUser = async (newUser: string) => {
    setUserState(newUser);
    setIsLoggedIn(true);
    await AsyncStorage.setItem('user', newUser);
  };

  const logOut = async () => {
    setUserState(UserDefault);
    setIsLoggedIn(false);
    await AsyncStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, setUser, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
