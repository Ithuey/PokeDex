import "./NavBar.css";
import DropDown from "./DropDown";
import { BsGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";

function NavBar(props) {
  return (
    <div className="navbar">
      <div className="nav-button-toggle">{<props.ToggleAllFavotite />}</div>
      <div className="search-toggle">
        <div className="search-type">
          <input
            className="search"
            placeholder="Search by Pokemon or Type"
            type="text"
            value={props.searchTerm}
            onChange={(e) => props.setSearchTerm(e.target.value)}
          />
          <DropDown types={props.types} setType={props.setType} />
          <div className="nav-icon">
            {props.grid ? (
              <BsGridFill
                onClick={props.toggleView}
                style={{ cursor: "pointer", float: "right" }}
                size="2em"
                color="#8DB596"
              />
            ) : (
              <FaList
                onClick={props.toggleView}
                style={{ cursor: "pointer", float: "right" }}
                size="2em"
                color="#8DB596"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
