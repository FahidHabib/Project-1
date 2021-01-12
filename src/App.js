import React from 'react';
import './App.css';

//Import Components

import Header from './Components/Header';
import Balence from './Components/Balence';
import BalenceSummry from './Components/BalenceSummry';
import TransactionHistory from './Components/TransactionHistory';
import AddTransaction from './Components/AddTransaction';

// import GlobleProvider

import { GlobleProvider } from './context/GlobleState';

function App() {
  return (
    <GlobleProvider>
      <Header/>
      <div>
        <Balence/>
        <BalenceSummry/>
        <TransactionHistory/>
        <AddTransaction/>
      </div>
      </GlobleProvider>
  );
}

export default App;
