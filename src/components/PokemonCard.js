import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const { id, name, hp, sprites } = pokemon;
  const [isFront, setIsFront] = useState(true);

  const handleCardClick = (e) => {
    setIsFront(!isFront);
  };

  return (
    <Card>
      <div>
        <div className="image">
          <img
            src={isFront ? sprites.front : sprites.back}
            alt="oh no!"
            onClick={handleCardClick}
          />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
