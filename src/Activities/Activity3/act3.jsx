import { useState, useEffect } from "react";
import RacerCard from "./RaceCard.jsx";
import "./act3.css";

function Activity3() {
  const [racers, setRacers] = useState([]);

  useEffect(() => {
    fetch("/racercard.json")
      .then((res) => res.json())
      .then((data) => setRacers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="racer-list">
      <h1>Racer List</h1>

      {racers.map((racer) => (
        <RacerCard key={racer.id} racer={racer} />
      ))}
    </div>
  );
}

export default Activity3;