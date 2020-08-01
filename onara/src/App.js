import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import './main.styles.scss';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.js';
import SignIn from './pages/signin/signin';
import SignUp from './pages/signin/sign-up';
import Nav from './components/nav/nav';
import Nav2 from './components/nav-two/nav-two';

import { auth, createUserProfileDocument } from './firebase-utils/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
  return (
    <div>
    < Nav2 />
    < Nav />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route  exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignIn />
              )
            }/>
      <Route  exact
            path='/signup'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignUp />
              )
            }/>
    </Switch>
  </div>
  );
  }
}


const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);