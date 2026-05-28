// Componentes para mostrar información relacionada con GIFs
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"

// Componentes compartidos de la aplicación
import { CustosHeader } from "./shared/components/CustosHeader"
import { SearchBar } from "./shared/components/SearchBar"

// Custom Hook encargado de la lógica de búsqueda
import { useGifs } from "./gifs/hook/useGifs"

/**
 * Componente principal de la aplicación de búsqueda de GIFs.
 *
 * Responsabilidades:
 * - Mostrar el encabezado principal.
 * - Permitir buscar GIFs mediante una barra de búsqueda.
 * - Mostrar búsquedas anteriores.
 * - Renderizar la lista de GIFs obtenidos.
 *
 * También utiliza el custom hook `useGifs`
 * para centralizar la lógica de estado y eventos.
 */

export const GifApp = () => {

  /**
 * Componente principal de la aplicación de búsqueda de GIFs.
 *
 * Responsabilidades:
 * - Mostrar el encabezado principal.
 * - Permitir buscar GIFs mediante una barra de búsqueda.
 * - Mostrar búsquedas anteriores.
 * - Renderizar la lista de GIFs obtenidos.
 *
 * También utiliza el custom hook `useGifs`
 * para centralizar la lógica de estado y eventos.
 */

  const { gifs, handleSearch, handleTermClicked, previousTerm } = useGifs()

  return (
    <>
      {/* Encabezado principal de la aplicación */}
      <CustosHeader
        title="Buscador de Gifs"
        description="Descrubre y comparte el gif perfecto"
      />

      {/* Barra de búsqueda */}
      <SearchBar
        placeholderText="Buscar gifs"
        onQuery={handleSearch}
      />

      {/* Historial de búsquedas realizadas */}
      <PreviousSearches
        title="Búsquedas previas"
        searches={previousTerm}
        onLabelClicked={handleTermClicked}
      />

      {/* Listado de gifs encontrados */}
      <GifList gifs={gifs}
      />
    </>
  )
}
