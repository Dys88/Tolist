import React, {useState} from 'react';
import './index.css';
import ToDo from "./ToDo";

const App = () => {
  
  const [inputList, setInputList] = useState(" ")
  const [Items,setItems] = useState([]);
  
  const itemEvents = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems,inputList];

    })
    setInputList("");
  };

  const deleteItems =(id) => {
    console.log('deleted');
    setItems((oldItems) => {
      return oldItems.filter((arrEle,index) =>{
        return index !==id;
      
      })
    })  
};
    return (
    <>
    <div className ="main">
    <div className='center'>
      <br/>
      <h1> TODO LIST </h1>
      <br/>
      <input type="text" placeholder="Add a Items" 
      onChange={itemEvents}/>
      <button onClick={listOfItems}> Add </button>
      <ol>
      {
        Items.map ((itemval, index) => {
          return <ToDo 
          key= {index} 
          id={index} 
          text= {itemval} 
          onSelect = {deleteItems}  
          />
          })
      }    
      </ol>  
    </div>
    </div>
  </>
  );
 
};
export default App;
