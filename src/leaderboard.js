import React from "react";
import LeaderBoardRow from "./leaderboardRow";

export default (props) => {
  const recent = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
  const allTime = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
  let rows = [];
   props.users.forEach((camper) => {
     rows.push(<LeaderBoardRow camper={camper} key={camper.username} />);
   });

  return (
    <table>
      <thead>
        <tr>
          <th>Camper</th>
          <th><a href="#" onClick={() => {props.fetchNewData(recent)}} >Recent</a></th>
          <th><a href="#" onClick={() => {props.fetchNewData(allTime)}} >All Time</a></th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}
