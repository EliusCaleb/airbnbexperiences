import React from "react";
import starImg from "../images/star.png"

function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
  return (
    <div>
      <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={props.coverImg} className="card--image" alt="/" />
        <div className="card--stats">
          <img src={starImg} className="card--star" alt="/" />
          <span>{props.stats.rating}</span>
          <span className="gray">({props.stats.reviewCount}) • </span>
          <span className="gray">{props.location}</span>
        </div>
        <p className="card--title">{props.title}</p>
        <p className="card--price">
          <span className="bold">From ${props.price}</span> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
