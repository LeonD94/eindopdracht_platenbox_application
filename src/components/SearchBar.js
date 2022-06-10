import React from 'react';
import '../stylesheet/SearchBar.css';
import { useState } from 'react';

function SearchBar(props) {

    // const axios = require("axios");
    //
    // const options = {
    //     method: 'GET',
    //     url: 'https://theaudiodb.p.rapidapi.com/trending.php',
    //     params: {country: 'us', type: 'itunes', format: 'albums'},
    //     headers: {
    //         'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com',
    //         'X-RapidAPI-Key': '54db09c3a6msh878fc1f730588c4p17b24ejsn11f3b13d918e'
    //     }
    // };
    //
    // axios.request(options).then(function (response) {
    //     console.log(response.data.trending[0]);
    //     console.log(response.data.trending[0].strAlbum);
    //     console.log(response.data.trending[0].strArtist);
    // }).catch(function (error) {
    //     console.error(error);
    // });
    //
    // const { onSearch } = props;
    // const [searchText, setSearchText] = useState("");
    //
    // const handleInput = (e) => {
    //     const text = e.target.value
    //     setSearchText(text)
    // }
    //
    // const handleEnterKeyPressed = (e) => {
    //     if(e.key === 'Enter') {
    //         onSearch(searchText);
    //     }
    // }

    return (
        <div>
            <div className="control">
                <input
                    className="input"
                    // onChange={handleInput}
                    // onKeyPress={handleEnterKeyPressed}
                    // value={searchText}
                    type="text"
                    placeholder= "🔍 Zoeken in Platenbox"
                />
            </div>
        </div>
    );
};

export default SearchBar;