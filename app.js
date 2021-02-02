//react components need to have a capital letter
const Header = (props) => {
  console.log(props);
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
};
//can also be written like this:
//const Header=()=>(<header>...</header>);
class Counter extends React.Component {
  /*  constructor() {
        super();
        this.state = {
            score: 0
        };
    } */
  state = { score: 0 };

  incrementScore() {
    //console.log('this icrements');
    this.setState((prevState) => {
      return {
        score: prevState.score + 1,
      };
    });
  }

  decrementScore = () => {
    //console.log('this decrements');
    this.setState((prevState) => {
      return {
        score: prevState.score - 1,
      };
    });
  };

  render() {
    return (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={this.decrementScore}
        >
          -
        </button>
        <span className="counter-score">{this.state.score}</span>
        <button
          className="counter-action increment"
          onClick={() => this.incrementScore()}
        >
          +
        </button>
      </div>
    );
  }
}
const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={()=>props.removePlayer(props.id)}>x</button>
        {props.name}
      </span>
      <Counter />
    </div>
  );
};

class App extends React.Component {
  state = {
    players: [
      {
        name: "John",
        id: 1,
      },
      {
        name: "Kate",
        id: 2,
      },
      {
        name: "Harry",
        id: 3,
      },
    ],
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p) => p.id !== id),
      };
    });
  };
  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />

        {/* Players list */}
        {this.state.players.map((player) => (
          <Player
            name={player.name}
            id={player.id}
            key={player.id.toString}
            removePlayer={this.handleRemovePlayer}
          />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
