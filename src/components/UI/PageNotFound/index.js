import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Result } from 'antd'

import WorkimeLayout from '../Layout'

const PageNotFound = ({ location }) => {
  return (
    <WorkimeLayout>
      <Result
        extra={(
          <Link to="/dashboard">
            <Button type="primary">Back Home</Button>
          </Link>
        )}
        status="404"
        subTitle={<span>Sorry, the page <code>{location.pathname}</code> does not exist.</span>}
        title="Not found."
      />
    </WorkimeLayout>
  )
}

export default PageNotFound
