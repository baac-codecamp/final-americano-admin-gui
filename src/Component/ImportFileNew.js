import React, { Component } from 'react'
import XLSX from 'xlsx'
import _axios from 'axios'

const URL_API = 'http://localhost:9442'

export default class ImportFileNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: {},
      data: [],
      cols: [],
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
    console.log(this.state)
    //check file ?
    console.log()
    if (!this.state.file) {
      console.log('Not file!!!')
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
      _axios.post(`${URL_API}/admin/insertDataReward`, { listDataReward: wsData })
    }
  }

  render() {
    return (
      <div>
        <label htmlFor="file">Upload an excel to Process Triggers</label>
        <br />
        <input type="file" className="form-control" id="file" onChange={this.handleChange} />
        <br />
        <input type="submit" value="Upload Data" onClick={this.uploadData} />
      </div>
    )
  }
}
