
// import './App.css';
// import AddTransaction from './component/AddTransaction';
// import Balance from './component/Balance';
// import Header from './component/Header';
// import IncomeExpense from './component/IncomeExpense';
// import TransactionList from './component/TransactionList';
// import { GlobalProvider } from './context/GlobalState';

// function App() {
//   return (
//     <GlobalProvider>
//       <Header />
//       <Balance />
//       <IncomeExpense />
//       <TransactionList />
//       <AddTransaction />
//     </GlobalProvider>

//   );
// }

// export default App;

import './Aap.css';
import React from 'react';
import { Provider } from 'react-redux';
import Store from "./Store";



function App() {
  return (
    <Provider Store={Store}>
      <h1>Hello world</h1>
    </Provider>


  );

}

export default App;
