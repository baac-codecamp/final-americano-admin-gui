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
let btn;



class FileReader extends React.Component {
    constructor() {
      super();
      this.state = {
        csvfile: undefined
      };
      this.updateData = this.updateData.bind(this);
    }
  
    handleChange = event => {
      this.setState({
        csvfile: event.target.files[0]
      });
    };
  
    importCSV = () => {
    //   const { csvfile } = this.state;
    //   Papa.parse(csvfile, {
    //     complete: this.updateData,
    //     header: true
    //   });
    };
  
    updateData(result) {
      var data = result.data;
      console.log(data);
    }
  
    render() {
      console.log(this.state.csvfile);
      return (
        <div className="App">
          <h2>Import File</h2>
          <input
            className="csv-input"
            type="file"
            ref={input => {
              this.filesInput = input;
            }}
            name="file"
            placeholder={null}
            onChange={this.handleChange}
          />
          <p />
          <button onClick={this.importCSV}> Upload now!</button>
        </div>
      );
    }
  }


class AdminPage extends React.Component {
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
                        <Menu.Item key="9" icon={<FileOutlined />}>
                            Import File
            </Menu.Item>

                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding:0, minHeight: 90,margin: '0 16px' }}> 
                    <img src={logo}></img>
                    </Header>
                    
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                                
                        </Breadcrumb>

                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                
                        <FileReader></FileReader>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>BAAC©2020</Footer>
                </Layout>
            </Layout>
        );
    }
}


export default AdminPage;