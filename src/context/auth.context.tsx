import firebase from 'firebase/app';
import { createContext } from 'react';
import { User } from 'firebase/auth';


// export const AuthContext = createContext<User | null>(null);
export const AuthContext = createContext<string>('');