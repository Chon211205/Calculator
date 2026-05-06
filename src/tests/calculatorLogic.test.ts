import { describe, expect, test } from 'bun:test'
import { calculate, formatResult } from '../logic/calculatorLogic'

describe('calculator logic', () => {
  test('adds two numbers', () => {
    expect(calculate(2, 3, '+')).toBe(5)
  })

  test('subtracts two numbers', () => {
    expect(calculate(9, 4, '-')).toBe(5)
  })

  test('multiplies two numbers', () => {
    expect(calculate(7, 6, '*')).toBe(42)
  })

  test('divides two numbers', () => {
    expect(calculate(8, 2, '/')).toBe(4)
  })

  test('calculates modulo', () => {
    expect(calculate(10, 3, '%')).toBe(1)
  })

  test('returns ERROR for negative results', () => {
    expect(formatResult(-1)).toBe('ERROR')
  })

  test('returns ERROR for values over the limit', () => {
    expect(formatResult(1000000000)).toBe('ERROR')
  })

  test('allows the maximum value', () => {
    expect(formatResult(999999999)).toBe('999999999')
  })

  test('returns ERROR for division by zero', () => {
    expect(formatResult(calculate(5, 0, '/'))).toBe('ERROR')
  })

  test('cuts long decimal results to nine characters', () => {
    expect(formatResult(calculate(22, 7, '/'))).toBe('3.1428571')
  })
})