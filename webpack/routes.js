import React from 'react';
import { IndexRoute, Route, browserHistory } from 'react-router';
import App from './containers/App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';
import Login from './components/auth/Login';
import Admin from './components/Admin';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import { handleLogout } from './components/auth/actions';

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth,
  predicate: auth => auth.isAuthenticated,
  redirectAction: () => handleLogout(browserHistory),
  wrapperDisplayName: 'UserIsAuthenticated'
})

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />
      <Route path="login" component={Login} />
      <Route path="admin" component={UserIsAuthenticated(Admin)} />
    </Route>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)