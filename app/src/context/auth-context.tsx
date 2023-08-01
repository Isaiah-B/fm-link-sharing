import { createContext, useState } from 'react';
import Cookies from 'universal-cookie';
import { FirebaseError } from 'firebase/app';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { auth, store } from '../firebase';
import { AuthCredentials, UserDataType } from '../types';

interface AuthContextType {
  user: { id: string, token: string | null },
  setUser: React.Dispatch<React.SetStateAction<{
    id: string;
    token: string | null;
  }>>,

  createUser: (credentials: AuthCredentials) => Promise<void>,
  loginUser: (credentials: AuthCredentials) => Promise<void>,
}

export const AuthContext = createContext<AuthContextType>({
  user: { id: '', token: null },
  setUser: () => ({}),

  createUser: async () => {({})},
  loginUser: async () => {({})},
});

const cookies = new Cookies();

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({
    id: cookies.get('id'),
    token: cookies.get('token') as string || null,
  });

  const createUser = async (credentials: AuthCredentials) => {
    const { email, password } = credentials;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const accessToken = await userCredential.user.getIdToken();
      
      cookies.set('token', accessToken);
      cookies.set('id', userCredential.user.uid);

      setUser({ id: userCredential.user.uid, token: accessToken });
      
      const newLinks: UserDataType = {
        links: [],
        profile: {
          firstName: '',
          lastName: '',
          email: ''
        }
      }

      // Create doc to store user's links and profile info
      const linksDocRef = doc(store, 'userLinks', userCredential.user.uid);
      await setDoc(linksDocRef, newLinks);

    } catch (error: unknown) {
      if (error instanceof FirebaseError) throw error;
      throw new Error('There was a problem with signing up.');
    }
  };

  const loginUser = async (credentials: AuthCredentials) => {
    const { email, password } = credentials;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const accessToken = await userCredential.user.getIdToken();

      cookies.set('token', accessToken);
      cookies.set('id', userCredential.user.uid);

      setUser({ id: userCredential.user.uid, token: accessToken });

    } catch (error: unknown) {
      if (error instanceof FirebaseError) throw error;
      throw new Error('There was a problem with logging in.');
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