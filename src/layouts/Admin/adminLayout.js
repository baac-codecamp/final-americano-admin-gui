import { Button, Layout, Menu, Breadcrumb } from 'antd';
import { FileAddOutlined, UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import './AdminLayout.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import ImportRewardFileComponent from '../../Component/ImportRewardFileComponent'
import ImportCusFileComponent from '../../Component/ImportCusFileComponent'
import { GetName } from '../../utils/helpers'

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const viewList = [
  {
    pathname: "/admin/reward",
    component: <ImportRewardFileComponent></ImportRewardFileComponent>
  },
  {
    pathname: "/admin/customer",
    component: <ImportCusFileComponent></ImportCusFileComponent>
  }
]

class AdminLayout extends Component {
  state = {
    collapsed: false,
  };
  componentDidMount() {
    this.setState({
      fullName: GetName(),
    });
  }
  render() {
    const foundView = viewList.find(el => el.pathname === this.props.history.location.pathname)
    console.log(GetName())
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu className="set-position-button" theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1"  icon={<UserOutlined />}>{this.state.fullName}</Menu.Item>
            <Button className="set-position-button" shape="round" >
              <Link to="/login">
                Logout
                  </Link>
            </Button>
          </Menu>

        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item> <FileAddOutlined /><Link to="/admin/reward">Import Reward File</Link></Menu.Item>
              <Menu.Item> <FileAddOutlined /><Link to="/admin/customer">Import Customer File</Link></Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '10px 10px 10px' }}>

            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 485,
              }}
            >
              {foundView?.component}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
export default withRouter(AdminLayout)