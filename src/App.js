import React, { useState,useEffect } from 'react'
import './App.css';
import Header from './comps/Header'
import Notes from './comps/Notes'
import {nanoid} from 'nanoid'
import Search from './comps/Search';

function App() {
  const [notes,setNotes] = useState([
    {
    id: nanoid(),
    text:"This is my first note",
    date:"03/11/2021"
  },
  {
    id: nanoid(),
    text:"This is my second note",
    date:"03/11/2021"
  },
  {
    id: nanoid(),
    text:"This is my third note",
    date:"03/11/2021"
  },
  {
    id: nanoid(),
    text:"This is my fourth note",
    date:"03/11/2021"
  },
  {
    id: nanoid(),
    text:"This is my fifth note",
    date:"03/11/2021"
  },
 
]);



  const deletingNote= (id) => {
  const newnotes=notes.filter((note)=>note.id!==id);
  setNotes(newnotes)
  }

  const addingNote= (text) => {
    const date=new Date();
    const newnote={
      id:nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
      const newnotes=[...notes,newnote]
      setNotes(newnotes)
    }

  const [darkMode,setDarkMode]=useState(false);
  const [search,setSearch]=useState('');


    /*this is for saving the app data in local storage*/
useEffect(()=>{
  localStorage.setItem('notes',JSON.stringify(notes));
},[notes])



/*to store or save the data in local storage even after closing the tab*/
useEffect(()=>{
  const savednotes = JSON.parse(localStorage.getItem('notes'))
  if(savednotes){
    setNotes(savednotes)
  }
},[])


  return (
    <div className={`${darkMode && 'dark-mode App'}`}>

      <div className="container">

      <Header handleToggle={setDarkMode}/>

      <Search handleSearch={setSearch}/>
      <Notes notes={notes.filter((note)=>note.text.toLowerCase().includes(search))}  
      handleDelete={deletingNote} handleAddnote={addingNote}/>

      </div>

    </div>
    
  );
}

export default App;
