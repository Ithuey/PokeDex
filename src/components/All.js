import "./Card.css";
import List from "./List";
import Card from "./Card";


function All(props) {
  return (
    <div>
      {props.grid ? (
        <List
          search={props.search}
          pokemon={props.pokemon}
          LikeButton={props.LikeButton}
          showFavorite={props.showFavorite}
          isLiked={props.isLiked}
          showFavorite={props.showFavorite}
          deleteFavorite={props.deleteFavorite}
          popUp={props.popUp}
        />
      ) : (
        <Card
          search={props.search}
          pokemon={props.pokemon}
          LikeButton={props.LikeButton}
          showFavorite={props.showFavorite}
          isLiked={props.isLiked}
          showFavorite={props.showFavorite}
          deleteFavorite={props.deleteFavorite}
          popUp={props.popUp}
        />
      )}
    </div>
  );
}

export default All;
