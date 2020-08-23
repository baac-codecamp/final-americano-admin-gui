import React, { Component } from 'react'
import { Form, Input, Alert, Button } from 'antd'
import { Link } from 'react-router-dom'
import _axios from 'axios'
import { UserOutlined, EditOutlined } from '@ant-design/icons'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

class LoginFormComponent extends Component {
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
    await _axios
      .post(`https://americano-salak-api.topwork.asia/admin/login`, user)
      .then((res) => {
        this.setAlert(res.data.response_message, 'success')
        window.location.replace('/sub1/admin/reward')
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
    return (
      <div>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          style={{ margin: 35 }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input placeholder="Username" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password placeholder="Password" prefix={<EditOutlined />} />
          </Form.Item>
          <Form.Item {...tailLayout} style={{ margin: '0px -20px ' }}>
            <Button type="primary" htmlType="submit" shape="round" style={{ margin: '0px 20px' }}>
              Login
            </Button>
            <Button shape="round">
              <Link to="/login/signup">Signup</Link>
            </Button>
          </Form.Item>
          <div>{this.state.alertMessage !== '' && <Alert message={this.state.alertMessage} type={this.state.alertType} showIcon />}</div>
        </Form>
      </div>
    )
  }
}

export default LoginFormComponent
