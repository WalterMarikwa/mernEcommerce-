import React from 'react';
import httpClient from './components/httpClient';
import Footer from './components/utility/Footer';
import Home from './Site_pages/Home';
import Contact from './Site_pages/Contact';
import Nav from './components/utility/Nav';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Products from './Site_pages/Products';
import Admin from './components/admin/Admin';
import LogIn from './components/views/LogIn';
import LogOut from './components/views/LogOut';
import SignUp from './components/views/SignUp';

class App extends React.Component {
  state = { currentUser: httpClient.getCurrentUser() }

	onLoginSuccess(user) {
		this.setState({ currentUser: httpClient.getCurrentUser() })
	}

	logOut() {
		httpClient.logOut()
		this.setState({ currentUser: null })
  }
  
  render() { 
    const {currentUser} = this.state
    return ( 
      <Router>
        <div className="App">
          <Nav currentUser={currentUser} />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route path="/contact" component={Contact} />

          <Route path="/login" render={(props) => {
						return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
					}} />

          <Route path="/logout" render={(props) => {
						return <LogOut onLogOut={this.logOut.bind(this)} />
					}} />

          <Route path="/signup" render={(props) => {
						return <SignUp {...props} onSignUpSuccess={this.onLoginSuccess.bind(this)} />
					}} />

          <Route path="/admin" render={() => {
						return currentUser
							? <Admin />
							: <Redirect to="/login" />
					}} />
          </Switch>
          <Footer />
        </div>
      </Router>
     );
  }
}
 
export default App;