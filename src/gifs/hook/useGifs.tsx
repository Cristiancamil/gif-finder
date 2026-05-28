import { useRef, useState } from "react"

import type { Gif } from "../interfaces/gif.interface"

import { getGifsByQuery } from "../actions/get-gifs-by-query.actions"

/**
 * Hook personalizado encargado de gestionar:
 * - La lista de GIFs encontrados.
 * - El historial de búsquedas.
 * - La caché de resultados.
 * - La lógica de búsqueda y selección de términos previos.
 */
export const useGifs = () => {

  /**
   * Estado que almacena los GIFs
   * obtenidos desde la API.
   */
  const [gifs, setGifs] = useState<Gif[]>([])

  /**
   * Historial de búsquedas realizadas.
   */
  const [previousTerm, setPreviousTerms] = useState<string[]>([])

  /**
  * Caché en memoria para evitar
  * peticiones repetidas a la API.
  *
  * La clave es el término buscado
  * y el valor es el listado de GIFs.
  */
  const gifsCache = useRef<Record<string, Gif[]>>({})


  /**
   * Maneja el clic sobre una búsqueda previa.
   *
   * Si el término ya existe en caché,
   * reutiliza los GIFs almacenados
   * evitando una nueva petición HTTP.
   *
   * @param term Término seleccionado.
   */
  const handleTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term])
      return
    }
  }

  /**
   * Ejecuta una búsqueda de GIFs.
   *
   * Responsabilidades:
   * - Validar el término de búsqueda.
   * - Evitar búsquedas vacías.
   * - Evitar términos duplicados.
   * - Actualizar el historial.
   * - Obtener GIFs desde la API.
   * - Guardar resultados en caché.
   *
   * @param query Texto ingresado por el usuario.
   */
  const handleSearch = async (query: string = '') => {

    // Normalizar el texto ingresado
    query.trim().toLowerCase()

    // Evitar búsquedas vacías
    if (query.length === 0) return

    // Evitar búsquedas repetidas
    if (previousTerm.includes(query)) return

    // Guardar las últimas 6 búsquedas
    setPreviousTerms([query, ...previousTerm].splice(0, 6))

    // Obtener GIFs desde la API
    const gifs = await getGifsByQuery(query)

    // Actualizar estado
    setGifs(gifs)

    // Guardar resultados en caché
    gifsCache.current[query] = gifs
  }

  return {
    //  Values
    gifs,
    previousTerm,

    // Methods
    handleSearch,
    handleTermClicked,
  }
}
