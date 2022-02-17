const CardsList = (props) => {
  return (
    <div>
      <h1>Cards List</h1>
      <div>
        {props.deckOfCards.map((card) => {
          return <img src={card.image} key={card.index} />;
        })}
      </div>
    </div>
  );
};

export default CardsList;
