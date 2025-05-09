import {
    SignInDataValidation,
    SignUpDataValidation,
  } from "../assets/formvalidations";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../assets/userSlice";
import { auth } from "../assets/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";



const HandleValidation = (isSignInForm, email, password, confirmPassword) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
     const [msg, setmsg] = useState(null);
    if (!isSignInForm) {
      // signup form validation
      const Msg = SignUpDataValidation(
        email.current.value,
        password.current.value,
        confirmPassword.current.value
      );
      Msg !== "null" ? setmsg(Msg) : setmsg(null);
      //creating user in fire base
      confirmPassword.current.value === password.current.value
        ? createUserWithEmailAndPassword(auth,  email.current.value, password.current.value)
            .then((userCredential) => {
              const user = userCredential.user;
              // update profile 
              updateProfile(user, {
                displayName: name.current.value,
                photoURL: "https://example.com/jane-q-user/profile.jpg",
              })
                .then(() => {
                  const { uid, email, displayName } = auth.currentUser;
                  dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                  navigate("/browse");
                })
                .catch((error) => {
                  // An error occurred
                  const errorCode = error.code;
                  const errorMessage = error.message;
                });
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setmsg(errorMessage);
              // ..
            })
        : setmsg("Password and Confirm Password do not match.");
    } else {
      const Msg = SignInDataValidation(
        email.current.value,
        password.current.value
      );
      Msg !== "null" ? setmsg(Msg) : setmsg(null);
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setmsg(errorMessage);
        });
      //signin form validation
    }
    return msg;
  };
export default HandleValidation;