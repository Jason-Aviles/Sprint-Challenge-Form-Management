import React,{useState,useEffect} from 'react';
import Login from './components/Login'
import {Link,Route} from 'react-router-dom'
import './App.css';
import Reg from './components/Reg'
import LoginOut from './components/LoginOut'
import Data from './components/data/DataList'
function App() {
const [register,setRegister] =useState('register')
const token = localStorage.getItem("token");

const changeReg=() =>{
if(token) {setRegister('users')}else{setRegister('register')}
}
useEffect(()=>{changeReg()},[])

  
  return (
    <div className="App">

<header>

<div className="ui menu">
  <div className="item">
    
{token ?<Link  className="ui button" to='/user'>{register}</Link>: <Link className="ui primary button" to='/register'>{register}</Link> }
  </div>
  <div className="item">
    {token ?<Link className="ui button" to='/loginOut'>LogOut</Link>: <Link  className="ui button" to='/login'>login</Link> }
  </div>

 
</div>





</header>
<Route exact path='/loginOut' component={LoginOut}/>
<Route exact path='/login' component={Login}/>
<Route exact path='/register'     component={Reg}/>
<Route exact path='/user'     component={Data}/>
   
    </div>
  );
}

export default App;
