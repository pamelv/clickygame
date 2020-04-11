import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { friends, score: 0, highestScore: 0, message: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  updateStatus(friendId) {
    console.log(friendId);
    this.state.friends.map((friend) => {
      if (friend.id === friendId && friend.clicked !== true) {
        console.log(friend);
        friend.clicked = true;
        this.setState({ message: "You guessed correct!" });
        this.correctGuess();
      } else if (friend.id === friendId && friend.clicked !== false) {
        this.setState({ message: "Incorrect guess!" });
        this.resetGame();
      }
    });
  }

  correctGuess() {
    this.setState({
      score: this.state.score + 1,
    });
    if (this.state.score >= this.state.highestScore) {
      this.setState({ highestScore: this.state.score });
    }
  }
  resetGame() {
    this.setState({ score: 0 });
    this.state.friends.map((friend) => {
      friend.clicked = false;
    });
  }

  handleClick(friendId) {
    this.updateStatus(friendId);
    this.setState({
      friends: this.shuffle(this.state.friends),
    });
  }

  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  render() {
    return (
      <div>
        <h1 className="title">Clicky Game</h1>
        <h3>{this.state.score}</h3>
        <h1>{this.state.highestScore}</h1>
        <h4>{this.state.message}</h4>
        <Wrapper>
          {this.state.friends.map((friend) => (
            <FriendCard
              key={friend.id}
              id={friend.id}
              image={friend.image}
              handleClick={this.handleClick}
              status={friend.status}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
