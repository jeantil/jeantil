// Implem 4 : Syntaxe à base de composant fonctionnel
// => Chargement dynamique du composant exposé par
//    l'export nommé "Content" depuis le module "Content"
//    ...mais en utilisant directement la promesse exposée
import React, { useState, useEffect } from "react";

const Loading = () => <div>Loading...</div>;

const App = () => {
  const [content, setContent] = useState(<Loading />);
  useEffect(() => {
    import("./MonComposant").then(({ MonComposant }) => {
      setContent(<MonComposant name="Implem 4 (App.4.js)" />);
    });
  }, []);
  return <div className="App">{content}</div>;
};

export default App;