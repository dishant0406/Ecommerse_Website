import { Homepage } from './page/homepage/homepage.component';
import Shop from './shop/shop.component';
import { Switch, Route } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <div className='app'>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
