import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Alert from './products/Alert';
import { useState } from 'react';
function Home() {


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
  return (
    
    <div className='text-center'>
        <p className='lead display-1'>Home</p>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.wixstatic.com/media/8b2558_51614afd2efe4d1291b696172a127324~mv2.jpg/v1/fill/w_850,h_624,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8b2558_51614afd2efe4d1291b696172a127324~mv2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div>
    <Alert alert={alert} setBoth={setBoth}/>
    <div className="card m-5" >
                <div className="card-body">
                    <div className="row">
                         <div className="col-sm-3 m-auto">
                            {/* <h1 className="text-black fs-1 fw-bold">{element.company}</h1> */}
                            
                          <button onClick={()=>showAlert("UPI Id: 9372564892@ybl","success")} className="btn btn-dark p-3 fw-bold fs-5">Donate</button>
                        </div>
                        <div className="col-sm-4">
                            
                            <Card.Img variant="top" src="https://images.moneycontrol.com/static-mcnews/2021/10/donation.jpg?impolicy=website&width=770&height=431" className="w-100" />
                         </div>
                       
                    </div>
                </div>
            </div>
    </div>


    </div>
  )
}

export default Home