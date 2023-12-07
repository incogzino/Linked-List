import React from 'react';

interface searchListProps {
    filteredPlayers: string[];
}

const SearchList: React.FC<searchListProps> = ({ filteredPlayers}) => {
  const filtered = filteredPlayers.map((player,  index) => (
    <div key= {index}>
      {JSON.stringify(player)}
    </div>
  )); 
  
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;