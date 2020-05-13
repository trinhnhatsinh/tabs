import React from 'react'

class TabPanel extends React.PureComponent {
  render() {
    return <div className="tab-panel">{this.props.children}</div>
  }
}

export default TabPanel
