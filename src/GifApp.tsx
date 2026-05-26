import { mockGifs } from "./mock-data/gifs.mock"


export const GifApp = () => {
  return (
    <>
      {/* Header */}
      <div className="content-center">
        <h1>Buscador de GIF</h1>
        <p>Descubre y comparte el gif perfecto</p>
      </div>

      {/* Search */}
      <div className="search-container">
        <input type="text" placeholder="Buscar gifs" />
        <button>Buscar</button>
      </div>

      {/* Buquedas previas */}
      <div className="previous-searches">
        <h2>Busquedas previas</h2>
        <ul className="previous-searches-list">
          <li>Goku</li>
          <li>Saitama</li>
          <li>Tanjiro</li>
        </ul>
      </div>

      {/* Gifs */}
      <div className="gifs-container">
        {
          mockGifs.map((gif) => (
            <div className="gif-card" key={gif.id}>
              <img src={gif.url} alt={gif.title} />
              <h3>{gif.title}</h3>
              <p>{gif.width}x{gif.height}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}
