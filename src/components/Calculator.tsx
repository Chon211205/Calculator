import { useState } from 'react'
import { useCalculator } from '../hooks/useCalculator'

const buttons = [
  '7', '8', '9', '+',
  '4', '5', '6', '-',
  '1', '2', '3', '*',
  '0', '.', '=', '/',
  '%', '+/-'
]

export function Calculator() {
  const [display, setDisplay] = useState('0')
  const calculator = useCalculator()

  function handleClick(value: string) {
    if (/^\d$/.test(value)) {
      setDisplay(calculator.inputDigit(display, value))
    } else if (value === '.') {
      setDisplay(calculator.inputDecimal(display))
    } else if (value === '+/-') {
      setDisplay(calculator.toggleSign(display))
    } else if (value === '=') {
      setDisplay(calculator.pressEqual(display))
    } else {
      setDisplay(calculator.pressOperation(display, value as never))
    }
  }

  return (
    <section className="calculator">
      <div className="display">{display}</div>
      <div className="keypad">
        {buttons.map((button) => (
          <button key={button} onClick={() => handleClick(button)}>
            {button}
          </button>
        ))}
      </div>
    </section>
  )
}