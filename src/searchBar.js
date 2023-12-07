import React, { useState } from 'react';
import scroll from './scroll';
import searchList from './searchList';

function Search({ details }) {

  const [searchBar, setSearchBar] = useState("");

  const filteredPlayers = details.filter(
    player => {
      return (
        player
        .first_name
        .last_name
        .toLowerCase()
        .includes(searchBar.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchBar(e.target.value);
  };

  function searchList() {
    return (
      <scroll>
        <searchList filteredPlayers={filteredPlayers} />
      </scroll>
    );
  }

}

export default Search;