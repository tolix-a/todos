import React from 'react'
import store from '../state/store'

const Item = ({obj}) => {
   const {dataCtrl} = store();
   function todoStatus(){
      let d = {type:'put', data:{id:obj.id, status:!obj.status}}
      dataCtrl(d)
   }
   return (
      <li>
         <p>
            <input id={obj.id} type='checkbox' defaultChecked={obj.status} onChange={todoStatus}/>
            <label htmlFor={obj.id}></label>
            {obj.todo}
         </p>
         <button onClick={()=>dataCtrl({type:'delete', data:obj.id})}> X </button>
      </li>
   )
}

export default Item