import { useState } from "react"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustosHeader } from "./shared/components/CustosHeader"
import { GifList } from "./shared/components/GifList"
import { PreviousSearches } from "./shared/components/PreviousSearches"
import { SearchBar } from "./shared/components/SearchBar"


export const GifApp = () => {
  const [previousTerm, setPreviousTerms] = useState(['dragon ball z'])

  /**
   * Función que hace algo cuando se ejecuta, se llama en el componente
   * PreviousSearches cada vez que se haga click en un elemento del historial
   * de busquedas.
   * @param term retorna un string, cuando se haga click en el elemento.
   */
  const handleTermClicked = (term: string) => {
    console.log({ term })
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
        buttonText="Buscar"
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
