import React, { ChangeEvent, useState } from 'react';
import Scroll from './scroll.tsx';
import SearchList from './searchList.tsx';

interface Player {
    first_name: string;
    last_name: string;
    

}


interface SearchProps {
    details: Player[];
  
}


const Search: React.FC<SearchProps> = ({ details }) => {
    const [searchBar, setSearchBar] = useState<string>('');

    const filteredPlayers = details.filter((player) =>
    '${player.first_name} ${player.last_name}'.toLowerCase()
    );
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchBar(e.target.value);
      };


    return (
      <Scroll>
        <SearchList filteredPlayers ={filteredPlayers} />
      </Scroll>
    );
  }


export default Search;