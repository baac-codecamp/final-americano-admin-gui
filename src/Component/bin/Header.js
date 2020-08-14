import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import ListLink from "./ListLink";
import { Layout, Menu, Dropdown, Avatar, Button } from "antd";
import { FacebookFilled, DownOutlined, UserOutlined } from "@ant-design/icons";
import { GetName, Logout } from "../helpers";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      isLogout: false,
    };
  }

  componentDidMount() {
    this.setState({
      fullName: GetName(),
    });
  }

  handleLogout = () => {
    Logout();
    this.setState({
      isLogout: true,
    });
  };

  render() {
    const { Header } = Layout;
    const menu = (
      <Menu>
        
        <Menu.Item>
          <Link to="/changepassword">เปลี่ยนรหัสผ่าน</Link>
        </Menu.Item>

        <Menu.Item>
          <Button type="link" onClick={this.handleLogout}>
            ออกจากระบบ
          </Button>
        </Menu.Item>
      </Menu>
    );
    if (this.state.isLogout) {
      return <Redirect to="/login" />;
    }
    return (
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo">
          <Link to="/">
           
          </Link>
        </div>
        <ListLink />
        <div className="right nav-profile">
          <span>
            <Link to="/profile">
              {this.state.fullName}
              <Avatar icon={<UserOutlined />} className="ml-10 mr-10" />
            </Link>
          </span>
          <Dropdown overlay={menu}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <DownOutlined />
            </a>
          </Dropdown>
        </div>
      </Header>
    );
  }
}

export default Header;
