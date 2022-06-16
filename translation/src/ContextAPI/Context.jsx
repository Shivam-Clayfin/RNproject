import React from 'react'
import { ThemeContext } from './ThemeProvider'

function ToggleBtn() {
  const { theme, toggle, dark } = React.useContext(ThemeContext)

  return (
    <div className="theme">
      <header
        className="App-header"
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
        data-testid="header"
      >
        <button
          type="button"
          onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none'
          }}
        >
          Change {!dark ? 'Dark' : 'Light'} theme
        </button>
      </header>
    </div>
  )
}

export default ToggleBtn
