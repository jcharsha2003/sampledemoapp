import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react';
import {useForm} from "react-hook-form"
import {loginContext} from '../context/loginContext'
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import './User.css'






function User() {


    let [error,setError]=useState("")
    let {register,handleSubmit,setValue,getValues,formState:{errors}}=useForm();
    const [show, setShow] = useState(false);
    const [userToEdit, setUserToEdit] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    const getUsers=()=>{
        axios.get(`http://localhost:5000/user-api/get-user/${currentUser.username}`)
        .then(response=>{setData(response.data.payload)
        console.log(response.data.payload)
        }
        )
        .catch((err)=>
        {
            if(err.response){
                setError(err.message)
                console.log(err.response)
            }
            else if(err.request){
                setError(err.message)
    
            }
            else{
                setError(err.message)
            }
        })
    }


// edit user
  const editUser=(userObj)=>{
    handleShow()
    setUserToEdit(userObj)
    setValue("username",userObj.username)
    setValue("dob",userObj.dob)
    setValue("email",userObj.email)
    setValue("phone",userObj.phone)

  }
//   saveModifiedUser
  const saveModifiedUser=()=>{
    handleClose()
    let modifieduser=getValues()
    
    axios.put("http://localhost:5000/user-api/update-user",modifieduser)
    .then(response=>{ 
        if(response.status===200){
        getUsers()
       }})
    .catch((err)=>
    {
        if(err.response){
            setError(err.message)
            console.log(err.response)
        }
        else if(err.request){
            setError(err.message)

        }
        else{
            setError(err.message)
        }
    })
  }




    let [data,setData]=useState({})
    let [currentUser]=useContext(loginContext)
    useEffect(()=>{
       getUsers()

    },[])
  return (
    <div>User
        <div className='m-auto d-block'>
        {error?.length!==0 && <p className='text-danger display-1'> {error}</p>}
       
    <Card style={{ width: '18rem' }} >
      <Card.Body>
        <Card.Title>{data.username}</Card.Title>
        <Card.Text>
            <div>{data.dob}</div>
          <div>{data.email}</div>
          <div> {data.phone}</div>
         
        </Card.Text>
        <Button variant="secondary" onClick={()=>editUser(data)}>Edit<i class="fas fa-edit"></i></Button>
      </Card.Body>
    </Card>


    <Modal show={show} onHide={handleClose} backdrop="static" centered className='modal'>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form  onSubmit={handleSubmit(saveModifiedUser)}>
          <div className='row row-cols-1 row-cols-sm-2'>
            <div className='col'>
                <label htmlFor='username'  className='form-label'>User Name</label>
                <input type="text" id='username'  className='form-control bg-light' 
                {...register("username",{required:true,minLength:6,maxLength:10})} disabled
                ></input>
                {
                    errors.username?.type==="required" && <p className=' text-danger'>*enter your first name</p>
                }
                {
                    errors.username?.type==="minLength" && <p className=' text-danger'>*minimum 4 letter word is required</p>
                }
                {
                    errors.username?.type==="maxLength" && <p className=' text-danger'>*maximum 6 letter word is required</p>
                }

            </div>
           
          </div>
          {/* second row for date of birth  */}
          <div className='row row-cols-1 row-cols-sm-2'>
            <div className='col'>
                <label htmlFor='dob'  className='form-label'>date of birth</label>
                <input type="date" id='dob'  className='form-control bg-light' {...register("dob",{required:true})}></input>
                {errors.dob?.type==="required" && <span className='text-sm text-danger'>*birthday is required</span>}
            </div>
            
          </div>
          {/* third row  contains Email and Phone Number*/}
          <div className='row row-cols-1 '>
            <div className='col'>
                <label htmlFor='email'  className='form-label'>Email</label>
                <input type="email" id='email'  className='form-control bg-light'{...register("email",{required:true})} ></input>
                {
                    errors.email?.type==="required" && <p className=' text-danger'>*enter your valid email id</p>
                }
            </div>
            <div className='col'>
            <label htmlFor='phone' className='form-label'>Phone Number</label>
                <input type="number" id='phone' className='form-control bg-light' {...register("phone",{required:true,maxLength:11})}  ></input>
                {
                    errors.phone?.type==="required" && <p className=' text-danger'>*enter your Phone number</p>
                }
                {
                    errors.phone?.type==="maxLength" && <p className=' text-danger'>*maximum number length should be 10</p>
                }
            </div>
          </div>
          
          
          
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveModifiedUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    </div>
  )
}

export default User