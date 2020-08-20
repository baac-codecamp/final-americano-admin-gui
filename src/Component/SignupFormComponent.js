import React, { Component } from 'react';
import axios from "axios";
import { Form, Input, Button, Alert } from "antd";
import { Link } from 'react-router-dom';

class SignupFormComponent extends Component {

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

        await axios
            .post(`https://americano-salak-api.topwork.asia/admin/signup`, user)

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
                    rules={[{ required: true, message: "Please input name!" }]}>
                    <Input />
                </Form.Item>


                <div style={{ margin: '0px 130px ' }} >
                    <Button type="primary" htmlType="submit" style={{ margin: '20px 20px ' }} shape="round">
                        Sign Up
                    </Button>
                    <Button shape="round">
                        <Link to="/login">Back</Link>
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

            </Form >

        );
    }
}

export default SignupFormComponent;