import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({notes,handleAddNote,handleDeleteNote,}) => {   //props used in fun
	return (
		<div className='notes-list'>
			{notes.map((note) =>(          // map fun is used for store notes in key value paire ,pass the current note to the fun
				 <Note                      //each note componant is rendered here  
					id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>
			))}
			    <AddNote handleAddNote={handleAddNote}/>
		</div>
	);
};
export default NotesList;
