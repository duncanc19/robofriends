import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
	  <div className='pa2 bg-lightest-blue'>	
		  <input 
		    className='pa2'
		    type='search'
		    placeholder='Search robots'
		    onChange={searchChange} 
		  />
	  </div>
	)
}

export default SearchBox;