class ShoppingList extends React.Component {

  state = {
    items1: 'ogórki',
    items2: 'sok',
    items3: 'coś do picia'
  }

  render() {
    return (
      <>
        <h1>Lista zakupów</h1>
        <ul>
          <ItemList name={this.state.items1} example={2 + 2} />
          <ItemList name={this.state.items2} />
          <ItemList name={this.state.items3} />
        </ul>
      </>
    )
  }
}

// const ItemList = (props) => {
//   return (
//     <li>{props.name} - {props.example}</li>
//   )
// }

class ItemList extends React.Component {
  render() {
    return (
      <li>{this.props.name} - {this.props.example}</li>
    )
  }
}





ReactDOM.render(<ShoppingList />, document.getElementById('root'))