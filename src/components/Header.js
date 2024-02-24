import React from 'react';
const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='head'>
			<h1 className='no'>Note Taking App</h1>
			<button onClick={()=>handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}className='save'>Change Mode</button>
		</div>
	);
};
export default Header;