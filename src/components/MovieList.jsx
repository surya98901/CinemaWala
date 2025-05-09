import TrendingCards from "./TrendingCards";
const MovieList = ({movielist})=> {
    return (
        <div className="flex overflow-x-scroll p-2 space-x-2  rounded-2xl no-scrollbar"
        style={{ scrollBehavior: "smooth" }}>
            
            {movielist && (movielist.map((movie) => (
                <div key={movie.id} className=" p-2">
                    <TrendingCards movie = {movie}/>
                </div>
            )))}

        </div>
    )
}
export default MovieList;