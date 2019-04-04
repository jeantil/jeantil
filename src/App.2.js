// Implem 2 : Syntaxe à base de composant de type classe
// => Chargement dynamique du composant exposé par
//    l'export nommé "Content" depuis le module "Content"
import React, { Component } from "react";

const Loading = () => <div>Loading...</div>;

class App extends Component {
  state = { content: <Loading /> };

  async componentDidMount() {
    const { MonComposant } = await import("./MonComposant");
    this.setState({ content: <MonComposant name="Implem 2 (App.2.js)" /> });
  }

  render() {
    const { content } = this.state;
    return <div className="App">{content}</div>;
  }
}

export default App;
