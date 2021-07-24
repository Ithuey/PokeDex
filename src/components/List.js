import "./List.css";
import { AiFillHeart } from "react-icons/ai";

function List(props) {
  return (
    <div className="list">
      {props.showFavorite ? (
        <div className="list">
          {props.isLiked.map((i, index) => (
            <div key={index} className="list-container">
              <div className="list-img" style={{ cursor: "pointer" }} onClick={() => props.popUp(i)}>
                img
              </div>
              <div className="list-body">
                <div className="list-label" style={{ cursor: "pointer" }}  onClick={() => props.popUp(i)} >
                  <label style={{ fontWeight: "bold", cursor: "pointer"  }}>{i.name}</label>
                  <label style={{ cursor: "pointer" }}>{i.types.join(", ")} </label>
                </div>

                <div className="list-icon">
                  <AiFillHeart
                    size="2em"
                    color="#EB6383"
                    value={i.id}
                    style={{ cursor: "pointer" }}
                    onClick={() => props.deleteFavorite(i)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="list">
          {props.search(props.pokemon).map((i, index) => (
            <div key={index} className="list-container">
              <div className="list-img" style={{ cursor: "pointer" }} onClick={() => props.popUp(i)}>
                img
              </div>
              <div className="list-body">
                <div className="list-label" style={{ cursor: "pointer" }} onClick={() => props.popUp(i)}>
                  <label  style={{ fontWeight: "bold", cursor: "pointer" }}>{i.name}</label>
                  <label style={{ cursor: "pointer" }}>{i.types.join(", ")} </label>
                </div>
                <div className="list-icon">{<props.LikeButton id={i} />}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default List;
