import React from "react";
import LeaderBoardRow from "./leaderboardRow";

export default (props) => {
  let rows = [];
  props.test.forEach((camper) => {
    rows.push(<LeaderBoardRow camper={camper} key={camper.name} />);
  });
  return (
    <table>
      <thead>
      <tr>
        <th>Camper</th>
        <th>Last Month</th>
        <th>All Time</th>
      </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}
