/**
 * Modelo que representa un GIF utilizado
 * dentro de la aplicación.
 *
 * Contiene la información necesaria para
 * renderizar un GIF en la interfaz.
 */
export interface Gif {
  id: string;
  title: string;
  url: string;
  width: number;
  height: number;
}