import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [person, setPerson] = useState(null)

    useEffect(async () => {
        const response = await fetch('https://api.randomuser.me/');
        const data = await response.json();
        const [item] = data.results;
        setPerson(item);
    }, []);

    return (
        <div>
            <ul>
                {person && <div>{person.name.first}</div>}
            </ul>
        </div>
    )
}
export default DataFetching



//   const options = {
//       method: 'GET',
//       url: 'https://theaudiodb.p.rapidapi.com/trending.php',
//       params: {country: 'us', type: 'itunes', format: 'albums'},
//       headers: {
//           'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com',
//           'X-RapidAPI-Key': '54db09c3a6msh878fc1f730588c4p17b24ejsn11f3b13d918e'
//       }
//   };