import React,{useState} from 'react';
import './App.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListCom from './ListCom';
function App() {
  const [item, setItem] = useState("");
  const [newitem, setNewItem] = useState([]);
  const itemEvent = (event) => {
    setItem(event.target.value);
  }

  const listofItems = () => {
    console.log("hi");
    setNewItem((preValue) => {
      return [...preValue,item];
    });
    setItem(" ");
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" value={item} placeholder='Add an Items' onChange={itemEvent}/>
          <Button className='newBtn' onClick={listofItems}>
            <AddIcon />
          </Button>
          <br />
          <ol>
            {newitem.map((val) =>{
              return <ListCom text = {val}/>
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
