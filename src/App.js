import React, { Component } from 'react';

import LeaderBoard from "./leaderboard";
class App extends Component {
  constructor() {
    super();
    this.state = {users: []};
    this.updateTable("https://fcctop100.herokuapp.com/api/fccusers/top/recent");
    this.updateTable = this.updateTable.bind(this);
  }

  updateTable(url) {
    fetch(url, {method: "GET"}).then((response) => {
      return response.json();
    }).then((val) => {
      return this.setState({users: val}, () => {});
    });
  }
  render() {
    return (
      <div className="App">
        <LeaderBoard
          users={this.state.users}
          fetchNewData={this.updateTable}
        />
      </div>
    );
  }
}

export default App;
