import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'
import './LoginLayout.css'
import { withRouter } from 'react-router'
import LoginFormComponent from '../../Component/LoginFormComponent'
import SignupFormComponent from '../../Component/SignupFormComponent'

const viewList = [
  {
    pathname: "/login",
    component: <LoginFormComponent></LoginFormComponent>
  },
  {
    pathname: "/login/signup",
    component: <SignupFormComponent></SignupFormComponent>
  }
]

class loginLayout extends Component {
  render() {
    const foundView = viewList.find(el => el.pathname === this.props.history.location.pathname)
    return (
      <div className="bg">
        <Row className="login-main" justify="center" align="middle">
          <Col span={10} >
            <Card className="login-card" title="Salak Admin Panel" bordered={false}>
              {foundView?.component}
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default withRouter(loginLayout)