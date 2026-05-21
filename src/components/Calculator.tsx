import { useState } from 'react'
import { Display } from './Display'
import { Keypad } from './Keypad'
import { useCalculator } from '../hooks/useCalculator'

const buttons = '7 8 9 + 4 5 6 - 1 2 3 * 0 . = / % +/-'.split(' ')

export function Calculator() {
  const [display, setDisplay] = useState('0')
  const calculator = useCalculator()
  const handlePress = (value: string) => setDisplay(calculator.press(display, value))

  return (
    <section aria-label="Calculadora" className="calculator">
      <Display value={display} />
      <Keypad buttons={buttons} onPress={handlePress} />
    </section>
  )
}
