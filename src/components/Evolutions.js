import "./Popup.css";
function Evolutions(props) {
  const prev = props.popupInfo["Previous evolution(s)"];
  return (
    <div className="evolutions-container">
      {prev &&
        prev.length > 0 &&
        prev.map((i) => (
          <div className="evolutions">
            <div className="popup-evolutions-img">
              <h3>Image place holder</h3>
            </div>
            <div className="popup-body">
              <div className="popup-label">
                <label style={{ fontWeight: "bold" }}>{i.name}</label>
              </div>
              <div className="popup-icon">
                <props.LikeButton id={i.id} />
              </div>
            </div>
          </div>
        ))}
      {props.popupInfo.evolutions &&
        props.popupInfo.evolutions.length > 0 &&
        props.popupInfo.evolutions.map((i) => (
          <div className="evolutions">
            <div className="popup-evolutions-img">
              <h3>Image place holder</h3>
            </div>
            <div className="popup-body">
              <div className="popup-label">
                <label style={{ fontWeight: "bold" }}>{i.name}</label>
              </div>
              <div className="popup-icon">
                <props.LikeButton id={i.id} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Evolutions;
