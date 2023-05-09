import React, { useState } from 'react'
import{Button, Form} from 'react-bootstrap';
import {PostData} from '../Redux/Action'
import {useDispatch} from 'react-redux'

function Addform() {
    const[input,setInput] = useState({
        name : '',
        dateofBirth :''
    })
    const[emptyField,setemptyField] = useState([])
    const[error,setError] = useState('')
    

    const dispatch = useDispatch()
    const handelChange = (e) =>{
        setInput({...input,[e.target.name] : e.target.value})
  
    }
    const handelSubmit= async()=>{
     
      const response =  await fetch('api/user/',{
      method:"POST",
      body:JSON.stringify(input),
      mode: 'cors',
      headers: {
		      "Access-Control-Allow-Origin": "*",
		      "Content-Type": "application/json"
    					},
    
      })
       
        const json =  await response.json()
        console.log(json)
        if(json.error){
          setError(json.error)
          setemptyField(json.emptyField)
        }
        if(!json.error){
        setError('')
        setemptyField('')
        dispatch(PostData(json))
        alert('Record added')
        }
      
      setInput({name:'',dateofBirth:''})

    }

    console.log(emptyField)
    console.log(error)
  return (
    <>
    
    <Form className='w-50 mx-auto border shadow p-5' style={{backgroundColor:'black'}}>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={input.name} onChange={handelChange} 
        className = {emptyField && emptyField.includes('name') ? "border border-danger" :''} 
        />
        <Form.Label>Date Of Birth</Form.Label>
        <Form.Control type="date" name="dateofBirth" value={input.dateofBirth} onChange={handelChange}
        className = {emptyField && emptyField.includes('dateofBirth') ? "border border-danger" : ''}
        />
        <Button onClick={handelSubmit}>Submit</Button>
        {error && <p style={{color:'red'}}>{error}</p>}
    </Form>
    </>
    
  )
}

export default Addform