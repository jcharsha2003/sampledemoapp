import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react';
import Card from 'react-bootstrap/Card';
import Alert from '../products/Alert';
function Health() {

  let [alert,setBoth]=useState(null)
  const showAlert=(message,type)=>{
    setBoth({
        
        msg:message,
        type:type
    })
    setTimeout(()=>{
      setBoth(null)
    },4000)
  }
 let [data,setData]=useState([])
 useEffect(()=>{
  
  axios.get("http://localhost:5000/health-api/data")
  .then(response=>{setData(response.data.payload)
  console.log(response.data.payload)
  })
  .catch(err=>console.error(err))

 },[])
 console.log(data)
  return (
    <div><Alert alert={alert} setBoth={setBoth}/>
    <div>Health
      <div>
      <h1>Health Care</h1>
      {
        data?.map((element)=>(
          <div className="card m-5" key={element._id}>
                <div className="card-body">
                    <div className="row">
                         <div className="col-sm-6 m-auto">
                            <h1 className="text-black fs-1 fw-bold">{element.care}</h1>
                            <p className="lead text-black fs-4 fw-bold">{element.price}</p>
                          <button onClick={()=>showAlert("Appointment booked succesfully","success")} className="btn btn-dark p-3 fw-bold fs-5">Book</button>
                        </div>
                        <div className="col-sm-6">
                            
                            <Card.Img variant="top" src={element.image} className="w-100" />
                         </div>
                       
                    </div>
                </div>
            </div>

        ))
      }
      </div>
       
    </div></div>
  )
}

export default Health