class App extends React.Component {
  state = {
    value: ""
  }

  handleInputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      value: e.target.value
    })
  }

  handleResetClick = () => {
    this.setState({
      value: ""
    })
  }

  render() {
    return (
      <React.Fragment>
        <input value={this.state.value} placeholder="wpisz..." onChange={this.handleInputChange} type="text" />
        <button onClick={this.handleResetClick}>Reset</button>
        <h1 className="title">{this.state.value.toUpperCase()}</h1>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))