import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../assets/firebase";
const Header = (props) => {
  const { UserSignedIn } = props;
  const navigate = useNavigate();
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
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
    <div className=" flex w-14/15 justify-between m-auto p-2 mt-2  bg-black rounded-t-md  ">
      <img className="w-50 m-2 p-2" src="/logo.png"></img>
      {UserSignedIn && (
        <div id="usericon">
          <img
            src="/usericon.png"
            className="w-20 p-2 m-4"
            onClick={handleToggle}
          ></img>
          {isToggle && (
            <div className="absolute  bg-gray-900 border-solid text-white rounded-b-md shadow-lg p-2 my-4 mt-0 ">
              <p className=" font-bold p-2 mx-3 cursor-pointer  hover:underline">Profile</p>
              <p className=" font-bold p-2  mx-3 cursor-pointer  hover:underline">Settings</p>
              <p className=" font-bold p-2 mx-3 cursor-pointer  hover:underline" onClick={HandleValidation}>
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
