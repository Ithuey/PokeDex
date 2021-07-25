import "./Popup.css";
import {AiOutlineClose } from "react-icons/ai";
import Evolutions from "./Evolutions";

function Popup(props) {
  const close = () => {
    props.setTogglePopup(false);
  };
  return (
    
    <div className="popup">
      {
        <div className="popup-container">
          <div className="close-btn" onClick={close}>
            <AiOutlineClose style={{ color: "grey" }} size="2em" />
          </div>
          <div className="popup-img">
            <h2>Image place holder</h2>
          </div>
          <div className="popup-body">
            <div className="popup-label">
              <label style={{ fontWeight: "bold" }}>
                {props.popupInfo.name}{" "}
              </label>
              <label>{props.popupInfo.types.join(", ")}</label>
            </div>
            <div className="popup-icon">
              <props.LikeButton id={props.popupInfo} />
            </div>
          </div>
          <div className="bar-container">
            <div className="barCP" />{" "}
            <div className="bar-info" style={{ fontWeight: "bold" }}>
              CP: {props.popupInfo.maxCP}
            </div>
          </div>
          <div className="bar-container">
            <div className="barHP" />{" "}
            <div className="bar-info" style={{ fontWeight: "bold" }}>
              HP: {props.popupInfo.maxHP}
            </div>
          </div>

          <div className="height-weight-container">
            <div className="height-weight">
              <label style={{ fontWeight: "bold" }}>Weight</label>
              <label>
                {props.popupInfo.weight.minimum}
                {props.popupInfo.weight.maximum}
              </label>
            </div>
            <div className="height-weight">
              <label style={{ fontWeight: "bold" }}>Height</label>
              <label>
                {props.popupInfo.height.minimum}
                {props.popupInfo.height.maximum}
              </label>
            </div>
          </div>

          <label style={{ fontWeight: "bold", padding: "5px" }}>
            Evolutions
          </label>
          <Evolutions
            popupInfo={props.popupInfo}
            LikeButton={props.LikeButton}
          />
        </div>
      }
    </div>
    
  );
}

export default Popup;
