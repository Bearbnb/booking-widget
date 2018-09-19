import React from 'react'
import { render } from 'react-dom'
import App from './App.jsx'

import { injectGlobal } from 'styled-components'

injectGlobal`
body {
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
}
`


render(<App />, document.getElementById('booking-widget'))
