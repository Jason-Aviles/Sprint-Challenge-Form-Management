import React,{useState,useEffect} from 'react';
import {axiosWithAuth}  from '../utils/auth'

import { Card, Icon } from 'semantic-ui-react'
const Datalist = () => {
const  [Data ,setData] = useState([])
const token = localStorage.getItem("token");
console.log(token)




const updateState = ()=>{
   axiosWithAuth().get(  "http://localhost:8000/api/restricted/data")
    .then( (res)=> {
      // handle success
      setData(res.data);
    })
    .catch( (error)=> {
      // handle error
      console.log(error);
    })
   
}


useEffect(()=>updateState(),[])

    return (





        <div style={{display:"flex",justifyContent:"center" ,flexDirection:"row",alignItems:'center',flexWrap:'wrap'}}>
      {Data.map(item =>   <Card 
    image='https://placeimg.com/640/480/people'
    header={item.name}
    meta={item.course}
    description={item.ingredients.map(ingre => <p>{ingre}</p>)}
    extra={item.technique}
  />)}
        </div>
    );
};

export default Datalist;