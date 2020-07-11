import React, { Component } from 'react'
import list from './comonents/List'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: [
        'react',
        'vue'
      ]
    }
  }

  handleInputchange(e) {
    this.setState({
      inputValue: e.target.value
    })
  } 

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleItemDelete(index) {
    const list = [...this.state.list]
    list.splice(index,1)
    this.setState({
      list: list
    })
    console.log(index)
  }

  render() {
    return (
      <>
      <div>
        <input 
          value={this.state.inputValue}
          onChange={this.handleInputchange.bind(this)}
          />
        <button
          onClick={this.handleBtnClick.bind(this)}
        >提交</button>
      </div>
      <ul>
        {
          this.state.list.map((item,index) => {
          return <li key={index} onClick={this.handleItemDelete.bind(this, index)}>{item}</li>
          }) 
        }
      </ul>
      </>
    )
  }
}

export default TodoList