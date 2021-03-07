import React from 'react';
import './App.css';
import {useForm} from 'react-hook-form';
import{ FormData,customResolver} from './custom-resolver';


function App() {
  const {
    register,
    handleSubmit,
    formState:{errors}    
  }=useForm<FormData>({
    mode:"onChange",
    resolver:customResolver
  });
  const onSubmit=(data:FormData)=>{
    alert(JSON.stringify(data));
  }
  return (
    <div className="App">
       <h1>React Hook Form optimized custom resolver</h1>
      <div className="formBlock">
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
         <input {...register('name')} placeholder="(ex: John)" />
         {errors.name && <p>{errors.name.message}</p>}
         <label>City</label>
         <input {...register('city')} placeholder="(ex: New York)" />
         {errors.city && <p>{errors.city.message}</p>}
         <label>Street</label>
         <input {...register("street")} />
         {errors.street && <p>{errors.street.message}</p>}
         <input type="submit" />
       </form>

      </div>
      
    </div>
  );
}

export default App;
