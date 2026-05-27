import { useEffect, useState } from "react"


interface Props {
  placeholderText?: string
  onQuery: (query: string) => void
}

export const SearchBar = ({ placeholderText = 'Buscar', onQuery }: Props) => {
  const [query, setQuery] = useState('')


  // Ejecuta una búsqueda automática
  // 700ms después del último cambio del input.
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query)
    }, 700)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [query, onQuery])


  // Ejecuta la búsqueda manualmente.
  const handleSearch = () => {
    onQuery(query)
  }


  // Ejecuta búsqueda al presionar Enter.
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
