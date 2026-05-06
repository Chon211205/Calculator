type ButtonProps = {
  value: string
  onPress: (value: string) => void
}

export function Button({ value, onPress }: ButtonProps) {
  return (
    <button type="button" onClick={() => onPress(value)}>
      {value}
    </button>
  )
}