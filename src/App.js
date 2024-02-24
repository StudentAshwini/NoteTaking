import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
	const [notes, setNotes] = useState([]); //use usestate hooks for hold the array of notes

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);   //hook 

	useEffect(() => {
		const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
		 if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {localStorage.setItem('react-notes-app-data',JSON.stringify(notes));
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && 'change-mode'}`}>
			<div className='frame'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)   // notes props from noteslist fun 
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;
