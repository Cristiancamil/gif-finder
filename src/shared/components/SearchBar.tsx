interface Props {
  placeholderText: string
  buttonText: string
}

export const SearchBar = ({ placeholderText, buttonText }: Props) => {
  return (
    <div className="search-container">
      <input type="text" placeholder={placeholderText} />
      <button>{buttonText}</button>
    </div>
  )
}
