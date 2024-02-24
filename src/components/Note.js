import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<input type="text" name="" placeholder="Note heading" ></input>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever onClick={() => handleDeleteNote(id)} className='delete-icon' size='30px' />
			   </div> 
		</div>
	);
};   // MdDeleteforever is used for delete icon
export default Note;