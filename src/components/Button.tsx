type ButtonProps = {
  value: string
  onPress: (value: string) => void
}

function getClassName(value: string) {
  if (value === '=') return 'key key--equal'
  if (['+', '-', '*', '/', '%'].includes(value)) return 'key key--operator'
  if (['.', '+/-'].includes(value)) return 'key key--function'
  return 'key'
}

export function Button({ value, onPress }: ButtonProps) {
  return (
    <button aria-label={`Presionar ${value}`} className={getClassName(value)} type="button" onClick={() => onPress(value)}>
      {value}
    </button>
  )
}
