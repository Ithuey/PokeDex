import "./DropDown.css";
import { useState } from "react";

function DropDown({ types, setType }) {
  const [isActive, setIsActive] = useState(false);
  const type = [
    "Type",
    "Grass",
    "Poison",
    "Fire",
    "Flying",
    "Water",
    "Bug",
    "Normal",
    "Electric",
    "Ground",
    "Fairy",
    "Fighting",
    "Psychic",
    "Rock",
    "Steel",
    "Ice",
    "Ghost",
    "Dragon",
  ];

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {types}
      </div>
      {isActive && (
        <div className="dropdown-content">
          {type.map((type) => (
            <div
              value={type}
              className="dropdown-item"
              onClick={(e) => {
                setType(type);
                setIsActive(false);
              }}
            >
              {type}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDown;
