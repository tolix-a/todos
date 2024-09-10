import React, { useEffect, useState } from 'react'
import store from '../state/store'

const Sort = () => {
   let {data, sortData, sortCtrl} = store();
   let [type, setType] = useState('All');

   useEffect(()=>{
      sortCtrl({type});
   },[data,type])
   
   return (
      <div className='footer'>
         <div>{sortData.length} items</div>
         <div>
            <button onClick={()=>setType('All')}>All</button>
            <button onClick={()=>setType('Active')}>Active</button>
            <button onClick={()=>setType('Completed')}>Completed</button>
         </div>
      </div>
   )
}

export default Sort