import { FirebaseError } from 'firebase/app';

const parseFirebaseError = (message: string) => {
  return message.slice(10).replace(/\s\(auth\/.*/g, '');
}

export default function handleAuthErrors(error: unknown) {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case 'auth/weak-password':
        return parseFirebaseError(error.message);
      case 'auth/user-not-found':
        return 'User with this email and password was not found.';
      case 'auth/wrong-password':
        return 'Password is incorrect.';
      default:
        return error.code; 
    }
  }

  if (error instanceof Error) {
    return error.message;
  }
}