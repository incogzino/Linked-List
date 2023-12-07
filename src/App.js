
import React, { useState, useEffect } from 'react';
import './App.css';
import searchBar from './searchBar';
import image from 'C:/React/nba-stats/src/nba.jpg';

function App() {
  const [playerID, setPlayerID] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // API gets fetched 

  useEffect(() => {
    fetch("http://localhost:3001/api/players") 
      .then((res) => res.json())
      .then((data) => setPlayerID(data.data));
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPlayers = playerID.filter((player) =>
    `${player.first_name} ${player.last_name}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>

    {/* Search Bar Section */}
        <center>
        <div className="SearchBarSection">
          <h2 className="SectionTitle" style= {{color: "white"}}>Search for NBA Players</h2>
          <img src={image}/>
          <p className="SectionDescription" style={{color: "white"}}>
            Explore the NBA player database and find your favorite players!
          </p>
          <searchBar details={playerID} />
        </div>
        </center>

      <div className='searchPlayers'>
      <input 
        type="text"
        className="NBA_Search"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
    </div>

    {/* Player card */}

    <div className="player-card-container">
      {filteredPlayers.map((player, index) => (
        <div key={index} className="card">
          <span>{player.first_name}</span>
          <br />
          <span>{player.last_name}</span>
          <br />
          <span>Postion: {player.position}</span>
          <hr />

    {/* Display team information in a dropdown */}

    <details>
      <summary>Team Info</summary>
      <table>
        <tbody>
          <tr>
            <td>Team Name:</td>
            <td>{player.team.full_name}</td>
          </tr>
          <tr>
            <td>Abbreviation:</td>
            <td>{player.team.abbreviation}</td>
          </tr>
          <tr>
            <td>City:</td>
            <td>{player.team.city}</td>
          </tr>
          <tr>
            <td>Conference:</td>
            <td>{player.team.conference}</td>
          </tr>
          <tr>
            <td>Division:</td>
            <td>{player.team.division}</td>
          </tr>
        </tbody>
      </table>
    </details>

        </div>
      ))}
    </div>
    </>
  );
}

export default App;
