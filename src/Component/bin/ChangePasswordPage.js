import React from "react";
import HeaderPage from "./Header";
import BarMenu from "./BarMenu";
import ListLink from "./ListLink";
import data from "../Data/Profile.json";
import { Link } from "react-router-dom";
import { Card, Divider, Button, Avatar, Input, Layout, Form } from "antd";

class ChangePasswordPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { Content } = Layout;
    const layout = { labelCol: { span: 8 }, wrapperCol: { span: 14 } };
    const tailLayout = { wrapperCol: { offset: 8, span: 16 } };
    return (
      <div>
        <Layout className="layout">
          <Content
            className="site-layout"
            style={{ padding: "0 50px", marginTop: 64 }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 380, margin: "16px 0" }}
            >
              {/* <HeaderProfile
                profilename={data.profilename}
                isMyProfile={true}
              /> */}
              <Divider />
              <Card title="Change Password" className="mb-20">
                <Form {...layout} name="login">
                  <Form.Item
                    label="Old Password"
                    name="oldpassword"
                    rules={[
                      {
                        required: true,
                        message: "Please input your old password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item
                    label="New Password"
                    name="newpassword"
                    rules={[
                      {
                        required: true,
                        message: "Please input your new password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item
                    label="Confirm New Password"
                    name="confirmnewpassword"
                    rules={[
                      {
                        required: true,
                        message: "Please input your confirm new password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item {...tailLayout}>
                    <Button type="primary" style={{ marginRight: "10px" }}>
                      {/* <Link to="/"></Link> */}
                      เปลี่ยนรหัสผ่าน
                    </Button>
                    <Button  style={{ marginRight: "10px" }}>
                      <Link to="/">ย้อนกลับ</Link>
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default ChangePasswordPage;
