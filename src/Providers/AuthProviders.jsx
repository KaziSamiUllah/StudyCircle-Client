import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { GithubAuthProvider } from "firebase/auth/web-extension";
import useMatchUser from "../Hooks/useMatchUser";
import useUploadUserData from "../Hooks/useUploadUserData";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAxiosSecure from "../Hooks/useAxiosSecure";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic()
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const userExists = useMatchUser(user?.email);
  const { uploadUserData} = useUploadUserData();


const userdata={ email: user?.email, imageURL: user?.photoURL || "", name: user?.displayName, role: "Student" }


const auth = getAuth(app);

  //// Sign UP////
  const SignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign In/Log in///
  const SignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider);
    if(userExists){
      uploadUserData(userdata)
    }
  };
  const githubProvider = new GithubAuthProvider();
  const signInWithGithub = () => {
    setLoading(true);
    signInWithPopup(auth, githubProvider);
  };

  // Sign Out/ Log Out////
  const SignOut = () => {
    setLoading(true);
    return signOut(auth);
  };


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      const userEmail = currentUser?.email || user?.email;
      const JWTpayload = { email: userEmail };

      if (currentUser) {
        axiosPublic
          .post("/jwt", JWTpayload, {
            // withCredentials: true,
          })
          .then((res) => {
            console.log("token response", res.data);
            if (res?.data?.token){
              localStorage.setItem("Token", res.data.token)
            }
          });
      } else {
        localStorage.removeItem("Token")
        // axiosPublic
        //   .post("/logout", JWTpayload, {
        //     // withCredentials: true,
        //   })
        //   .then((res) => {
        //     console.log(res.data);
            
        //   });
      }
    });
    return () => {
      //CleanUP
      unSubscribe();
    };
   
  }, [user?.email, auth]);

  const UpdateUserData = (userName, img) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: img,
    });
  };

  const authInfo = {
    SignUp,
    SignIn,
    SignOut,
    signInWithGoogle,
    UpdateUserData,
    user,
    loading,
    signInWithGithub,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
