// Librería HTTP para realizar peticiones a APIs
import axios from 'axios'

/**
 * Instancia personalizada de Axios para consumir
 * la API de Giphy.
 *
 * Configuración incluida:
 * - URL base para los endpoints de GIFs.
 * - Idioma predeterminado (`es`).
 * - API key obtenida desde variables de entorno.
 *
 * Esta configuración evita repetir parámetros
 * comunes en cada petición HTTP.
 */
export const giphyApi = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  params: {
    lang: 'es',
    api_key: import.meta.env.VITE_GIPHY_API_KEY
  }
})