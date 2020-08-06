import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Form, Input, Button, Row, Col, Alert } from 'antd'
import { DoubleRightOutlined } from '@ant-design/icons'
import logo from '../images/logo1.png'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      alertMessage: '',
      alertType: '',
    }
  }

  onFinish = async (values) => {
    const user = {
      username: values.username,
      password: values.password,
      //   password: btoa(values.password),
    }

    let data = await axios
      .post(`https://americano-api.topwork.asia/api/loginUser`, user)
      .then((res) => {
        this.setAlert(res.data.response_message, 'success')
        window.location.replace('/ImportFileReward')
        console.log(res.data.response_data)
        localStorage.setItem('user', JSON.stringify(res.data.response_data))
      })
      .catch((error) => {
        this.setAlert(error.response.data.response_message, 'error')
      })
  }

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  setAlert = (message, type) => {
    this.setState({
      alertMessage: message,
      alertType: type,
    })
  }

  render() {
    const layout = { labelCol: { span: 6 }, wrapperCol: { span: 14 } }
    const tailLayout = { wrapperCol: { offset: 6, span: 16 } }
    return (
      <div>
        <Row justify="center" align="top" style={{ paddingTop: '100px' }}>
          {/* <Col span={3}>
            
          </Col> */}
          <Col span={8}>
            <Form {...layout} name="login" initialValues={{ remember: true }} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
              <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input />
              </Form.Item>

              <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button style={{ marginRight: '10px' }}>
                  <Link to="/signup">Sign Up</Link>
                </Button>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
              <Form.Item>
                <div className="mt-10">
                  {this.state.alertMessage !== '' && <Alert message={this.state.alertMessage} type={this.state.alertType} showIcon />}
                </div>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Login
