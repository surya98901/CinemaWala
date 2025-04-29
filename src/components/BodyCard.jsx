import { LOGIN_BG_IMG } from "../assets/constants";
import { useNavigate } from "react-router-dom";




const BodyCard = ()=>{
  const navigate = useNavigate();
  const HandleValidation= ()=>{
    navigate("/login");
  }
  return (
    <div className="w-14/15 m-auto ">
      <div
        data-testid="BodyCard"
        className=" absolute w-14/15 h-150 bg-cover bg-center rounded-b-2xl  p-0"
        src={LOGIN_BG_IMG}
      >
        <img className="w-full h-full rounded-b-2xl" src={LOGIN_BG_IMG}></img>
      </div>
      <div className=" absolute w-14/15 h-150 bg-black  p-0 opacity-70 rounded-b-2xl"></div>

      <div className=" relative w-full h-150 flex flex-col justify-center items-center  ">
        <h1 className="text-8xl font-extrabold text-white">
          Hey there, binge-lover!{" "}
        </h1>
        <h2 className="text-5xl font-bold text-white mt-5">
          🍿 Cinema Wala is ready to serve your next masterpiece. 🍿
        </h2>
        <h3 className="text-2xl font-bold text-white mt-20">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <form className="flex mt-4 w-full justify-center items-center"
        onSubmit={(e) => e.preventDefault()}>
          <button className="w-3/9 h-15 p-4 m-4 rounded-2xl bg-red-600 text-white text-2xl font-bold  mx-4"
          onClick={HandleValidation}>
            Get Started
          </button>
        </form>
      </div>
    </div>
);}
export default BodyCard;