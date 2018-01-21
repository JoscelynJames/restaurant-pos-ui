import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components
import TablesPage from './Component/TablesPage/TablesPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={TablesPage} />
      </div>
    );
  }
}

export default App;
