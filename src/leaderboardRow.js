import React from "react";

export default (props) => {
  return (
    <tr>
      <td>{props.camper.name}</td>
      <td>{props.camper.lastMonth}</td>
      <td>{props.camper.AllTime}</td>
    </tr>
  );
}
