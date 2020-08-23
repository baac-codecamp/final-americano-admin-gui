import React, { Component } from 'react'
import { Modal, Button } from 'antd'
import CreateNews from './CreateNews'
import { connect } from 'react-redux'
import { clearTempNews } from '../actions'
import _axios from 'axios'

class ImportNewsComponent extends Component {
  state = { visible: false }

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
      </div>
    )
  }
}

export default connect((state) => state)(ImportNewsComponent)
