// Implem 4 : Syntaxe à base de composant fonctionnel
// => Chargement dynamique du composant exposé par
//    l'export nommé "Content" depuis le module "Content"
//    ...mais en utilisant directement la promesse exposée
import React from 'react';

const breakpoints = {
  md: '960px',
  lg: '1280px'
};

// Remplacer le 960px en dur ci-dessous par ${breakpoints['md']} casse le linter :(
// Pour surcharger  le text-align avec des valeurs différentes pour normal et media query.. ? 
// je ne vois aucune solution 'propre' le mieux que j'aie trouvé c'est d'avoir un 
// alignMd et d'utiliser un style jsx dynamique. ou alors de recourir a un jsx "global"
// ce qui tue l'intéret du styled-jsx assez vite.

const H1 = ({ align, children, ...props }) => (
  <h1 {...props} style={{ align }}>
    {children}
    <style jsx>{`
      h1 {
        text-align: center;
      }
      @media (min-width: 960px) {
        h1 {
          text-align: left;
        }
      }
    `}</style>
  </h1>
);

const App = () => {
  return (
    <div className="App">
      <H1 id="foo" align="text-align:left">
        <span role="img" aria-label="wave">
          👋
        </span>{' '}
        cedric
      </H1>
    </div>
  );
};

export default App;
