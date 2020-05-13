import React from 'react'

import Tabs from '@components/Tabs'
import TabPanel from '@components/Tabs/TabPanel'

class Home extends React.PureComponent {
  state = {
    array: [1, 2, 3],
    update: false
  }

  handleAddTab = () => {
    this.setState(_preState => ({
      ..._preState,
      array: [..._preState.array, ...[1,1,1]],
      update: true
    }))
  }

  handleSubTab = () => {
    this.setState(_preState => ({
      ..._preState,
      array: [..._preState.array.slice(0, _preState.array.length -3)],
      update: true
    }))
  }

  handleSetUpdate = () => {
    this.setState(_preState => ({
      ..._preState,
      update: false
    }))
  }

  render() {

    return (
      <>
        <Tabs 
          defaultKey="1" 
          update={this.state.update}
          handleSetUpdate={this.handleSetUpdate}
        >
          {this.state.array.map((item, index) => {
            return (
              <TabPanel key={index} title={`Collection ${index}`}>
                tabpanel {index}
              </TabPanel>
            )
          })}
        </Tabs>
        <button onClick={this.handleAddTab}>add tab</button>
        <button onClick={this.handleSubTab}>sub tab</button>
      </>
    )
  }
}

export default Home
