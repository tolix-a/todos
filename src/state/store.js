import axios from 'axios';
import {create} from 'zustand';

const instance = axios.create({
   baseURL:'https://port-0-express-server-m0uagft6bec98aeb.sel4.cloudtype.app',
});


const store = create((set)=>({
   data: [],
   sortData: [],
   dataCtrl: async function(action){
      
      let res;
      switch(action.type){
         case 'get' : 
         res = await instance.get("/"); break;

         case 'post' : 
         res = await instance.post("/",action.data); break;
         
         case 'put' : 
         res = await instance.put("/",action.data); break;
         
         case 'delete' : 
         res = await instance.delete(`/?id=${action.data}`); break;
      }
      set({data:res.data.list})

      // set((d)=>{
      //    return {data:d.data + 10}
      // })
   },
   sortCtrl: function(sort){
      set((state)=>{
         // true = 일을 끝냄
         // false = 해야할 일

         let findData;
         switch(sort.type){
            case 'Active': return {sortData: state.data.filter(obj=> obj.status == false)};
            case 'Completed': return {sortData: state.data.filter(obj=> obj.status == truer)};
            default: return {sortData: state.data};
         }
      });
   }
}))

export default store;