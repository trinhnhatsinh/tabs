import React from 'react'
import './index.less'

import HorizontalHead from './HorizontalHead'

class Tabs extends React.PureComponent {
  state = {
    activeTab: this.props.defaultKey,
    titles: []
  }

  handleChangeTab = key => {
    this.setState(_preState => ({
      ..._preState,
      activeTab: key,
    }))
  }

  handleGetTitle = () => {
    const titles = this.props.children.map(item => {
      return {
        key: item.key,
        title: item.props.title,
      }
    })

    this.setState(_preState => ({
      ..._preState,
      titles,
    }))
  }

  componentDidMount() {
    this.handleGetTitle()
  }

  componentDidUpdate() {
    if(this.props.update) {
      this.handleGetTitle()
    }
  }

  render() {
    const element = this.props.children.filter(
      item => item.key === this.state.activeTab
    )

    return (
      <div className="example-tabs">
        <HorizontalHead
          titles={this.state.titles}
          update={this.props.update}
          activeTab={this.state.activeTab}
          handleChangeTab={this.handleChangeTab}
          handleSetUpdate={this.props.handleSetUpdate}
        />
        <div className="example-tabs-body">
          {element.length ? element[0] : <React.Fragment />}
        </div>
      </div>
    )
  }
}

export default Tabs
