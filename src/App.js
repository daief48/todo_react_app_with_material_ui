import './App.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
function App() {
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder='Add an Items' />
          <Button className='newBtn'>
            <AddIcon />
          </Button>
          <br />
          <ol>
            <li>Buy an apple</li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
