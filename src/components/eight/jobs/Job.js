import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react';
import Card from 'react-bootstrap/Card';
import Alert from '../products/Alert';



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
    <div className='container'>Job
      <div className='row row-cols-1 row-cols-sm-1  gy-10 '>
      <div className='col-sm-11'>
        <h1>Jobs</h1>
      { 
        data?.map((element)=>(
          <div  key={element._id}>
       
    <div className="card m-5" >
                <div className="card-body">
                    <div className="row">
                         <div className="col-sm-6 m-auto">
                            {/* <h1 className="text-black fs-1 fw-bold">{element.company}</h1> */}
                            <p className="lead text-black fs-4 fw-bold">Our shelter residents and students love participating in interactive workshops that are educational and fun.

So, if you’re an expert/facilitator, reach out to us!
We organize workshops on the following themes:
                            <ul class="list-group">
  <li class="list-group-item active">Computers</li>
  <li class="list-group-item">

  Sports and Yoga
</li>
  <li class="list-group-item">
  Creative Arts</li>
  <li class="list-group-item">Primary Education 
</li>
<li class="list-group-item">Basket Weaving
</li>
  
</ul></p>
                          <button onClick={()=>showAlert("Successfully booked your room","success")} className="btn btn-dark p-3 fw-bold fs-5">Apply now</button>
                        </div>
                        <div className="col-sm-6">
                            
                            <Card.Img variant="top" src={element.image} className="w-100" />
                         </div>
                       
                    </div>
                </div>
            </div>

          </div>
          

        ))
      }
      </div>
      <div className='col-sm-11'>
      <h1>Job opportunities</h1>
      { 
        data1?.map((element)=>(
          <div  key={element._id}>
       
    <div className="card m-5" key={element._id}>
    <div className="col-sm-6">
                            
                            <Card.Img variant="top" src={element.image} className="w-100" />
                         </div>
                <div className="card-body">
                    <div className="row">
                         <div className="col-sm-6 m-auto">
                            <h1 className="text-black fs-1 fw-bold">{element.company}</h1>
                            <p className="lead text-black fs-4 fw-bold">We offer multiple opportunities for the youth to get involved in field action and gain grassroot experience in the following areas: 
                            <ul class="list-group">
  <li class="list-group-item active">Social Care Worker</li>
  <li class="list-group-item">
Teaching and Mentorship
</li>
  <li class="list-group-item">
Content Writer</li>
  <li class="list-group-item">Designer/ Photographer</li>
  
</ul></p>
                          <button onClick={()=>showAlert("Successfully booked your room","success")} className="btn btn-dark p-3 fw-bold fs-5">Book</button>
                        </div>
                        
                       
                    </div>
                </div>
            </div>

          </div>
          

        ))
      }
      </div>
      </div>
       
    </div></div>
  )
}

export default Job