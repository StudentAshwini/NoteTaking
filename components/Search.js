import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchNote }) =>{
	return (
		<div className='find'>
			<MdSearch className='search-icons' size='1.3em' /> 
			<input
				onChange={(event) =>handleSearchNote(event.target.value)}  //get the current value from input control
				type='text'
				placeholder='Search note here...'
			/>
		</div>   //Mdsearch is the search icon from  react package 
	);
};
export default Search;