"use client"
import React, { useState } from 'react'

const page = () => {

   const [firstNum, setfirstNum] = useState<number >(0);

   const[secondNum,setSecondNum]= useState<number >(0);
  
  
   const [display, setDisplay] = useState('0');
 
  const [operation, setOperation] = useState<string | null>(null);

  
  const handleClear = () => {
    setDisplay('0');
  
    setOperation(null);
   
  };
 
  const handleAdd=()=>{
   firstNum as number;
   secondNum as number;

  const result=firstNum+secondNum
  console.log(result)
   return result;
  }

  const handleSub=()=>{
   firstNum as number;
   secondNum as number;

  const result=firstNum-secondNum
 
   return result;
  }


  const handleMulti=()=>{
   firstNum as number;
   secondNum as number;

  const result=firstNum*secondNum
 
   return result;
  }

  const handleDiv=()=>{
   firstNum as number;
   secondNum as number;

  const result=firstNum/secondNum
 
   return result;
  } 
 
  return (
    <section className='w-full h-screen flex justify-center items-center '>

        <div className='flex border rounded-2xl p-2'>
            <div className='flex flex-col gap-2'>
                <button onClick={handleClear} className='border rounded-2xl p-2 '>
                    Clear
                </button>
                <div className='flex felx-col gap-2'>
                    <input 
                     className='border rounded-xl p-2'
                     placeholder='Num1'
                     onChange={()=>{setfirstNum}}
                    />
                    
                     <input 
                     className='border rounded-xl p-2'
                     placeholder='Num2'
                     onChange={()=>{setSecondNum}}
                    />                 
                   
                </div>
                 <div className='flex flex-row gap-3 items-center justify-center'>
                    <button onClick={handleAdd} className=' border p-2 rounded-xl px-11'>+</button>
                    <button onClick={handleSub} className=' border p-2 rounded-xl px-11'>-</button>
                    <button onClick={handleDiv} className=' border p-2 rounded-xl px-11'>/</button>
                    <button onClick={handleMulti} className=' border p-2 rounded-xl px-11'>*</button>
                   </div>

                   <div className='flex flex-col border rounded-xl p-2 justify-center items-center '>
                      <div className=''>
                      <p>Result:{result}</p>
                      </div>
                      
                       
                      <div className='mt-75' >
                         <p>History</p>
                      </div>
                   </div>
            </div>
        </div>
          
    </section>
  )
}

export default page