import React, {Component, useState} from 'react'
import {TextField, InputAdornment, Button, Hidden} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import logo from './logo.png';
import Results from './Results';
function Search() {
    const [search, setSearch] = useState('');
    const handlesubmit = () => {
        console.log(search);
        <Results value={search}/>
    }
    return (
        <div className="Search">
            <img src={logo}
                alt="logo"
                id="logo1"
                style={
                    {
                        height: "200px",
                        width: "400px"
                    }
                }/>
            <br/>
            <form onSubmit={handlesubmit}>
                <div className="Searchbar">
                    <TextField id="searchbox"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        label='Search'
                        placeholder="Enter the search term"
                        InputProps={
                            {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon/>
                                    </InputAdornment>
                                )
                            }
                        }/>
                    <br/>
                    <br/>
                </div>
                <Button variant='outlined' type='submit'>Search</Button>
            </form>
        </div>
    )
}

export default Search;
