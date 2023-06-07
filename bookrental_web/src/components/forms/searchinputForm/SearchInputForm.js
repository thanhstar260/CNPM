import React from 'react';
import "./searchinputform.style.css";

const SearchInputForm = () => {
    return (
        <div className='search-input-form-container'>
            <input type="text" className='search-input' placeholder='Nhập tên sách, tác giả, thể loại, ...'/>
            <button className='search-button'>Tìm kiếm</button>
        </div>
    )
}
export default SearchInputForm;