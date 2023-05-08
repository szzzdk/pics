import React, {useState} from 'react';
import './SearchBar.css';
const SearchBar = ({ onSubmit }) => {

    const [ term, setTerm ] = useState('');

    const handleChange = (event) => {
        setTerm(event.target.value); // rerender
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    }
    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit} action="">
                <label>Enter Search Form</label>
                <input value={term} onChange={handleChange} type="text"/>
            </form>
        </div>
    )
}

export default SearchBar;