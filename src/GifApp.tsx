import { useState } from "react"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustosHeader } from "./shared/components/CustosHeader"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { SearchBar } from "./shared/components/SearchBar"


export const GifApp = () => {
  const [previousTerm, setPreviousTerms] = useState(['dragon ball z'])


  // Manejar de Termino en busquedas previas cliqueado.
  const handleTermClicked = (term: string) => {
    console.log({ term })
  }


  // Añadir Termino a las busquedas previas
  const handleSearch = (query: string = '') => {
    query.trim().toLowerCase()

    if (query.length === 0) return

    if (previousTerm.includes(query)) return

    setPreviousTerms([query, ...previousTerm].splice(0, 6))
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
      <GifList gifs={mockGifs}
      />
    </>
  )
}
