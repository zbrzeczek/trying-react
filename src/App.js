import React, { useState, createContext, useContext } from 'react';
import './App.css';


function App() {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <div className="App">
      <h2>(c) nanaziu' terminal. All rights reserved</h2>
      <br></br>
      <p>help&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;see all commands</p>
      <p>clr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;clear the terminal</p>
      {/*<p>1  Who are you?</p>
      <p>2  What's your occupation?</p>
      <p>3  How old r u?</p>
      <p>4  Hobbies</p>
      <p>#  ?</p>
      <p>5  Education</p>
      <p>6  Projects</p>*/}
      <br></br>
      C:\Users\nanaziu&gt;<input 
        type="text"
        value={input}
        onChange={x=>setInput(x.target.value)}
        onKeyDown={x=>{
          if(x.key === "Enter"){
            if(input === "clr"){
              setOutput("")
            }
            else {
              setOutput("There's no such command")
            }
          }
        }}
      />
            <div className='terminal'>
        <p>{output}</p>
      </div>
    </div>
  );
}

export default App;
