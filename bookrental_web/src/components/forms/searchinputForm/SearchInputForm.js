import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './searchinputform.style.css';

const SearchInputForm = ({ darkTheme }) => {
    const [searchField, setSearchField] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setSearchField(e.target.value);
    }

    const redirectToSearch = () => {
        if(searchField === ''){
            alert('SearchField is Empty');
        } else{
            navigate('/search',{state:searchField});
        }
    }

    return (
        <div className={ `search-input-form-container ${ darkTheme ? 'dark-box-shadow' : 'light-box-shadow' }` }>
            <input 
                type="text" 
                className='search-input' 
                placeholder="Search books here" 
                value={searchField}
                onChange={handleChange}
            />
            <button onClick={redirectToSearch} className="search-button">Search</button>
        </div>
    )
}

export default SearchInputForm;