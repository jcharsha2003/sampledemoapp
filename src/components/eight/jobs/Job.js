import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react';
import Card from 'react-bootstrap/Card';
import Alert from '../products/Alert';
import Button from 'react-bootstrap/Button';


function Job() {

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
 let [data1,setData1]=useState([])
 useEffect(()=>{
  
  axios.get("http://localhost:5000/job-api/data")
  .then(response=>{setData(response.data.payload)
  
  })
  .catch(err=>console.error(err))

  // getting from workshop db
  axios.get("http://localhost:5000/work-api/data1")
  .then(response=>{setData1(response.data.payload)
  console.log(response.data.payload)
  })
  .catch(err=>console.error(err))

 },[])
 console.log(data1)
  return (
    <div><Alert alert={alert} setBoth={setBoth}/>
    <div>Job
      <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 gx-10'>
      <div className='col-sm-6'>
        <h1>Jobs</h1>
      { 
        data?.map((element)=>(
          <div  key={element._id}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={element.image} />
      <Card.Body>
        
        <Card.Title>{element.company}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary" onClick={()=>showAlert("Successfully booked your room","success")}>Apply</Button>
      </Card.Body>
    </Card>

          </div>
          

        ))
      }
      </div>
      <div className='col-sm-6'>
      <h1>WorkShop</h1>
      { 
        data1?.map((element)=>(
          <div  key={element._id}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={element.image} />
      <Card.Body>
        
        <Card.Title>{element.work}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary" onClick={()=>showAlert("Successfully booked your room","success")}>Apply</Button>
      </Card.Body>
    </Card>

          </div>
          

        ))
      }
      </div>
      </div>
       
    </div></div>
  )
}

export default Job