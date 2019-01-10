//Przycisk - po kliknięciu dodawana jest litera do tekstu
class App extends React.Component {

  state = {
    text: "",
    number: 2
  }

  handleClick = () => {
    // this.state.text += "a";
    // console.log(this.state.text);

    const letter = "a"
    this.setState({
      text: this.state.text + letter
    })
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>Dodaj "A"</button>
        <h1>{this.state.text}</h1>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))