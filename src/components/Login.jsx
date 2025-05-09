import { LOGIN_BG_IMG } from "../assets/constants";
import { useRef, useState } from "react";
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
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [isRememberMe, setIsRememberMe] = useState(false);
  const [msg, setmsg] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRememberMe = () => {
    setIsRememberMe(!isRememberMe);
  };
  const formType = () => {
    setIsSignInForm(!isSignInForm);
  };

  const HandleValidation = () => {
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
  };

  return (
    <>
    <Header UserSignedIn={false} />
    <div
      data-testid="Login"
      className="w-full h-screen flex flex-col justify-center items-center  "
    >
      <div
        className="absolute w-14/15 h-full bg-cover bg-center m-0 p-0"
        src={LOGIN_BG_IMG}
      >
        <img className="w-auto h-auto" src={LOGIN_BG_IMG}></img>
      </div>

      <form
        className="relative mx-auto w-120  bg-black flex flex-col justify-center opacity-90 rounded-2xl p-0"
        onSubmit={(e) => e.preventDefault()}
      >
        <img className="w-12/13 mx-auto px-2 pt-4" src="/logo.png"></img>
        <h1 className="text-2xl font-bold p-2 mx-auto my-3 w-2/3 text-gray-300">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            placeholder="Full Name "
            className="border-2 border-gray-400 text-white rounded-md p-2 mx-auto my-3 w-2/3"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Mail-Id "
          className="border-2 border-gray-400 text-white rounded-md p-2 mx-auto my-3 w-2/3"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="border-2 border-gray-400 text-white  rounded-md p-2 mx-auto my-3 w-2/3"
        />
        {!isSignInForm && (
          <input
            ref={confirmPassword}
            type="password"
            placeholder="confirm Password"
            className="border-2 border-gray-400 text-white rounded-md p-2 mx-auto my-3 w-2/3"
          />
        )}
        <button
          className="bg-red-600 text-white rounded-md p-2 mx-auto my-3 w-2/3 cursor-pointer hover:scale-105"
          onClick={HandleValidation}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {msg && (
          <h1 className="text-xl font-bold px-2 mx-4 mb-2 text-red-500 cursor-pointer hover:underline">
            {msg}
          </h1>
        )}
        {isSignInForm && (
          <>
            <h1 className="text font-bold  mx-auto  text-gray-300">Or</h1>
            <button className="bg-gray-600 text-white rounded-md p-2 mx-auto my-3 w-2/3 cursor-pointer hover:scale-105">
              Use a Sign-in code
            </button>
            <h1 className="text-xl font-bold p-2 mx-auto mb-3  text-gray-300 cursor-pointer hover:underline">
              Forgot Password?
            </h1>
            <div className="flex  mx-auto my- w-2/3">
              <button className="p-2 bg-black text-white border-gray-500 ">
                {isRememberMe ? " " : "✓"}
              </button>
              <h1
                className="text-xl font-bold p-2  text-gray-300 cursor-pointer hover:underline"
                onClick={handleRememberMe}
              >
                Remember me
              </h1>
            </div>
          </>
        )}
        <div className="flex   mx-auto mb-5 w-2/3">
          <h1
            className="text-xl p-2  text-gray-300 cursor-pointer hover:underline"
            onClick={formType}
          >
            {isSignInForm ? "Newbie ?" : "Already a Member !"}
          </h1>
          <h1 className="text-xl font-bold p-2   text-gray-300">
            {isSignInForm ? "Sign up now" : "Sign In"}
          </h1>
        </div>
      </form>
    </div>
    </>
  );
};
export default Login;
