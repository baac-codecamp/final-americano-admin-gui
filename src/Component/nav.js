import { Layout, Menu, Breadcrumb } from 'antd';
import logo from "../images/logo1.png";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-dom';
import { GetName, Logout } from "../helpers";
import Papa from 'papaparse'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
let btn;

class SlideBar extends React.Component {
  state = {
    collapsed: false,
  };

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

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (

         <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu key="sub1" icon={<UserOutlined />} title={this.state.fullName}>
              <Menu.Item key="1">
                <a href="/changepassword">Change Password</a>
              </Menu.Item>
              <Menu.Item key="2">
                <a href="/login">Logout</a>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="3" icon={<FileOutlined />}>
            <a href = "/ImportFIleReward">
              Import Reward File
              </a>
            </Menu.Item>
            <Menu.Item key="4" icon={<FileOutlined />}>
            <a href = "/ImportFIleCustomer">
              Import Customer File
              </a>
            </Menu.Item>
          </Menu>
        </Sider>

    );
  }
}


export default SlideBar;