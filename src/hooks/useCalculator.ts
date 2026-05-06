import { useRef, useState } from 'react'
import {
  MAX_LENGTH,
  calculate,
  formatResult,
  type Operation
} from '../logic/calculatorLogic'

export function useCalculator() {
  const [display, setDisplay] = useState('0')
  const input = useRef('0')
  const expression = useRef('')
  const storedValue = useRef<number | null>(null)
  const operation = useRef<Operation>(null)
  const shouldClearInput = useRef(false)

  function resetIfError() {
    if (display !== 'ERROR') return false
    input.current = '0'
    expression.current = ''
    storedValue.current = null
    operation.current = null
    shouldClearInput.current = false
    return true
  }

  function updateDisplay() {
    setDisplay(`${expression.current} ${input.current}`.trim())
  }

  function pressDigit(button: string) {
    resetIfError()

    if (shouldClearInput.current) {
      input.current = button
      shouldClearInput.current = false
    } else if (input.current === '0') {
      input.current = button
    } else if (input.current.length < MAX_LENGTH) {
      input.current += button
    }

    updateDisplay()
  }

  function pressDecimal() {
    resetIfError()

    if (shouldClearInput.current) {
      input.current = '0.'
      shouldClearInput.current = false
    } else if (!input.current.includes('.') && input.current.length < MAX_LENGTH) {
      input.current += '.'
    }

    updateDisplay()
  }

  function pressToggleSign() {
    if (resetIfError() || input.current === '0') return

    if (input.current.startsWith('-')) {
      input.current = input.current.slice(1)
    } else if (input.current.length < MAX_LENGTH) {
      input.current = `-${input.current}`
    }

    updateDisplay()
  }

  function pressOperation(nextOperation: Operation) {
    if (resetIfError()) return

    if (storedValue.current !== null && operation.current !== null && !shouldClearInput.current) {
      const result = calculate(storedValue.current, Number(input.current), operation.current)
      input.current = formatResult(result)
      storedValue.current = input.current === 'ERROR' ? null : Number(input.current)
    } else {
      storedValue.current = Number(input.current)
    }

    operation.current = input.current === 'ERROR' ? null : nextOperation
    expression.current = input.current === 'ERROR' ? '' : `${input.current} ${nextOperation}`
    shouldClearInput.current = true
    setDisplay(input.current === 'ERROR' ? 'ERROR' : expression.current)
  }

  function pressEqual() {
    if (storedValue.current === null || operation.current === null || display === 'ERROR') return

    const result = calculate(storedValue.current, Number(input.current), operation.current)
    const formatted = formatResult(result)

    input.current = formatted
    expression.current = ''
    storedValue.current = null
    operation.current = null
    shouldClearInput.current = true
    setDisplay(formatted)
  }

  function press(button: string) {
    if (/^\d$/.test(button)) pressDigit(button)
    else if (button === '.') pressDecimal()
    else if (button === '+/-') pressToggleSign()
    else if (button === '=') pressEqual()
    else pressOperation(button as Operation)
  }

  return { display, press }
}