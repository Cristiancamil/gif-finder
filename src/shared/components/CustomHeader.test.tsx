import { describe, expect, test } from "vitest";
import { CustosHeader } from "./CustosHeader";
import { render, screen } from "@testing-library/react";


describe('CustomHeader', () => {

  const title = "Buscador de Gifs"

  test('should render the title correctly', () => {
    render(<CustosHeader title={title} />)
    expect(screen.getByText(title)).toBeDefined()
  })

  test('should render the description when provided', () => {
    const description = "Descrubre y comparte el gif perfecto"
    render(<CustosHeader title={title} description={description} />)
    expect(screen.getByText(description)).toBeDefined()
  })

  test('should not render description when not provided', () => {
    const { container } = render(<CustosHeader title={title} />)

    const divElement = container.querySelector('.content-center')

    const h1 = divElement?.querySelector('h1')
    const p = divElement?.querySelector('p')

    expect(h1?.innerHTML).toBe(title)
    expect(p).toBeNull()
  })
})