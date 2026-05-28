import { useRef, useState } from "react"
import type { Gif } from "../interfaces/gif.interface"
import { getGifsByQuery } from "../actions/get-gifs-by-query.actions"

// const gifsCache: Record<string, Gif[]> = {}

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([])
  const [previousTerm, setPreviousTerms] = useState<string[]>([])

  const gifsCache = useRef<Record<string, Gif[]>>({})
  // Manejar de Termino en busquedas previas cliqueado.
  const handleTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term])
      return
    }
  }

  // Añadir Termino a las busquedas previas
  const handleSearch = async (query: string = '') => {
    query.trim().toLowerCase()

    if (query.length === 0) return

    if (previousTerm.includes(query)) return

    setPreviousTerms([query, ...previousTerm].splice(0, 6))

    const gifs = await getGifsByQuery(query)
    setGifs(gifs)

    gifsCache.current[query] = gifs
  }

  return {
    //  Values
    gifs,

    // Methods
    handleSearch,
    handleTermClicked,
    previousTerm
  }
}
