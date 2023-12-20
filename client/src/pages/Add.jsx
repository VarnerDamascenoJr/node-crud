import React, {useState} from 'react'

function Add() {

    const [book, setBook] = useState({
        title:'',
        desc:'',
        price:null,
        cover:''
})

    const getValues = e=>{
       
    }


    const handleSubmit = e=>{

    }


  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name='title' onChange={getValues} />
        <input type="text" name='desc'onChange={getValues}/>
        <input type="text" name='price'onChange={getValues}/>
        <input type="text" name='cover'onChange={getValues}/>
        <button type='onSubmit'>Add</button>
    </form>
  )
}

export default Add