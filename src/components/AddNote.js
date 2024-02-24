import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');  //used for add notetext n set
	const characterLimit = 200;   // limit of character in note
	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0){
			setNoteText(event.target.value);  //setnote fun set the current note
		}
	};   //this is arrow fun called from onchange 
	     // textarea current value is 
	     //comming here from target.value.

	const handleSaveClick = () => {
		if (noteText.trim().length > 0){
			handleAddNote(noteText);
			setNoteText('');
		}
	};   // trim method used remove the side white space 

	return (
		<div className='note new'>
			<textarea rows='8' cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
				></textarea>
			<div className='note-footer'>
				<button className='save' onClick={handleSaveClick}>Save Note</button>
			</div>
		</div>
	);
};
export default AddNote;
