import style from './App.module.css'
function Intputfood({additem}){
return <input  onKeyDown={additem} type="text" className={style.int} placeholder='enter food item' />
}
export default Intputfood