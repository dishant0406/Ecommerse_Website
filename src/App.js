import { Homepage } from './page/homepage/homepage.component';
import Shop from './shop/shop.component';
import { Switch, Route } from 'react-router-dom';
import SignInAndSignUpPage from './page/signin-and-signup-page/sign-in-up-page.component';
import Header from './component/header-item/header.component';
import './App.css';



function App() {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/sign' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
