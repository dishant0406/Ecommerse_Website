import { Homepage } from './page/homepage/homepage.component';
import Shop from './shop/shop.component';
import { Switch, Route } from 'react-router-dom';
import Header from './component/header-item/header.component';
import './App.css';



function App() {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
