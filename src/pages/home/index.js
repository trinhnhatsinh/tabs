import React from 'react'

import Tabs from '@components/Tabs'
import TabPanel from '@components/Tabs/TabPanel'

class Home extends React.PureComponent {
  render() {
    return (
      <Tabs defaultKey='1'>
        <TabPanel key='1' title='Collection1'>
          tabpanel1
        </TabPanel>
        <TabPanel key='2' title='Collection2'>
          tabpanel2
        </TabPanel>
        <TabPanel key='3' title='Collection3'>
          tabpanel3
        </TabPanel>
        <TabPanel key='4' title='Collection4'>
          tabpanel4
        </TabPanel>
        <TabPanel key='5' title='Collection5'>
          tabpanel5
        </TabPanel>
        <TabPanel key='6' title='Collection6'>
          tabpanel6
        </TabPanel>
      </Tabs>
    )
  }
}

export default Home