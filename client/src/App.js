import React from "react";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";
import Nav from "./components/Nav";
import "./App.css";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { characters, score: 0, highestScore: 0, message: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  updateStatus(characterId) {
    this.state.characters.forEach((character) => {
      if (character.id === characterId && character.clicked !== true) {
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
    this.state.characters.forEach((character) => {
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
      <div className="container-fluid">
        <Nav
          score={this.state.score}
          highestScore={this.state.highestScore}
          message={this.state.message}
        />
        <Container className="body">
          <div className="row" style={{ padding: "60px", marginLeft: "0" }}>
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
        </Container>
        <Footer link="https://github.com/pamelv/clickygame" />
      </div>
    );
  }
}

export default App;
