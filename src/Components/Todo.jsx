import React, {useState} from 'react';
import './Todo.css'

function Todo(){
    
    const [task,settask] = useState([]);  //for the todo list array
    const [detail,setdetail] = useState("");  //task detail
    
    function handleinputchange(event){
        setdetail(event.target.value);  //to see input added in textbox in textbox
    }

    function addtask(){
        if (detail.trim()) {
            settask(t => [...t, detail]); // add non-empty detail to task array
            setdetail(""); // clear detail input
          }
    }

    function deltask(index){
        const updated = task.filter((_,i) => i !== index);
        settask(updated);
    }

    function moveup(index){
        if(index > 0)
        {
            const updated = [...task];
            [updated[index],updated[index-1]] = [updated[index-1],updated[index]]; //swapping the values
            settask(updated);
         }
    }
    function movedown(index){
        if(index < task.length - 1)
        {
            const updated = [...task];
            [updated[index+1],updated[index]] = [updated[index],updated[index+1]]; //swapping the values
            settask(updated);
         }
    }
    
    return(
        <div className = "todo-list">
            <h1 className = "todohead">Todo List</h1>
            <div>
                <input type="text" placeholder='Enter a task..' value = {detail} onChange = {handleinputchange}></input>
                <button className = "addbutton" onClick={addtask}>Add task</button>
            </div>
            <ol>
                {task.map((element,index) => <li key = {index}>
                                                <span className ="text">{element}</span>
                                                <button className = "delbutton"  onClick={() => deltask(index)}>Delete</button>
                                                <button className = "upbutton" onClick={() => moveup(index)}>Up</button>
                                                <button className = "downbutton" onClick={() => movedown(index)}>Down</button>
                                             </li>)}
            </ol>
            
        </div>
    );

}

export default Todo;