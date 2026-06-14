import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { SearchBar } from "./SearchBar";


describe('SearchBar', () => {
  test('should render searchbar correctly ', () => {
    const { container } = render(<SearchBar onQuery={() => { }} />)
    expect(container).toMatchSnapshot()
    expect(screen.getByRole('textbox')).toBeDefined()
    expect(screen.getByRole('button')).toBeDefined()
  })

  test('should call onQuery whit the correct value after 700ms', async () => {
    const onQuery = vi.fn()
    render(<SearchBar onQuery={onQuery} />)

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'test' } })

    await waitFor(() => {
      expect(onQuery).toHaveBeenCalled()
      expect(onQuery).toHaveBeenCalledWith('test')
    })
  })

  test('should call only once whit the last value (debounce)', async () => {
    const onQuery = vi.fn()
    render(<SearchBar onQuery={onQuery} />)

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 't' } })
    fireEvent.change(input, { target: { value: 'te' } })

    await waitFor(() => {
      expect(onQuery).toHaveBeenCalledTimes(1)
      expect(onQuery).toHaveBeenCalledWith('te')
    })
  })

  test('should call onQuery when button cliked wit the input value', () => {
    const onQuery = vi.fn()
    render(<SearchBar onQuery={onQuery} />)

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'test' } })

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(onQuery).toHaveBeenCalledTimes(1)
    expect(onQuery).toHaveBeenCalledWith('test')
  })

  test('should the input has the correct placeholder prop', () => {
    const onQuery = vi.fn()
    const value = 'Buscar'

    render(<SearchBar onQuery={onQuery} placeholderText={value} />)

    expect(screen.getByPlaceholderText(value)).toBeDefined()
  })




})