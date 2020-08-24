import React, { Component } from 'react'
import XLSX from 'xlsx'
import _axios from 'axios'
import { Button, Table } from 'antd'

const columns = [
  {
    title: 'RewardAtDate',
    dataIndex: 'RewardAtDate',
    key: 'RewardAtDate',
  },
  {
    title: 'RewardAtSeq',
    dataIndex: 'RewardAtSeq',
    key: 'RewardAtSeq',
  },
  {
    title: 'RewardPrice',
    dataIndex: 'RewardPrice',
    key: 'RewardPrice',
  },
  {
    title: 'RewardNo',
    dataIndex: 'RewardNo',
    key: 'RewardNo',
  },
]
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

    if (!files[0].name.includes('reward')) {
      alert('กรุณาเลือกเฉพาะชื่อไฟล์ Reward')
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
      console.log(this.state.file)
      //check file ?
      console.log(this.state.file)
      if (!this.state.file.name) {
        alert('กรุณาเลือกไฟล์')
        return
      }

      if (!this.state.file.name.includes('reward')) {
        alert('กรุณาเลือกเฉพาะชื่อไฟล์ Reward')
        return
      }

      
        // axios post Data to api
        const user = JSON.parse(localStorage.getItem('user'))
        console.log(user)

        const currHeader = {
          Authorization: 'Bearer ' + user.token,
          'Content-Type': 'application/json',
        }

        console.log(currHeader)

        _axios
          .post(
            `https://americano-salak-api.topwork.asia/admin/auth/insertDataReward`,
            { listDataReward: this.state.wsData },
            {
              headers: currHeader,
            }
          )
          .then((res) => {
            alert('Upload Successed')
            //this.setAlert(res.data.response_message, 'success')
            window.location.replace('/admin/reward')
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
          <h2>Import Reward File</h2>
          <input type="file" id="file" accept=".xlsx" onChange={this.handleChange} />
          <Button type="primary" value="Upload Data" shape="round" onClick={this.uploadData}>
            Upload File
        </Button>
        <br/>
        <hr/>
        <Table  columns={columns} dataSource={this.state.wsData}  pagination={{ pageSize: 8 }}/>
        </div>
      )
    }
  }
