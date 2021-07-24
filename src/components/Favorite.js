import Card from "./Card";
import List from "./List";

function Favorite(props) {

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
          showFavoriteHandler={props.showFavorite}
          deleteFavorite={props.deleteFavorite}
          popUp={props.popUp}
          
        />)}
      </div>
)

}

export default Favorite;