import { Homepage } from './page/homepage/homepage.component';
import Shop from './shop/shop.component';
import { Switch, Route } from 'react-router-dom';
import SignInAndSignUpPage from './page/signin-and-signup-page/sign-in-up-page.component';
import Header from './component/header-item/header.component';
import { auth } from './component/firebase/firebase.utils';
import './App.css';
import React from 'react';



class App extends React.Component {


  constructor() {

    super();

    this.state = {
      currentUser: null,
    }
  }

  unscribeFromAuth = null

  componentDidMount() {

    this.unscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unscribeFromAuth();
  }

  render() {
    return (
      <div className='app' >
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/sign' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
