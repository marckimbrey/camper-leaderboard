import React from "react";

export default (props) => {
  return (
    <tr className={props.id % 2 === 0 ? "row even-row": "row odd-row" }>
      <td>{props.id}</td>
      <td>{props.camper.username}</td>
      <td>{props.camper.recent}</td>
      <td>{props.camper.alltime}</td>
    </tr>
  );
}
