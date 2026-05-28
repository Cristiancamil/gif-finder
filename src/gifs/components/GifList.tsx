// Tipo utilizado para tipar la lista de GIFs recibida
import type { Gif } from "../interfaces/gif.interface"

/**
 * Props del componente GifList.
 *
 * @property gifs Lista de GIFs a renderizar.
 */
interface Props {
  gifs: Gif[]
}

/**
 * Componente encargado de renderizar
 * una lista de GIFs en formato de tarjetas.
 *
 * Cada tarjeta muestra:
 * - Imagen del GIF
 * - Título
 * - Dimensiones (ancho x alto)
 */
export const GifList = ({ gifs }: Props) => {
  return (
    <div className="gifs-container">

      {/* Renderizado del listado de GIFs */}
      {
        gifs.map((gif) => (
          <div className="gif-card" key={gif.id}>

            {/* Imagen del GIF */}
            <img src={gif.url} alt={gif.title} />

            {/* Título del GIF */}
            <h3>{gif.title}</h3>

            {/* Resolución del GIF */}
            <p>{gif.width}x{gif.height}</p>
          </div>
        ))
      }
    </div>
  )
}
