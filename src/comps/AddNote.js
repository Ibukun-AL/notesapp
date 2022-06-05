import React,{useState} from 'react'

const AddNote = ({handleAddnote}) => {
    const [noteText,setNoteText] = useState('');
    const charLimit=300;

    const handleChange = (event) => {
        if(charLimit-event.target.value.length>=0){
            setNoteText(event.target.value)
        }
    }

    const handleSave = () => {
        if(noteText.trim().length>0){
            handleAddnote(noteText)
            setNoteText('')
        }
    }
  return (
    <div className='note new'>
        <textarea cols="10" rows="8" placeholder="Type to add a new note" value={noteText} onChange={handleChange}> 

        </textarea>
        <div className="note-footer">
            <small >{charLimit-noteText.length}Remaining</small>
            <button onClick={handleSave} className="save">Save</button>
        </div>
    </div>
  )
}

export default AddNote