import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"

import { CustosHeader } from "./shared/components/CustosHeader"
import { SearchBar } from "./shared/components/SearchBar"

import { useGifs } from "./gifs/hook/useGifs"

export const GifApp = () => {
  const { gifs, handleSearch, handleTermClicked, previousTerm } = useGifs()

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
