import { useForm } from "react-hook-form";
import React, { useState } from 'react'
export default function form() {
 const [users, setUser] = useState("")
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);

const onSubmit =async(user)=>{
    //   setUser(user)
  const response = await fetch ('/api/users',{
    method :'POST',
    body: JSON.stringify(user),
    headers : {
        'Content-Type' : 'application/json'
    }
  })
  const users = await response.json()
  console.log(users)
}

//   console.log(watch("userName")); 

  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <input defaultValue="test" {...register("userName")} />
      
      
      <input {...register("email", { required: true })} />
     
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}