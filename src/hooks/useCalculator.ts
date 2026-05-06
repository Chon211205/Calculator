import { useRef } from 'react'

type Operation = '+' | '-' | '*' | '/' | '%' | null

const MAX_LENGTH = 9
const MAX_VALUE = 999999999

function isInvalidResult(value: number) {
  return value < 0 || value > MAX_VALUE || !Number.isFinite(value)
}

function formatResult(value: number) {
  if (isInvalidResult(value)) {
    return 'ERROR'
  }

  const text = Number.isInteger(value) ? String(value) : String(value).slice(0, MAX_LENGTH)

  if (text.length <= MAX_LENGTH) {
    return text
  }

  return 'ERROR'
}

function calculate(first: number, second: number, operation: Operation) {
  if (operation === '+') return first + second
  if (operation === '-') return first - second
  if (operation === '*') return first * second
  if (operation === '/') return first / second
  if (operation === '%') return first % second

  return second
}

export function useCalculator() {
  const storedValue = useRef<number | null>(null)
  const operation = useRef<Operation>(null)
  const shouldClearDisplay = useRef(false)

  function inputDigit(current: string, digit: string) {
    if (current === 'ERROR' || shouldClearDisplay.current) {
      shouldClearDisplay.current = false
      return digit
    }

    if (current === '0') {
      return digit
    }

    if (current.length >= MAX_LENGTH) {
      return current
    }

    return current + digit
  }

  function inputDecimal(current: string) {
    if (current === 'ERROR' || shouldClearDisplay.current) {
      shouldClearDisplay.current = false
      return '0.'
    }

    if (current.includes('.') || current.length >= MAX_LENGTH) {
      return current
    }

    return `${current}.`
  }

  function toggleSign(current: string) {
    if (current === 'ERROR' || current === '0') {
      return current
    }

    if (current.startsWith('-')) {
      return current.slice(1)
    }

    if (current.length >= MAX_LENGTH) {
      return current
    }

    return `-${current}`
  }

  function pressOperation(current: string, nextOperation: Operation) {
    if (current === 'ERROR') {
      return current
    }

    const currentValue = Number(current)

    if (storedValue.current === null) {
      storedValue.current = currentValue
    } else if (operation.current !== null) {
      const result = calculate(storedValue.current, currentValue, operation.current)
      const formatted = formatResult(result)

      storedValue.current = formatted === 'ERROR' ? null : Number(formatted)
      shouldClearDisplay.current = true
      operation.current = formatted === 'ERROR' ? null : nextOperation

      return formatted
    }

    operation.current = nextOperation
    shouldClearDisplay.current = true

    return current
  }

  function pressEqual(current: string) {
    if (current === 'ERROR' || storedValue.current === null || operation.current === null) {
      return current
    }

    const result = calculate(storedValue.current, Number(current), operation.current)
    const formatted = formatResult(result)

    storedValue.current = null
    operation.current = null
    shouldClearDisplay.current = true

    return formatted
  }

    function press(value: string, button: string) {
    if (/^\d$/.test(button)) {
        return inputDigit(value, button)
    }

    if (button === '.') {
        return inputDecimal(value)
    }

    if (button === '+/-') {
        return toggleSign(value)
    }

    if (button === '=') {
        return pressEqual(value)
    }

    return pressOperation(value, button as Operation)
    }

  return {
    inputDigit,
    inputDecimal,
    toggleSign,
    pressOperation,
    pressEqual,
    press
  }
}