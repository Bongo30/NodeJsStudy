import React from 'react'

function InputFeild(props){

    return(
        <div>
            
            <label>Name : </label>
            <input id="name" tpye="text" value={props.value.name} onChange={props.onChange}></input>
            <label>Phone : </label>
            <input id="phone" tpye="text" value ={props.value.phone} onChange={props.onChange}></input>
            <label>Email : </label>
            <input id= "email" tpye="email" value={props.value.email} onChange={props.onChange}></input>
            <button onClick={props.onClick}>Insert</button>
            <button>Delete</button>
            <button>Update</button>
            
        </div>
    )
}

export default InputFeild;