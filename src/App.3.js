// Implem 3 : Syntaxe à base de composant fonctionnel
// => Chargement dynamique du composant exposé par
//    l'export nommé "Content" depuis le module "MonComposant"
import React, { useState, useEffect } from "react";

const Loading = () => <div>Loading...</div>;

const loadContent = async f => {
  const { MonComposant } = await import("./MonComposant");
  f(MonComposant);
};

const App = () => {
  const [content, setContent] = useState(<Loading />);
  useEffect(() => {
    loadContent(MonComposant => {
      setContent(<MonComposant name="Implem 3 (App.3.js)" />);
    });
  }, []);
  return <div className="App">{content}</div>;
};

export default App;
