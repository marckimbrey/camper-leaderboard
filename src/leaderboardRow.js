import React from "react";

export default (props) => {
  return (
    <tr>
      <td>{props.camper.username}</td>
      <td>{props.camper.recent}</td>
      <td>{props.camper.alltime}</td>
    </tr>
  );
}
