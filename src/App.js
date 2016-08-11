import React, { Component } from 'react';

import LeaderBoard from "./leaderboard";
  const test = [
    {name: "Fred", lastMonth: 30, AllTime: 200},
    {name: "Jane", lastMonth: 20, AllTime: 100}
];
class App extends Component {

  render() {
    return (
      <div className="App">
        <LeaderBoard test={test}/>
      </div>
    );
  }
}

export default App;
