import React from 'react';

function searchList({ filteredPlayers}) {
  const filtered = filteredPlayers.map(); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default searchList;