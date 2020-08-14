import React from "react";
import axios from "axios";
import { Form, Input, Button, Row, Col, Alert } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

class SignupPage extends React.Component {
  constructor() {
    super();
    this.state = {
      alertMessage: "",
      alertType: "",
    };
  }

  onFinish = async (values) => {
    const user = {
      username: values.username,
      password: values.password,
      //   password: btoa(values.password),
      fullname: values.fullname,
    };

    let data = await axios
      .post(`https://americano-api.topwork.asia/api/signup`, user)
      .then((res) => {
        this.setAlert(res.data.response_message, "success");
        window.location.replace("/login");
      })
      .catch((error) => {
        this.setAlert(error.response.data.response_message, "error");
      });
  };

  setAlert = (message, type) => {
    this.setState({
      alertMessage: message,
      alertType: type,
    });
  };

  render() {
    const layout = { labelCol: { span: 8 }, wrapperCol: { span: 16 } };
    return (
      <div>
        <Row justify="center" align="top" style={{ paddingTop: "100px" }}>
          <Col className="gutter-row" span={8}>
            <Form
              {...layout}
              name="signup"
              onFinish={this.onFinish}
              scrollToFirstError
            >
              <div className="logo-m center">
              {/* <UserAddOutlined /> */}
              </div>
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: "Please input username!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        "The two passwords that you entered do not match!"
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                label="Name"
                name="fullname"
                rules={[{ required: true, message: "Please input name!" }]}
              >
                <Input />
              </Form.Item>

              <div className="center mb-10">
                <Button type="primary" htmlType="submit">
                  Sign Up
                </Button>
              </div>
              <div>
                {this.state.alertMessage !== "" && (
                  <Alert
                    message={this.state.alertMessage}
                    type={this.state.alertType}
                    showIcon
                  />
                )}
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SignupPage;
