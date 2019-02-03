class Clock extends React.Component {

  state = {
    time: this.getTime()
  }

  getTime() {
    const currentTime = new Date();
    // console.log(currentTime);
    return ({
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
    }

    )
  }

  setTime() {
    // console.log(this);
    const time = this.getTime()
    this.setState({ time })
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setTime(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { hours, minutes, seconds } = this.state.time
    return (
      <div>
        {hours} : {minutes} : {seconds}
      </div>
    )
  }
}


ReactDOM.render(<Clock />, document.getElementById('root'))
