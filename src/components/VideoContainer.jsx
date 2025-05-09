import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";


const VideoContainer = (props) => {
  const { movie } = props;
  const trailer = useSelector((state) => state.movies?.trailer);
  useMovieTrailer(movie?.id);

  return (
    <>
      <div id="Video Background" 
      className="w-screen -mt-35">
        <iframe
        className="w-full h-full aspect-video"
          src={"https://www.youtube.com/embed/" + trailer?.key + "?&autoplay=1&mute=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
      <div id="Video Title" className=" absolute top-0 left-0 w-full h-full flex flex-col pt-[20%] bg-gradient-to-t from-black to-transparent mt-10 ">
        <h1 className="text-white text-6xl p-2 ml-5 font-bold">{movie?.title}</h1>
        <p className="text-white text-xl w-1/3 ml-5 p-2">{movie?.overview}</p>
        <div className="ml-5">
          <button
            type="button"
            className="bg-white text-black px-5 py-2 m-2 text-xl font-bold rounded-xl cursor-pointer transform transition-transform duration-200 hover:scale-110 "
          >
            Play
          </button>
          <button
            type="button"
            className="bg-gray-600 border border-gray-600 text-white px-4 py-2 m-2 text-xl font-bold rounded-xl cursor-pointer transform transition-transform duration-200 hover:scale-110 "
          >
            More Info
          </button>
        </div>
      </div>
    </>
  );
};
export default VideoContainer;
