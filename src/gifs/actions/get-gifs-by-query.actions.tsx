import type { GiphyResponse } from '../interfaces/giphy.response'
import type { Gif } from '../interfaces/gif.interface'

// Cliente HTTP configurado para consumir la API de Giphy
import { giphyApi } from '../api/giphy.api'

/**
 * Obtiene una lista de GIFs desde la API de Giphy
 * a partir de un término de búsqueda.
 *
 * @param query Texto ingresado por el usuario para buscar GIFs.
 *
 * @returns Una promesa con un arreglo de GIFs
 * transformados al modelo de datos interno (`Gif`).
 */
export const getGifsByQuery = async (query: string): Promise<Gif[]> => {

  try {
    if (query.trim().length === 0) {
      return []
    }

    const response = await giphyApi<GiphyResponse>(`/search`, {
      params: {
        q: query,
        limit: 25
      }
    })


    return response.data.data.map((gif) => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.original.url,
      width: Number(gif.images.original.width),
      height: Number(gif.images.original.height)
    }))
  } catch (error) {
    console.error(error)
    return []
  }

}