import React from 'react'

const header = ({handleToggle}) => {
  return (
    <div className="header">
        <h1>
             {/*the heading of our notes app*/}
            <span style={{color: "#308d46"}}>React</span>Notes
        </h1>
            {/*this is our toggle button 
        using this button we can change the background theme for our application*/}
        <button className="toggle" onClick={()=>handleToggle((previousDarkMode)=>!previousDarkMode)}>
            Toggle Mode
        </button>
    </div>
  )
}

export default header