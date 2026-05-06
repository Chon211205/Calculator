import { Display } from './Display'
import { Keypad } from './Keypad'
import { useCalculator } from '../hooks/useCalculator'

const buttons = '7 8 9 + 4 5 6 - 1 2 3 * 0 . = / % +/-'.split(' ')

export function Calculator() {
  const calculator = useCalculator()

  return (
    <section className="calculator">
      <Display value={calculator.display} />
      <Keypad buttons={buttons} onPress={calculator.press} />
    </section>
  )
}