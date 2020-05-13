import React, { Component } from 'react'
import './App.less'

import RouterComponent from '@router'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <RouterComponent />
      </div>
    )
  }
}
export default App
