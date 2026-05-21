import { Button } from './Button'

type KeypadProps = {
  buttons: string[]
  onPress: (value: string) => void
}

export function Keypad({ buttons, onPress }: KeypadProps) {
  return (
    <div aria-label="Teclado de calculadora" className="keypad">
      {buttons.map((button) => (
        <Button key={button} value={button} onPress={onPress} />
      ))}
    </div>
  )
}
