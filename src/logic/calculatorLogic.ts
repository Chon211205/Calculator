export type Operation = '+' | '-' | '*' | '/' | '%' | null

export const MAX_LENGTH = 9
export const MAX_VALUE = 999999999

export function isInvalidResult(value: number) {
  return value < 0 || value > MAX_VALUE || !Number.isFinite(value)
}

export function formatResult(value: number) {
  if (isInvalidResult(value)) {
    return 'ERROR'
  }

  const text = Number.isInteger(value)
    ? String(value)
    : String(value).slice(0, MAX_LENGTH)

  if (text.length <= MAX_LENGTH) {
    return text
  }

  return 'ERROR'
}

export function calculate(first: number, second: number, operation: Operation) {
  if (operation === '+') return first + second
  if (operation === '-') return first - second
  if (operation === '*') return first * second
  if (operation === '/') return first / second
  if (operation === '%') return first % second

  return second
}