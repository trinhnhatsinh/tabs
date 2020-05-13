import React from 'react'

import arrowLeft from '@misc/arrow-left.svg'
import arrowRight from '@misc/arrow-right.svg'

class HorizontalHead extends React.PureComponent {
  state = {
    hasScroll: false,
    visibleButtonPrev: false,
    visibleButtonNext: true,
  }

  showNextTabs = () => {
    const scrollX = this.refs['tabs-titles'].scrollLeft
    const widthBox = this.refs['tabs-titles'].offsetWidth

    this.refs['tabs-titles'].scroll({
      top: 0,
      left: scrollX + widthBox,
      behavior: 'smooth',
    })

    // setState
    if (scrollX + widthBox * 2 >= this.refs['tabs-titles'].scrollWidth) {
      this.setState(_preState => ({
        ..._preState,
        visibleButtonNext: false,
        visibleButtonPrev: true,
      }))
    } else {
      this.setState(_preState => ({
        ..._preState,
        visibleButtonNext: true,
        visibleButtonPrev: true,
      }))
    }
  }

  showPrevTabs = () => {
    const scrollX = this.refs['tabs-titles'].scrollLeft
    const widthBox = this.refs['tabs-titles'].offsetWidth

    if (scrollX > 0) {
      this.refs['tabs-titles'].scroll({
        top: 0,
        left: scrollX - widthBox,
        behavior: 'smooth',
      })
    }

    // setState
    if (scrollX - 2 * widthBox > 0) {
      this.setState(_preState => ({
        ..._preState,
        visibleButtonNext: true,
        visibleButtonPrev: true,
      }))
    } else {
      this.setState(_preState => ({
        ..._preState,
        visibleButtonNext: true,
        visibleButtonPrev: false,
      }))
    }
  }

  selectTab = (e, key) => {
    const { handleChangeTab } = this.props

    const scrollX = this.refs['tabs-titles'].scrollLeft
    const widthBox = this.refs['tabs-titles'].offsetWidth

    this.refs['tabs-titles'].scroll({
      top: 0,
      left: e.currentTarget.offsetLeft - widthBox / 2,
      behavior: 'smooth',
    })

    if (e.currentTarget.offsetLeft - widthBox / 2 <= 0) {
      this.setState(_preState => ({
        ..._preState,
        visibleButtonNext: true,
        visibleButtonPrev: false,
      }))
    }

    if (
      e.currentTarget.offsetLeft + widthBox / 2 >=
      this.refs['tabs-titles'].scrollWidth
    ) {
      this.setState(_preState => ({
        ..._preState,
        visibleButtonNext: false,
        visibleButtonPrev: true,
      }))
    }

    if (
      e.currentTarget.offsetLeft - widthBox / 2 > 0 &&
      e.currentTarget.offsetLeft + widthBox / 2 <
        this.refs['tabs-titles'].scrollWidth
    ) {
      this.setState(_preState => ({
        ..._preState,
        visibleButtonNext: true,
        visibleButtonPrev: true,
      }))
    }

    handleChangeTab(key)
  }

  componentDidMount() {
    if (
      this.refs['tabs-titles'] &&
      this.refs['tabs-titles'].scrollWidth >
        this.refs['tabs-titles'].offsetWidth
    ) {
      this.setState(_preState => ({
        ..._preState,
        hasScroll: true,
      }))
    }
  }

  componentDidUpdate() {
    if (
      this.refs['tabs-titles'] &&
      this.refs['tabs-titles'].scrollWidth >
        this.refs['tabs-titles'].offsetWidth
    ) {
      this.setState(_preState => ({
        ..._preState,
        hasScroll: true,
      }))
    }
  }

  render() {
    const { titles, activeTab } = this.props
    console.log('render')
    return (
      <div className="example-tabs-head">
        {this.state.hasScroll ? (
          <button
            className="btn-prev-tabs"
            disabled={!this.state.visibleButtonPrev}
            onClick={this.showPrevTabs}
          >
            <img src={arrowRight} alt="icon-arrow-left" />
          </button>
        ) : (
          <React.Fragment />
        )}

        <div className="example-tabs-titles" ref="tabs-titles">
          {titles.map((item, index) => {
            return (
              <div
                key={index}
                className={`example-tabs-title-item ${
                  item.key === activeTab ? 'tab-active' : ''
                }`}
                onClick={(e) => this.selectTab(e, item.key)}
              >
                {item.title}
              </div>
            )
          })}
        </div>

        {this.state.hasScroll ? (
          <button
            className="btn-prev-tabs"
            disabled={!this.state.visibleButtonNext}
            onClick={this.showNextTabs}
          >
            <img src={arrowLeft} alt="icon-arrow-left" />
          </button>
        ) : (
          <React.Fragment />
        )}
      </div>
    )
  }
}

export default HorizontalHead
