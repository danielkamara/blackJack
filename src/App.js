import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import CardsList from "./CardsList";

function App() {
  const [deckOfCards, setDeckOfCards] = useState([]);

  useEffect(async () => {
    const res = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );

    const id = await res.data.deck_id;
    const cards = await axios.get(
      `https://deckofcardsapi.com/api/deck/${id}/draw/?count=2`
    );

    setDeckOfCards(cards.data.cards);
  }, []);
  return (
    <div>
      <h1>Cards App</h1>
      <CardsList deckOfCards={deckOfCards} />
    </div>
  );
}

export default App;
