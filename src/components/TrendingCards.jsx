import { IMAGE_URL } from "../assets/constants";
import { useState } from "react";
const TrendingCards = ({movie}) => {
  const {id, title, poster_path, vote_average, release_date} = movie;
  const [isToggled, setIsToggled] = useState(false);
  const onToggle= () =>{
    setIsToggled(!isToggled);
  };

    return (

        <div data-testid="BodyCard" className=" w-50 h-80 p-2 "
            onClick={onToggle}>
                <img className="w-full h-full rounded-2xl" src={IMAGE_URL + poster_path}></img>
                {isToggled && (<div className="-mt-20 bg-black bg-opacity-50 rounded-2xl">
                  <h1 className="text-white text-2xl font-bold">{title}</h1>
                  <p className="text-white text-sm">{release_date}</p>
                  <p className="text-white text-sm">Rating: {vote_average}</p>
                </div>)}
              </div>

);};

export default TrendingCards;