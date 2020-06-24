import React from 'react';
import './index.css'
import './search-panel.css'
const SearchPanel = () =>{
    return (
        <input className="form-control "
                type="text"
                placeholder="Поиск по записям"
        />
    )
}
export default SearchPanel;