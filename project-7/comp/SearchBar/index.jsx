import "./styles.css";
export const SearchBar = ({searchValue, handleChange}) => {
    return(
        <input 
            className = "text-input"
            onChange={handleChange}
            value={searchValue}
            type="search" 
            placeholder = "Search"
        />
    )
}