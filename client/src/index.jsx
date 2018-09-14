import React from 'react'
import { render } from 'react-dom'
import App from './App.jsx'

import { injectGlobal } from 'styled-components'

injectGlobal`
body {
  font-family: Circular,"Helvetica Neue",Helvetica,Arial,sans-serif;
}
`


render(<App />, document.getElementById('app'))
