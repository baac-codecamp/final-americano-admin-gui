import React from 'react';
import LoginPage from './Component/LoginPage';
import SignupPage from './Component/SignupPage';
import ChangePasswordPage from './Component/ChangePasswordPage'
import AdminPage from './Component/AdminPage'
import navbar from './Component/nav'
import ImportFIleReward from './Component/ImportFIleReward'
import ImportFIleCustomer from './Component/ImportFileCustomer'
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
          <Route path="/login" exact={true} component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/changepassword" component={ChangePasswordPage} />
          <Route path="*" component={ImportFIleReward} />
          <Route path="/ImportFIleCustomer" component={ImportFIleCustomer}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
