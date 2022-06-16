import React from 'react'
import ToggleBtn from './ContextAPI/Context'
import { ThemeProvider } from './ContextAPI/ThemeProvider'

import Counter from './Counter/Counter'
import Details from './Details_app/Details'
import { Validation } from './validation/Validation'

export default function App() {
  return (
    <ThemeProvider>
    <ToggleBtn />
  </ThemeProvider>
  )
}
