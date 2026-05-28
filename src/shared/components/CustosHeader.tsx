/**
 * Props del componente CustosHeader.
 */
interface Props {
  title: string,
  description?: string
}

/**
 * Encabezado reutilizable de la aplicación.
 *
 * Muestra un título y, opcionalmente,
 * una descripción.
 */
export const CustosHeader = ({ title, description }: Props) => {
  return (
    <div className="content-center">
      <h1>{title}</h1>
      {
        description && (<p> {description}</p>)
      }
    </div >
  )
}
