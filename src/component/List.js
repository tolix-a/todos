import React, { useEffect } from 'react'
import Item from './Item'
import store from '../state/store';

const List = () => {
   const {data,sortData, sortCtrl, dataCtrl} = store();
   useEffect(()=>{
      dataCtrl({type:'get'});
   },[]);
   
   console.log(data)

   if(!sortData.length) return <>loading ... </>

   return (
      <ul>
         {
            sortData.map((obj)=>
            <Item obj={obj} key={obj.id}/>
            )
         }
      </ul>
   )
}

export default List