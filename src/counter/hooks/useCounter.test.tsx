// import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";
import { act, renderHook } from "@testing-library/react";


describe('useCounter', () => {
  test('should initialize whit default value of 0', () => {
    const { result } = renderHook(() => useCounter())
    expect(result.current.counter).toBe(10)
  })

  test('should initialize whit value 10', () => {
    const initialValue = 20
    const { result } = renderHook(() => useCounter(initialValue))
    expect(result.current.counter).toBe(initialValue)
  })

  test('should increment counter when handledAdd ic called', () => {
    const { result } = renderHook(() => useCounter())
    act(() => {
      result.current.handleAdd()
    })
    expect(result.current.counter).toBe(11)
  })

  test('should decrement counter when handledAdd is called', () => {
    const { result } = renderHook(() => useCounter())
    act(() => {
      result.current.handleSubtract()
    })
    expect(result.current.counter).toBe(9)
  })

  test('should reset to initialValue the counter when handledReset is called', () => {
    const { result } = renderHook(() => useCounter())
    act(() => {
      result.current.handleAdd()
    })
    expect(result.current.counter).toBe(11)

    act(() => {
      result.current.handleSubtract()
    })
    act(() => {
      result.current.handleSubtract()
    })
    expect(result.current.counter).toBe(9)

    act(() => {
      result.current.handleReset()
    })
    expect(result.current.counter).toBe(10)
  })
})