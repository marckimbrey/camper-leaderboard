import React, { Component } from 'react';

import LeaderBoard from "./leaderboard";
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {users: []};
    this.updateTable("https://fcctop100.herokuapp.com/api/fccusers/top/recent");
  }

  updateTable(url) {
    fetch(url, {method: "GET"}).then((response) => {
        return response.json();
      }).then((val) => {
        this.setState({users: val});
    })
    // let req = new XMLHttpRequest();
    // req.open("GET", url, true);
    // req.send(null);
    // this.setState(req);

  }
  render() {
    return (
      <div className="App">
        <LeaderBoard test={this.state.users}/>
      </div>
    );
  }
}

export default App;
