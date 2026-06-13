import { act, renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import * as gifActions from "../actions/get-gifs-by-query.actions";


describe('useGif', () => {

  test('should return default values and methods', () => {
    const { result } = renderHook(() => useGifs())

    expect(result.current.gifs.length).toBe(0)
    expect(result.current.previousTerm.length).toBe(0)
    expect(result.current.handleSearch).toBeDefined()
    expect(result.current.handleTermClicked).toBeDefined()
  })


  test('should return a list of gifs', async () => {
    const { result } = renderHook(() => useGifs())

    await act(async () => {
      await result.current.handleSearch('goku')
    })

    expect(result.current.gifs.length).toBe(25)
    result.current.gifs.forEach((gif) => {
      expect(typeof gif.id).toBe('string')
      expect(typeof gif.height).toBe('number')
      expect(typeof gif.title).toBe('string')
      expect(typeof gif.url).toBe('string')
      expect(typeof gif.width).toBe('number')
    })
  })


  test('should return a list of gifs when handleTermClicked is called', async () => {
    const { result } = renderHook(() => useGifs())

    await act(async () => {
      await result.current.handleTermClicked('goku')
    })

    expect(result.current.gifs.length).toBe(25)
  })

  test('should return a list of gifs from caché', async () => {
    const { result } = renderHook(() => useGifs())

    await act(async () => {
      await result.current.handleTermClicked('goku')
    })

    expect(result.current.gifs.length).toBe(25)

    vi.spyOn(gifActions, 'getGifsByQuery').mockRejectedValue(
      new Error('This is my custom error')
    )

    await act(async () => {
      await result.current.handleTermClicked('goku')
    })

    expect(result.current.gifs.length).toBe(25)

  })

  test('should return no more thn 6 previous term', async () => {
    const { result } = renderHook(() => useGifs())

    vi.spyOn(gifActions, 'getGifsByQuery').mockResolvedValue([])

    for (let index = 1; index < 7; index++) {
      await act(async () => {
        await result.current.handleSearch(`goku${index}`)
      })
    }

    expect(result.current.previousTerm.length).toBe(6)
    expect(result.current.previousTerm).toStrictEqual(
      ['goku6', 'goku5', 'goku4', 'goku3', 'goku2', 'goku1']
    )
    console.log(result.current.previousTerm)
  })


})