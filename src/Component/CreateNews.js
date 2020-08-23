import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input } from 'antd'
import { updateTempNews } from '../actions'

class CreateNews extends Component {
  constructor(props) {
    super(props)
    this.updateInput = this.updateInput.bind(this)
  }

  updateInput(e) {
    const { name, value } = e.target
    this.props.dispatch(updateTempNews(name, value))
  }

  render() {
    const { title, imgUrl, desc } = this.props.news
    return (
      <div>
        Title: <Input placeholder="Title..." name="title" value={title} onChange={this.updateInput} />
        <br />
        <br />
        ImgUrl: <Input placeholder="ImgUrl..." name="imgUrl" value={imgUrl} onChange={this.updateInput} />
        <br />
        <br />
        Desc: <Input placeholder="Desc..." name="desc" value={desc} onChange={this.updateInput} />
      </div>
    )
  }
}

export default connect((state) => state)(CreateNews)
