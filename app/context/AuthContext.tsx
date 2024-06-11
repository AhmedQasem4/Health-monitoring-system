import { useNavigation } from '@react-navigation/native';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
  user: User | null;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  signUp: (user: User) => void;
}

interface User {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
    
  const signIn = (email: string, password: string) => {
    // Check the user's credentials against the stored user
    if (user && user.email === email && user.password === password) {
      setUser(user);
    } else {
      alert('Email or password is incorrect');
    }
  };
  console.log('====================================');
  console.log(user);
  console.log('====================================');
  const signOut = () => {
    setUser(null);
  };

  const signUp = (newUser: User) => {
    setUser(newUser);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
