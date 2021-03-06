import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Home} from './pages/Home';
import {Visualizar} from './pages/Visualizar';
import {Cadastrar} from './pages/Cadastrar';
import { Editar } from './pages/Editar';

import { Menu } from './components/Menu';

function App() {
  return (
    <div>
      <Menu />
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/visualizar/:id" component={Visualizar}/>
          <Route path="/cadastrar" component={Cadastrar}/>
          <Route path="/editar" component={Editar}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
