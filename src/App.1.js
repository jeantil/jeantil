// Implem 1 : Syntaxe à base de composant de type classe
// => Chargement dynamique du composant exposé par
//    l'export par défaut depuis le module "Content"
import React, { Component } from "react";

const Loading = () => <div>Loading...</div>;

class App extends Component {
  state = { content: <Loading /> };

  async componentDidMount() {
    const module = await import("./MonComposant");
    const MonComposant = module.default;
    this.setState({ content: <MonComposant name="Implem 1 (App.1.js)" /> });
  }

  render() {
    const { content } = this.state;
    return <div>{content}</div>;
  }
}

export default App;
