import {Routes, Route} from 'react-router-dom';

import Header from "./components/Header";
import Bills from "./pages/Bills";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import OrderList from "./pages/OrderList";

function App() {
  return (
    <>
      <Header />
      <div className="auto-container">
        <Routes>
          <Route path='/' Component={Dashboard}/>
          <Route path='/order-list' Component={OrderList}/>
          <Route path='/bills' Component={Bills}/>
          <Route path='/history' Component={History}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
