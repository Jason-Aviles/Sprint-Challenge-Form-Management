import React from 'react';
import Login from './components/Login'
import {Link,Route} from 'react-router-dom'
import './App.css';
import Reg from './components/Reg'
import LoginOut from './components/LoginOut'
import Data from './components/data/DataList'
function App() {

  const token = localStorage.getItem("token");
  return (
    <div className="App">

<header>
{token ?<Link to='/loginOut'><Route exact path='/loginOut' component={LoginOut}/></Link>: <Link to='/login'>login</Link> }

<Link to='/register'>reg</Link>
<Link to='/user'>users</Link>
</header>

<Route exact path='/login' component={Login}/>
<Route exact path='/register'     component={Reg}/>
<Route exact path='/user'     component={Data}/>
   
    </div>
  );
}

export default App;
