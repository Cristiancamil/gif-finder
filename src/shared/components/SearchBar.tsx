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



  // Debounce
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuery(event.target.value)
  }



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
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}
