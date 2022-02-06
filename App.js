import React, {useState} from 'react';
import trashIcon from './littering.png'

function App() {

const [taskInput, updateTaskInput]=useState("")
const [toDoList, updateToDoList]=useState([]);

const inputKeyDown=(event)=>{
  if(event.keyCode===13)
    addNote();
}
 
const addNote=()=>{
  toDoList.push({description: taskInput, isComplete: false})
  updateToDoList(toDoList)
  updateTaskInput("")
}

const deleteTask = (index) => {
  const newList=toDoList.filter((item,i)=> i!==index);
  updateToDoList(newList)
}

const markComplete = (index) => {
  const list=[...toDoList];
  list[index].isComplete=!list[index].isComplete;
  updateToDoList(list)
}

  return (
    <div className="app-background">
      <p className="heading-text"> 📋 Todo List</p>
      <div className="task-container">
        <div>
          <input className="text-input" value={taskInput} onKeyDown={inputKeyDown}
          onChange={(event)=>updateTaskInput(event.target.value)}/>
          <button className="add-button" onClick={addNote}>ADD</button>
        </div>
        {toDoList?.length ? toDoList.map((todoObject,index)=>

        <ListItem index={index} itemData={todoObject} 
        deleteTask={deleteTask} markComplete={markComplete} />) :

        <p className="no-item-text">🖇️No Task Have Been Added!</p>}
        
      </div>
      <p className="footer-text">Indian Youtuber + Russian CSS Lover = Dope Todo List Website</p>
    </div>
  );
}

function ListItem (props) {
  return (
  <div className="list-item row jc-space-between">
    <span className={props.itemData.isComplete?"task-complete":""}
    onClick={()=>props.markComplete(props.index)}>
      {props.itemData.description}
      </span>
    <img src={trashIcon} alt='trash.png' className="delete-icon" 
    onClick={()=> props.deleteTask(props.index)} />
  </div>
  )
}

export default App;
