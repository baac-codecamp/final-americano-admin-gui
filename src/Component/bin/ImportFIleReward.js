import { Layout, Menu, Breadcrumb } from 'antd'
import HeaderAdmin from '../Component/HeaderAdmin'
import logo from '../images/logo1.png'
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-dom'
import { GetName, Logout } from '../helpers'
import SlideBar from './nav'
import Papa from 'papaparse'
import ImportFileNew from './ImportFileNew'
const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu
let btn

class FileReader extends React.Component {
  constructor() {
    super()
    this.state = {
      csvfile: undefined,
    }
    this.updateData = this.updateData.bind(this)
  }

  handleChange = (event) => {
    this.setState({
      csvfile: event.target.files[0] || '0',
    })
  }

  importCSV = () => {
    alert('TEST')
    console.log(this.state)
    const { csvfile } = this.state
    Papa.parse(csvfile, {
      complete: this.updateData,
      header: true,
    })
  }

  updateData(result) {
    var data = result.data
    console.log(data)
  }

  render() {
    console.log(this.state.csvfile)
    return (
      <div>
        <h2>Import Reward File </h2>
        <input
          className="csv-input"
          type="file"
          ref={(input) => {
            this.filesInput = input
          }}
          name="file"
          placeholder={null}
          onChange={this.handleChange}
        />
        <p />
        <button onClick={this.importCSV}> Upload now</button>
      </div>
    )
  }
}

class ImportFIleReward extends React.Component {
  state = {
    collapsed: false,
  }

  componentDidMount() {
    this.setState({
      fullName: GetName(),
    })
  }

  handleLogout = () => {
    Logout()
    this.setState({
      isLogout: true,
    })
  }

  onCollapse = (collapsed) => {
    console.log(collapsed)
    this.setState({ collapsed })
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SlideBar></SlideBar>
        <Layout className="site-layout">
          <HeaderAdmin></HeaderAdmin>

          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {/* <FileReader></FileReader> */}
              <ImportFileNew></ImportFileNew>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>BAAC©2020</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default ImportFIleReward
