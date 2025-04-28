
const TrendingCards = (props) => {
    const { cardImage } = props;
    return (

    <div className="w-1/8 h-80 rounded-3xl">
        <div
                data-testid="BodyCard"
                className=" absolute w-14/15 h-150 bg-cover bg-center rounded-2xl  p-0"
                src={cardImage}
              >
                <img className="w-full h-full rounded-2xl" src={cardImage}></img>
              </div>
    </div>
);};

export default TrendingCards;