import React from 'react';
import { observer } from 'mobx-react';
import './App.css';
import HelloWord from './app/HelloWord';

function App() {
  return (
    <div className="App">
      <HelloWord />
    </div>
  );
}

export default observer(App);
