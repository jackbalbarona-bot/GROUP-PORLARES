function RacerCard({ racer }) {
  const classColors = {
    Small: "#4CAF50",
    Medium: "#2196F3",
    Large: "#F44336"
  };

  return (
    <div
      className="racer-card"
      style={{ "--class-color": classColors[racer.class] }}
    >
      <div className="image-container">
        <img
          src={racer.image}
          alt={racer.name}
          className="character-img"
        />
      </div>

      <h2 className="racer-name">{racer.name}</h2>

      <p className="racer-detail">
        <strong>Class:</strong> {racer.class}
      </p>

      <p className="racer-detail">
        <strong>Vehicle:</strong> {racer.vehicle}
      </p>

      <p className="racer-detail">
        <strong>Speed:</strong> {racer.speed}
      </p>
    </div>
  );
}

export default RacerCard;