import React from 'react';
import FeedPage from './Component/FeedPage';
import LoginPage from './Component/LoginPage';
import SignupPage from './Component/SignupPage';
import ChangePasswordPage from './Component/ChangePasswordPage'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'antd/dist/antd.css';
import './Style/App.css';

class App extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/changepassword" component={ChangePasswordPage} />
          <Route path="/" component={FeedPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
