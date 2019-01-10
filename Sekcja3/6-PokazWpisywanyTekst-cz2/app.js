class App extends React.Component {
  state = {
    value: ""
  }

  handleChange = (e) => {
    console.log("Zawartość w evencie: " + e.target.value);
    console.log("Zawartość value przed setState: " + this.state.value);
    this.setState({
      value: e.target.value
    })
    console.log("Zawartość value po setState: " + this.state.value);
  }

  handleClick = () => {
    this.setState({
      value: ""
    })
  }

  render() {
    console.log("Zawartość value w trakcie metody render: " + this.state.value);
    return (
      <React.Fragment>
        <input value={this.state.value} placeholder="wpisz..." onChange={this.handleChange} type="text" />
        <button onClick={this.handleClick}>Reset</button>
        <h1 className="title">{this.state.value.toUpperCase()}</h1>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))