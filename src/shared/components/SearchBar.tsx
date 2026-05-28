import { useEffect, useState } from "react"

interface Props {
  placeholderText?: string
  onQuery: (query: string) => void
}

/**
 * Componente de búsqueda reutilizable.
 *
 * Permite:
 * - Escribir un término de búsqueda.
 * - Ejecutar búsqueda automática con retraso (debounce).
 * - Ejecutar búsqueda manual mediante botón.
 * - Ejecutar búsqueda al presionar Enter.
 */
export const SearchBar = ({ placeholderText = 'Buscar', onQuery }: Props) => {

  /**
   * Estado que almacena
   * el valor actual del input.
   */
  const [query, setQuery] = useState('')

  /**
   * Ejecuta una búsqueda automática
   * 700ms después del último cambio
   * realizado en el input.
   *
   * Se limpia el timeout anterior
   * para evitar múltiples ejecuciones
   * mientras el usuario escribe.
   */
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query)
      setQuery('')
    }, 700)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [query, onQuery])

  /**
   * Ejecuta la búsqueda manualmente.
   */
  const handleSearch = () => {
    onQuery(query)
  }

  /**
   * Ejecuta la búsqueda al
   * presionar la tecla Enter.
   */
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholderText}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}
