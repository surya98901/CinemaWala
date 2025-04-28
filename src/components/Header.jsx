
import { useNavigate } from "react-router-dom";

const Header = ()=> {
    const navigate = useNavigate();
    const handleButtonClick=()=>{
        navigate("/login");
    }
    return (

        <div className=" flex w-14/15 justify-between m-auto p-2 mt-2  bg-black rounded-md ">
            <img className="w-50 m-2 p-2" src="/logo.png"></img>
            <button className=" bg-white text-black rounded-md p-2 m-4"
            onClick={handleButtonClick}>
            Sign In</button>
        </div>
    );}

export default Header;