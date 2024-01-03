import Item from "./Item";
import "./App.css"
function Showitem(sudhir)
{
    
   return ( <ul  key="table" className="list-group count">
         {sudhir.item.map((gde) =>  ( <Item  key={gde}   gd={gde}></Item> ))}
  
</ul>
   )
}
export default Showitem;