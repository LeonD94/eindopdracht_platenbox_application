import React from 'react';
import '../stylesheet/Album.css'

function Album({albumImg, albumName, artistName}) {

    return (
        <div className="resultAlbum">

            <img src={albumImg} alt={albumName}/>
            <h4>{albumName}</h4>
            <span>{artistName}</span>
        </div>
    );
}

export default Album;