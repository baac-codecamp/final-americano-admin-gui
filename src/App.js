import React from 'react'
import Login from './views/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Admin from './views/Admin' 
import 'antd/dist/antd.css'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" exact={true} component={Login}/>
          <Route path="/login/signup" exact={true} component={Login}/>
          <Route path="/admin/reward" exact={true} component={Admin}/>
          <Route path="/admin/customer" exact={true} component={Admin}/>
          <Route path="/admin/news" exact={true} component={Admin}/>
        </Switch>
      </Router>
    )
  }
}

export default App
