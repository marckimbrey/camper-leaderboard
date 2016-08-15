import React from "react";
import LeaderBoardRow from "./leaderboardRow";

export default (props) => {
  const recent = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
  const allTime = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
  const rows = props.users.map((camper, index) => {
     return <LeaderBoardRow camper={camper} key={index} id={index + 1} />;
   });

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="4" >Camper Leaderboard</th>
        </tr>
        <tr>
          <th>#</th>
          <th>Camper</th>
          <th><a href="#" onClick={() => {props.fetchNewData(recent)} } >Recent</a></th>
          <th><a href="#" onClick={() => {props.fetchNewData(allTime)} } >All Time</a></th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}
