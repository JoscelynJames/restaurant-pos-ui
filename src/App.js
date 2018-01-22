import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components
import TablesPage from './Component/TablesPage/TablesPage';
import OpenCheck from './Component/OpenCheck/OpenCheck';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={TablesPage} />
        <Route path="/check/:id" component={OpenCheck} />
      </div>
    );
  }
}

export default App;
