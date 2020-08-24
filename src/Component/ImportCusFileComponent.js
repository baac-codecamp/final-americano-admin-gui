import React, { Component } from 'react'
import XLSX from 'xlsx'
import _axios from 'axios'
import { Button, Table } from 'antd'

const columns = [
  {
    title: 'CID',
    dataIndex: 'CID',
    key: 'CID',
  },
  {
    title: 'CIFName',
    dataIndex: 'CIFName',
    key: 'CIFName',
  },
  {
    title: 'BOD',
    dataIndex: 'BOD',
    key: 'BOD',
  },
  {
    title: 'CIFNo',
    dataIndex: 'CIFNo',
    key: 'CIFNo',
  },
  {
    title: 'AccType',
    dataIndex: 'AccType',
    key: 'AccType',
  },
  {
    title: 'AccNo',
    dataIndex: 'AccNo',
    key: 'AccNo',
  },
  {
    title: 'AccName',
    dataIndex: 'AccName',
    key: 'AccName',
  },
  {
    title: 'SalakStart',
    dataIndex: 'SalakStart',
    key: 'SalakStart',
  },
  {
    title: 'SalakEnd',
    dataIndex: 'SalakEnd',
    key: 'SalakEnd',
  },
]


export default class ImportCusFileComponent extends Component {
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

  handleChange(nameFile) {
    const files = nameFile.target.files
    if (!files[0].name.includes('customer')) {
      alert('กรุณาเลือกเฉพาะชื่อไฟล์ Customer')
      return
    }
    if (files && files[0]) {
      this.setState({ file: files[0] })
    }

    const currFile = files[0]
    const reader = new FileReader()
    reader.readAsBinaryString(currFile)
    reader.onload = (e) => {
      const bStr = e.target.result
      const wb = XLSX.read(bStr, { type: 'binary' })
      const wsData = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
      this.setState({ wsData: wsData })
      console.log(wsData)
    }
  }

  uploadData(e) {
    //check file ?
    console.log(this.state.file)
    if (!this.state.file.name) {
      alert('กรุณาเลือกไฟล์')
      return
    }

    if (!this.state.file.name.includes('customer')) {
      alert('กรุณาเลือกเฉพาะชื่อไฟล์ Customer')
      return
    }

    // axios post Data to api
    const user = JSON.parse(localStorage.getItem('user'))
    const currHeader = {
      Authorization: 'Bearer ' + user.token,
      'Content-Type': 'application/json',
    }

    console.log(currHeader)
    _axios
      .post(`https://americano-salak-api.topwork.asia/admin/auth/insertDataCustomer`, { listDataCustomer: this.state.wsData }, { headers: currHeader })
      .then((res) => {
        alert('Upload Successed')
        //this.setAlert(res.data.response_message, 'success')
        // window.location.replace('/admin/customer')
      })
      .catch((error) => {
        alert('Upload Failed')
      })
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
        <Button type="primary" value="Upload Data" shape="round" onClick={this.uploadData}>
          Upload File
        </Button>
        <hr />
        <br />
        <Table  columns={columns} dataSource={this.state.wsData}  pagination={{ pageSize: 7 }}/>
      </div>
    );
  }
}
