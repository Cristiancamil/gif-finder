interface Props {
  title: string,
  description?: string
}

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
