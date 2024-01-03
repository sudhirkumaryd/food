import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Showitem from './Showitem';
import style from './App.module.css'
import Intputfood from './Intputfood';
import { useState } from 'react';
function App() {
  
    
    let [fooditem,setfooditem]=useState(["milk","banana"]);
    const additem=(event)=>
    {
      let newfood=event.target.value;
      if(event.key ==="Enter" && newfood)
      {
        
        
          event.target.value="";
        let newlist=[...fooditem,newfood];
        setfooditem(newlist);
        
        

      }
           
    }
    
  return (
    <>
    <div className={style.container} >
    <h1 className={style.hed} >Healthy food</h1>
      <Intputfood additem={additem}></Intputfood>
     <Showitem  item={fooditem} ></Showitem>
     </div>
    </>
  )
}

export default App
