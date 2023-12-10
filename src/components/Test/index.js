// == Import
import { Route, Switch, useLocation } from 'react-router-dom';
import IndexPage from 'src/pages/IndexPage';
import NotFoundPage from 'src/pages/NotFoundPage';
import './styles.scss';

// == Composant
const Test = () => {
  return (
    <div className="app">
      <header></header>
      <main>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <footer></footer>
    </div>
  );
};

// == Export
export default Test;
