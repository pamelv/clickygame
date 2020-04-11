import React from "react";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { characters, score: 0, highestScore: 0, message: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  updateStatus(characterId) {
    console.log(characterId);
    this.state.characters.map((character) => {
      if (character.id === characterId && character.clicked !== true) {
        console.log(character);
        character.clicked = true;
        this.setState({ message: "You guessed correct!" });
        this.correctGuess();
      } else if (character.id === characterId && character.clicked !== false) {
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
    this.state.characters.map((character) => {
      character.clicked = false;
    });
  }

  handleClick(characterId) {
    this.updateStatus(characterId);
    this.setState({
      characters: this.shuffle(this.state.characters),
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
      <div className="body">
        <h1 className="title">CLICKY GAME</h1>
        <h3>{this.state.score}</h3>
        <h1>{this.state.highestScore}</h1>
        <h4>{this.state.message}</h4>
        <div className="row">
          {this.state.characters.map((character) => (
            <CharacterCard
              key={character.id}
              id={character.id}
              image={character.image}
              handleClick={this.handleClick}
              status={character.status}
              name={character.name}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
