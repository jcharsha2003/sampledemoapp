import React from 'react'

import {useForm} from "react-hook-form"

function Login() {
    let {register,handleSubmit,formState:{errors}}=useForm();

    let formSubmit=(userobj)=>{
     console.log(userobj);
    }
    console.log("error obj",errors);
  return (
    <div className='text-center'>
  <form onSubmit={handleSubmit(formSubmit)}>
            <div>
              <label htmlFor="username" className="form-label">
                UserName
              </label>
              <input
                type="text"
                id="username"
                className="form-control bg-light w-50 m-auto"
                {...register("username", {
                  required: true,
                  minLength: 4,
                  maxLength: 22
                })}
              ></input>
              {errors.username?.type === "required" && (
                <p className=" text-danger">*enter your first name</p>
              )}
              {errors.username?.type === "minLength" && (
                <p className=" text-danger">
                  *minimum 4 letter word is required
                </p>
              )}
              {errors.username?.type === "maxLength" && (
                <p className=" text-danger">
                  *maximum 22 letter word is required
                </p>
              )}
            
            </div>

            <div>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control bg-light w-50 m-auto"
                {...register("email", { required: true })}
              ></input>
              {errors.email?.type === "required" && (
                <p className=" text-danger">*enter your valid email id</p>
              )}
            </div>
            
            <button
              type="submit"
              
              className="btn btn-primary p-2 d-block m-auto mt-5"
            >
              Submit
            </button>
          </form>
    </div>
  )
}

export default Login