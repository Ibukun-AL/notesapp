import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

const Notes = ({notes,handleDelete,handleAddnote}) => {
  return (
    <div className='notes-list'>
        {notes.map((note)=>
                <Note id={note.id} text={note.text} date={note.date} handleDelete={handleDelete} key={note.id}/>
        )}

        <AddNote handleAddnote={handleAddnote}/>
    </div>
  )
}

export default Notes