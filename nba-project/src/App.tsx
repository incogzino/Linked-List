import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './searchBar';
import image from 'C:/React/nba-stats/src/nba.jpg';

// Definiing the specifications for the players
interface Player {
  first_name: string;
  last_name: string;
  position: string;
  team: {
    full_name: string;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
  };
}

function App(): JSX.Element {
  const [players, setPlayers] = useState<Player[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // API gets fetched 

  useEffect(() => {
    fetch("http://localhost:5174/api/players") 
      .then((res) => res.json())
      .then((data) => setPlayers(data.data));
  }, []);

  //Checks each character inputed

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredPlayers = players.filter((player) =>
    `${player.first_name} ${player.last_name}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>

    {/* Search Bar Section */}
        <center>
        <div className="SearchBarSection">
          <h2 className="SectionTitle" style= {{color: "white"}}>Search for NBA Players</h2>
          <img src={image} />
          <p className="SectionDescription" style={{color: "white"}}>
            Explore the NBA player database and find your favorite players!
          </p>
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
