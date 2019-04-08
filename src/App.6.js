// Pour le linter je ne sais pas :
// => chez nous, on ne variabilise pas les media queries

// En revanche, on variabilise des propriétés "classiques".
// => Et ça, ça fonctionne, exemple :
// .delivery__prices-card {
//  padding: 6px 12px;
//  background-color: ${theme.primary.background};
//}

// En attendant, il faudrait désactiver cette règle de css-lint mais je n'ai pas le temps de checker.
// => En clair, c'est un bug dans l'extension "styled-jsx-language-server" de vscode
// Dans l'intervalle, tu peux ajouter dans les settings de vscode :
// "css.validate": false

// Pour le reste, j'aurais fait plutôt comme ça :

import React from 'react';
import classnames from 'classnames';
import css from 'styled-jsx/css';

const breakpoints = {
  md: '960px',
  lg: '1280px'
};

const styles = css`
  .heading {
    background: pink;
    padding: 6px 12px;
    text-align: left;
  }
  .heading--center {
    text-align: center;
  }
  .heading--right {
    text-align: right;
  }
  @media (min-width: ${breakpoints.md}) {
    .heading {
      background: cadetblue;
    }
  }
`;

const Heading = ({ tag, align, children, ...props }) => {
  const Tag = tag || 'h1';
  const tagClasses = classnames('heading', {
    'heading--center': align === 'center',
    'heading--right': align === 'right'
  });
  return (
    <Tag {...props} className={tagClasses}>
      {children}
      <style jsx>{styles}</style>
    </Tag>
  );
};

const App = () => (
  <div className="App">
    <Heading tag="h2" align="right">
      <span role="img" aria-label="wave">
        👋
      </span>
      <span>Cédric</span>
    </Heading>
  </div>
);

export default App;
