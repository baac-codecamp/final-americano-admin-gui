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
import { GetName, Logout } from "../helpers";
import logo from "../images/logo1.png";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class HeaderAdmin extends React.Component {
    state = {
        collapsed: false,
    };

    render() {
        return (
            <Header className="site-layout-background" style={{ padding: 0, minHeight: 90, margin: '0 16px' }}>
                <img src={logo}></img>
            </Header>
        );
    }
}


export default HeaderAdmin;