// Jeden komponent z dwoma różnymi tekstami
// Destrukturyzacja
// Funkcja poza komponentem

const displayMessage = (isConfirmed, isFormSubmitted) => {
  if (isFormSubmitted) {
    if (isConfirmed) {
      return <ValidationMessage txt="Możesz obejrzeć film. Zapraszamy!" />
    } else {
      return <ValidationMessage txt="Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!" />
    }
  } else { return null }
}

const ValidationMessage = (props) => {
  const { txt } = props
  return (
    <p>{txt}</p>
  )
}
// const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>;

// const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!</p>;

class TicketShop extends React.Component {

  state = {
    isConfirmed: false,
    isFormSubmitted: false
  }

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false,
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true
      })
    }
  }

  // displayMessage = () => {
  //   if (this.state.isFormSubmitted) {
  //     if (this.state.isConfirmed) {
  //       return <ValidationMessage txt="Możesz obejrzeć film. Zapraszamy!" />
  //     } else {
  //       return <ValidationMessage txt="Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!" />
  //     }
  //   } else { return null }
  // }
  render() {
    const { isConfirmed, isFormSubmitted } = this.state

    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input type="checkbox" id="age" onChange={this.handleCheckboxChange} checked={isConfirmed} />
          <label htmlFor="age">Mam co najmniej 16 lata</label>
          <br />
          <button type="submit">Kup bilet</button>
        </form>
        {displayMessage(isConfirmed, isFormSubmitted)}
      </>
    )
  }
}

ReactDOM.render(<TicketShop />, document.getElementById('root'))