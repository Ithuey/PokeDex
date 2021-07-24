import "./Card.css";

import { AiFillHeart } from "react-icons/ai";

function Card(props) {
  return (
    <div className="card">
      {props.showFavorite ? (
        <div className="card">
          {props.isLiked.map((i, index) => (
            <div key={index} className="card-container">
              <div className="img" style={{ cursor: "pointer" }} onClick={() => props.popUp(i)}>
                <h2>Image place holder</h2>
              </div>
              <div className="card-body">
                <div className="card-label">
                  <label style={{ fontWeight: "bold" }}>{i.name}</label>
                  <label>{i.types.join(", ")} </label>
                </div>
                <div className="card-icon">
                  <AiFillHeart
                    size="2em"
                    color="#EB6383"
                    style={{ cursor: "pointer" }}
                    onClick={() => props.deleteFavorite(i)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card">
          {props.search(props.pokemon).map((i, index) => (
            <div key={index} className="card-container">
              <div className="img" style={{ cursor: "pointer" }} onClick={() => props.popUp(i)}>
                <h2>Image place holder</h2>
              </div>
              <div className="card-body">
                <div className="card-label">
                  <label style={{ fontWeight: "bold" }}>{i.name}</label>
                  <label>{i.types.join(", ")} </label>
                </div>
                <div className="card-icon">{<props.LikeButton id={i} />}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Card;
