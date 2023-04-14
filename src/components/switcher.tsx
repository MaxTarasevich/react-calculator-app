import React, { useState } from 'react'

const Switcher = () => {
  const [theme, useTheme] = useState('0')

  function rangeHandler(e: React.SyntheticEvent) {
    const target = e.target as HTMLInputElement

    useTheme(target.value)
  }

  function clickHandler(e: React.SyntheticEvent) {
    const target = e.target as HTMLInputElement
    if (target.tagName === 'OPTION') {
      useTheme(target.value)
    }
  }
  return (
    <div className="switcher">
      <datalist id="value-list" onClick={clickHandler}>
        <option value="0" label="1"></option>
        <option value="50" label="2"></option>
        <option value="100" label="3"></option>
      </datalist>
      <input
        id="range"
        type="range"
        name="range"
        list="value-list"
        step={50}
        min={0}
        max={100}
        value={theme}
        onInput={rangeHandler}
      />
    </div>
  )
}

export default Switcher
