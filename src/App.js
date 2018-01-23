import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components
import TablesPage from './Component/TablesPage/TablesPage';
import OpenCheck from './Component/OpenCheck/OpenCheck';
import ClosedChecks from './Component/TablesPage/ClosedChecks/ClosedChecks';
import ClosedCheck from './Component/ClosedCheck/ClosedCheck';
import Nav from './Component/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={TablesPage} />
        <Route path="/check" component={Nav} />
        <Route path="/check/:id" exact component={OpenCheck} />
        <Route path="/check/closed" exact component={ClosedChecks}/>
        <Route path="/check/closed/:id" exact component={ClosedCheck}/>
      </div>
    );
  }
}

export default App;
