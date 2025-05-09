import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../assets/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../assets/userSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const { UserSignedIn } = props;
  const navigate = useNavigate();
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // ...
        navigate("/browse");

      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/login");
      }
    });
    return ()=> unsubscribe
  }, []);


  const HandleValidation = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.\
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className=" absolute flex justify-between w-screen bg-gradient-to-b from-black to-transparent  ">
      <img className="w-50 my-2 mx-4 p-2" src="/logo.png"></img>
      {UserSignedIn && (
        <div id="usericon">
          <img
            src="/usericon.png"
            className="w-20 p-2 m-4"
            onClick={handleToggle}
          ></img>
      
          {isToggle && (
            <div className="absolute  bg-gray-900 border-solid text-white rounded-b-md shadow-lg p-2 my-4 mt-0 ">
              <p className=" font-bold p-2 mx-2 cursor-pointer  hover:underline">Profile</p>
              <p className=" font-bold p-2  mx-2 cursor-pointer  hover:underline">Settings</p>
              <p className=" font-bold p-2 mx-2 cursor-pointer  hover:underline" onClick={HandleValidation}>
                Sign Out
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
