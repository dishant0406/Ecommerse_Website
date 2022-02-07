import { Homepage } from './page/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const Hatspage = () => (
  <div>
    <h1>
      HELLO WORLD THIS IS A HATSPAGE
    </h1>
  </div>
)

function App() {
  return (
    <div className='app'>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop/hats' component={Hatspage} />
      </Switch>
    </div>
  );
}

export default App;
