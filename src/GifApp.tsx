import { useState } from "react"
import { CustosHeader } from "./shared/components/CustosHeader"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { SearchBar } from "./shared/components/SearchBar"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.actions"
import type { Gif } from "./gifs/interfaces/gif.interface"


export const GifApp = () => {
  const [gifs, setGifs] = useState<Gif[]>([])
  const [previousTerm, setPreviousTerms] = useState<string[]>([])

  // Manejar de Termino en busquedas previas cliqueado.
  const handleTermClicked = (term: string) => {
    console.log({ term })
  }


  // Añadir Termino a las busquedas previas
  const handleSearch = async (query: string = '') => {
    query.trim().toLowerCase()

    if (query.length === 0) return

    if (previousTerm.includes(query)) return

    setPreviousTerms([query, ...previousTerm].splice(0, 6))

    const gifs = await getGifsByQuery(query)
    setGifs(gifs)
  }


  return (
    <>
      {/* Header */}
      <CustosHeader
        title="Buscador de Gifs"
        description="Descrubre y comparte el gif perfecto"
      />

      {/* Search */}
      <SearchBar
        placeholderText="Buscar gifs"
        onQuery={handleSearch}
      />

      {/* Buquedas previas */}
      <PreviousSearches
        title="Búsquedas previas"
        searches={previousTerm}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GifList gifs={gifs}
      />
    </>
  )
}
