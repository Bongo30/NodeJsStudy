import React from 'react'

function InputFeild(){
    return(
        <div>
            <label>Name</label>
            <input tpye="text"></input>
            <label>Phone</label>
            <input tpye="text"></input>
            <label>email</label>
            <input tpye="email"></input>
            <button>Insert</button>
            <button>Delete</button>
            <button>Update</button>
        </div>
    )
}

export default InputFeild;