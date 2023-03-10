// import React from 'react'
import React,{useState,} from 'react'
import SingleNote from './SingleNote'


function Notes() {
    const [notes,setNotes] = useState([])
    const [curNote,setCurNote] = useState('')

    const [car,setCar] = useState({
        mode:'Innova',
        year :'2018',
        color:'white'
    })

    setCar({...car,color:'red'});


    function updateCurNote(event) {
        setCurNote(event.target.value)
    }

     function addNote(event) {
        // notes.push(curNote)
        const newNotesArray = [...notes,curNote]
        setNotes(newNotesArray);
     }

     const ulStyle = {
        listStyle : 'none',
        display : 'grid',
        gap:'20px',
        gridTemplateColumns : 'repeat(3,1fr)'
     }

  return (
    <div>
        <input onChange={updateCurNote} type="text" />
        <button onClick={addNote}>Submit</button>

        <ul style={ulStyle}>
            {notes.map((notes,index) => {
            return <li key={index}>
                <SingleNote notes={notes}/>
                </li>
        })}</ul>
    </div>
  )
}

export default Notes