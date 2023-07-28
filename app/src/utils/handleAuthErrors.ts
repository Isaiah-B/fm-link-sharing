import { FirebaseError } from 'firebase/app';

const parseFirebaseError = (message: string) => {
  return message.slice(10).replace(/\s\(auth\/.*/g, '');
}


export default function handleAuthErrors(error: unknown) {
  console.log(error);
  const errorList = [];

  if (error instanceof FirebaseError) {
    switch (error.code) {
      case 'auth/weak-password':
        errorList.push(parseFirebaseError(error.message));
    }
  }

  if (error instanceof Error) {
    errorList.push(error.message);
  }

  return errorList;
}