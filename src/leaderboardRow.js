import React from "react";

export default (props) => {
  return (
    <tr className={props.id % 2 === 0 ? "row even-row": "row odd-row" }>
      <td>{props.id}</td>
      <td  className="username">
        <a href={`https://freecodecamp.com/${props.camper.username}`}>
          <img
            src={props.camper.img}
            alt={`${props.camper.username} profile pic`}
            className="profile-pic"
          />
          <span>{props.camper.username}</span>
        </a>
      </td>
      <td>{props.camper.recent}</td>
      <td>{props.camper.alltime}</td>
    </tr>
  );
}
