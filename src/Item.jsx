import { useState } from 'react';
import style from './App.module.css'
const Item = ({ gd }) => {
    let [tick,settick]=useState("");
    const massege = (event) => {
        settick("true");

    }
    return <li key={gd} className={`list-group-item `}>
        <span>{gd} ={tick}</span>
        <button type="button" className={`btn   btn-primary  ${style.button}`}
            onClick={
                massege}
        >Primary</button>

    </li>
}
export default Item