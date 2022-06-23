import React, { useState } from 'react'
import './SearchBox.css'
import Select from 'react-select';
import Search from './Search';
import { Button } from '@material-ui/core';
import { CancelPresentation } from '@material-ui/icons';
import SearchIcon from "@material-ui/icons/Search"
import { useNavigate } from 'react-router-dom';


const options = [
    { value: 'Tunis', label: 'Tunis' },
    { value: 'Sousse', label: 'Sousse' },
    { value: 'Hamamet', label: 'Hamamet' },
  ];


const SearchBox = () => {
    const navigate = useNavigate();
    const [showSearchDate, setShowSearchDate] = useState(false);
    const [selectOption, setSelectOption] = useState({value:'Country', label:"Country"});
    


    return (
        <div className='searchBox'>
            <div className='searchOptions'>
                <Button onClick = {() => setShowSearchDate(!showSearchDate)} variant="outlined" className="search_button">
                    {showSearchDate ? <CancelPresentation /> : "Date"}
                </Button>
                {showSearchDate && <Search />}
                <Select className="dropDown" defaultValue={selectOption} onChange={setSelectOption} options={options} />
                <Button onClick={() => navigate('/places')}><SearchIcon className='searchIcon'/></Button>
            </div>
        </div>
    )
}

export default SearchBox
