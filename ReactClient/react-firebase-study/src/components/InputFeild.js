import React from 'react'

function InputFeild(props){

    return(
        <div>
            
            <label>Name : </label>
            <input tpye="text" value={props.value.name}></input>
            <label>Phone : </label>
            <input tpye="text" value ={props.value.phone}></input>
            <label>Email : </label>
            <input tpye="email" value={props.value.email}></input>
            <button onClick={props.onClick}>Insert</button>
            <button>Delete</button>
            <button>Update</button>
            
        </div>
    )
}

export default InputFeild;