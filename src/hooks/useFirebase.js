import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();
  const signInUsingGoogle = () => {
    setIsLoading(true);

    return signInWithPopup(auth, googleProvider);
    // .then((result) => {
    //   setUser(result.user);
    // })
    // .catch( error => {
    //     setError(error.message)
    // })
    // .finally(() => setIsLoading(false));
  };

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  // log out
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    isLoading,
    setUser,
    setError,
    signInUsingGoogle,
    logOut,
  };
};
export default useFirebase;
