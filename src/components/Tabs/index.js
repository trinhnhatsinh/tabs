import React from 'react'
import './index.less'

import HorizontalHead from './HorizontalHead'

class Tabs extends React.PureComponent {
  state = {
    activeTab: this.props.defaultKey,
    titles: [],
  }

  handleChangeTab = key => {
    this.setState(_preState => ({
      ..._preState,
      activeTab: key,
    }))
  }

  componentDidMount() {
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

  render() {
    const element = this.props.children.filter(
      item => item.key === this.state.activeTab
    )

    return (
      <div className="example-tabs">
        <HorizontalHead
          titles={this.state.titles}
          activeTab={this.state.activeTab}
          handleChangeTab={this.handleChangeTab}
        />
        <div className="example-tabs-body">
          {element.length ? element[0] : <React.Fragment />}
        </div>
      </div>
    )
  }
}

export default Tabs
