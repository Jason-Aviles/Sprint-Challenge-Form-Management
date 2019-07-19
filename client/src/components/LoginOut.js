import React from 'react';

const LoginOut = (props) => {
    const remove = ()=>{
        localStorage.removeItem('token')
        props.history.push('/login')
    }
    return (
        <div>
            {remove()}
        </div>
    );
};

export default LoginOut;