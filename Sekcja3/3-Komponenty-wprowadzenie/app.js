// komponent funkcyjny, bezstanowy (stateless)

const Header = () => {
  return <h1>Witaj na stronie</h1>

}

// komponent klasowy, stanowy (stateful)

class Article extends React.Component {
  // state = {
  //   number: 0,
  // }

  render() {
    return (
      <section>

        <h2>Artykuł</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quia beatae consequatur a, modi voluptatibus repudiandae. Optio rem hic quam, ducimus esse qui, itaque, suscipit nemo odio commodi odit aspernatur.</p>
      </section>
    )
  }
}

const Blog = () => {
  return (
    <>
      <Header />
      <Article />
    </>
  )
}

ReactDOM.render(<Blog />, document.getElementById('root'))

