import React, { Component } from 'react'
import { Modal, Button, Table, } from 'antd'
import CreateNews from './CreateNews'
import { connect } from 'react-redux'
import { clearTempNews } from '../actions'
import _axios from 'axios'

const columns = [
  {
    title: 'ID',
    dataIndex: '_id',
    key: '_id',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'ImgUrl',
    dataIndex: 'imgUrl',
    key: 'imgUrl',
    render: (text) => <img style={{ width: '150px', height: '150px' }} src={text}></img>,
  },
  {
    title: 'Description',
    dataIndex: 'desc',
    key: 'desc',
  },
  {
    title: 'Create Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text) => <div>{new Date(text).toLocaleString()}</div>,
  },
]

class ImportNewsComponent extends Component {
  componentDidMount() {
    // get listNews
    this.getListNews()
  }

  getListNews = () => {
    _axios
      .get(`https://americano-salak-api.topwork.asia/front/getNews`)
      .then((res) => {
        this.setState({ ...this.state, ListNews: res.data.response_data.ListNews })
      })
      .catch((error) => {
        // alert('Upload Failed')
      })
  }

  state = { visible: false, ListNews: [] }

  showModal = () => {
    this.setState({
      visible: true,
    })
  }

  handleOk = (e) => {
    this.setState({
      visible: false,
    })
    this.insertNews()
    this.props.dispatch(clearTempNews())
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    })
    this.props.dispatch(clearTempNews())
  }

  insertNews = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const { title, imgUrl, desc } = this.props.news

    const currHeader = {
      Authorization: 'Bearer ' + user.token,
      'Content-Type': 'application/json',
    }

    const currBody = {
      title,
      imgUrl,
      desc,
    }

    _axios
      .post(`https://americano-salak-api.topwork.asia/admin/auth/addNews`, currBody, { headers: currHeader })
      .then((res) => {
        alert('Add News Successed')
        this.getListNews()
        //this.setAlert(res.data.response_message, 'success')
        //window.location.replace('/admin/news')
      })
      .catch((error) => {
        // alert('Upload Failed')
      })
  }

  render() {
    return (
      <div style={{ margin: '-20px 0px' }}>
        <h2>Import News</h2>
        <Button type="primary" onClick={this.showModal}>
          Add News
        </Button>
        <Modal title="Add News" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
          <CreateNews></CreateNews>
        </Modal>
        <br />
        <hr />
        <Table columns={columns} dataSource={this.state.ListNews} />
      </div>
    )
  }
}

export default connect((state) => state)(ImportNewsComponent)
