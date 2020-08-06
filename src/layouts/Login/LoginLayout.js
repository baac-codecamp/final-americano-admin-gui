import React, { Component } from 'react'
import { Row, Col, Card, Form, Input, Button } from 'antd'
import './login-layout.css'
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

export default class loginLayout extends Component {
  render() {
    return (
      <div className="login-layout">
        Lay Login
        <Row className="login-main" justify="center" align="middle">
          <Col span={24}>
            <Card className="login-card" title="Salak Admin Panel" bordered={false}>
              <Form {...layout} name="basic" initialValues={{ remember: true }}>
                <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                  <Input />
                </Form.Item>

                <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                  <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    Login
                  </Button>
                  <Button type="primary" style={{ margin: '0px 50px' }} htmlType="submit">
                    Signup
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
