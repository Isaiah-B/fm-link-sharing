import { createContext, useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import Cookies from 'universal-cookie';

import handleAuthErrors from '../utils/handleAuthErrors';

import { AuthCredentials } from '../types';

interface AuthContextType {
  user: string | null,
  setUser: React.Dispatch<React.SetStateAction<string | null>>,

  createUser: (credentials: AuthCredentials) => Promise<void>,
  loginUser: (credentials: AuthCredentials) => Promise<void>,
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => ({}),

  createUser: async () => {({})},
  loginUser: async () => {({})},
});

const cookies = new Cookies();

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthContextType['user']>(cookies.get('token') || null);

  const createUser = async (credentials: AuthCredentials) => {
    const { email, password } = credentials;

    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const accessToken = await userCredential.user.getIdToken();

      cookies.set('token', accessToken);
      setUser(accessToken);

    } catch (err: unknown) {
      handleAuthErrors(err);
    }
  };

  const loginUser = async (credentials: AuthCredentials) => {
    const { email, password } = credentials;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const accessToken = await userCredential.user.getIdToken();

      cookies.set('token', accessToken);
      setUser(accessToken);

    } catch (err: unknown) {
      console.log(err);
    }
  };

  const value = {
    user,
    setUser,
    createUser,
    loginUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}