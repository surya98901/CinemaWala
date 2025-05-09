import { useDispatch } from "react-redux";
import { loadGptSearch } from "../assets/gptSlice";

const GptAssistent = () => {

  const dispatch = useDispatch();
  const HandleClick = () => {
    dispatch(loadGptSearch ());
  };


  return (
    <div
      className={"w-25 h-25 border-4 rounded-full border-red-800 bg-black fixed bottom-0 right-0 m-5 "}
      
    >
      <img
        src="/gptlogo.png"
        alt="GPT-Assistent"
        id="gptassistent"
        className="w-full h-full rounded-full"
        onClick={HandleClick}
      />
    </div>
  );
};
export default GptAssistent;
