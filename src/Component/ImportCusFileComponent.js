import React, { Component } from 'react'
import XLSX from 'xlsx'
import _axios from 'axios'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { Form, Input, Button, Row, Col, Alert } from "antd";
const URL_API = 'https://americano-salak-api.topwork.asia'



export default class ImportRewardFileComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: {},
      data: [],
      cols: [],
      alertMessage: '',
      alertType: '',
    }

    this.uploadData = this.uploadData.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    console.log(this.state)
    const files = e.target.files
    if (files && files[0]) {
      this.setState({ file: files[0] })
    }
  }

  
  uploadData(e) {
    console.log(this.state.file)
    //check file ?
    console.log(this.state.file)
    if (!this.state.file.name) {
      alert('กรุณาเลือกไฟล์')
      return
    }

    const currFile = this.state.file
    const reader = new FileReader()
    reader.readAsBinaryString(currFile)
    reader.onload = (e) => {
      const bStr = e.target.result
      const wb = XLSX.read(bStr, { type: 'binary' })
      const wsData = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
      console.log(wsData)
      // axios post Data to api
       
      _axios.post(`https://americano-salak-api.topwork.asia/admin/insertDataCustomer`, { listDataCustomer: wsData })
      .then((res) => {
        //alert("Success, Upload File")
        this.setAlert(res.data.response_message, 'success')
        window.location.replace('/admin/customer')
      })
      .catch((error) => {
        this.setAlert(error.response.data.response_message, 'error')
      })
    }

  }

  setAlert = (message, type) => {
    this.setState({
      alertMessage: message,
      alertType: type,
    })
  }


  render() {

    return (

      <div style={{ margin: '-20px 0px' }}>
        <h2>Import Customer File</h2>
        <input type="file" id="file" accept=".xlsx" onChange={this.handleChange} />
        <Button type="primary" value="Upload Data" shape="round" onClick={this.uploadData}>Upload File</Button>
        {this.state.alertMessage !== '' && <Alert message={this.state.alertMessage} type={this.state.alertType} showIcon />}
      </div>
    )
  }
}
