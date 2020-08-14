import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-dom';
import { GetName, Logout } from "../../utils/helpers";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
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
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu key="sub1" icon={<UserOutlined />} title={this.state.fullName}>
              <Menu.Item key="4">
                <a href="/changepassword">Change Password</a>
              </Menu.Item>
              <Menu.Item key="5">
                <a href="/login">Logout</a>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} >
              Import File</Menu.Item>

          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}> <h1><b>IMPORT FILE</b></h1></Header>
              
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}


export default SiderDemo;