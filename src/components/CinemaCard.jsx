
const CinemaCard = (props) => {
    const {cinema} = props;
    return (
        <div className="cinema-card" >
            <img src={cinema.image} alt={cinema.name} className="cinema-image" />
            <h2 className="cinema-name">{cinema.name}</h2>
            <p className="cinema-language">{cinema.location}</p>
            <p className="cinema-rating">Rating: {cinema.rating}</p>
        </div>
    );

}
export default CinemaCard;