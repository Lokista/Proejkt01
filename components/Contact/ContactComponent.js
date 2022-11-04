import React, { isValidElement } from 'react'
import Contact from '../reusable/Contact'
import { useState , useEffect } from 'react'
import { contactSchema } from '../Validation/ContactSchema'
import {useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

export function ContactComponent(){

    const { register , handleSubmit , formState: { errors } } = useForm(
    {
        resolver: yupResolver(contactSchema)
    }
    )


    const [data , setData ] = useState({
        email: "",
        reason: "",
        describe: "",
    })

    const onSubmit = (e) => {
        console.log(e)
    }

    return(
<div className='relative bg-elementC rounded-xl m-10 items-center text-center p-10'>
 <h1 className=' relative justify-center text-center text-5xl font-extrabold tracking-widest  text-red-500 p-5'>Contact us</h1> 
         <div className='relative justify-center'>
             If you have any problem with our site you can fill our ticket belowe we will try our best to help you
         </div>
        <form onSubmit={handleSubmit(onSubmit)} 
        className=" relative flex flex-col text-red-500 items-center justify-center text-center center mt-5" >
                        <div className='flex flex-nowrap flex-col pt-10'>
                        <label className='text-xl font-semibold pb-3 tracking-widest pr-[150px]'>Email:</label>
                        <input 
                         name='email'
                         {...register('email')}
                        type="text" 
                        className={`text-gray-700 bg-gray-100 sm:w-[350px] w-[300px] rounded-md h-[35px] pl-4 outline-none ml-auto mr-auto`}
                        placeholder="Your mail here...">
                        </input>
                        <span className=' text-sm ' >{errors?.email?.message}</span>

                        <label className='text-xl font-semibold pb-3 tracking-widest mt-5 pr-[150px] pt-3'>Reason:</label>
                        
                        <input 
                         name='reason'
                         {...register('reason')}
                        type="text" 
                        className={`text-gray-700 bg-gray-100 w-[300px] sm:w-[350px] rounded-md h-[35px] pl-4 outline-none ml-auto mr-auto`}
                        placeholder="what is your reason...">
                        </input>
                        <span className='mb-8 text-sm'>{errors?.reason?.message}</span>

                        <label className='text-xl font-semibold  pb-3 tracking-widest mt-5  pr-[150px] pt-3'>Describe:</label>
                        <textarea 
                        name='describe'
                        {...register('describe')}
                        rows="5" 
                        cols="25" 
                        type="text" 
                        className={`text-gray-900 bg-gray-100  rounded-md  pl-4 pb-1 outline-none w-[300px] sm:w-[500px] ml-auto mr-auto`}
                        placeholder="describe your problem...">

                        </textarea>
                        <span className=' text-sm'>{errors?.describe?.message}</span>

                        </div>
            <button type='submit' className='relative bg-red-500 p-3 pl-9 pr-9 rounded-md m-10 font-semibold text-gray-200 transition-colors hover-bg-red-400' >
              Submit
            </button> 
        </form>    
</div>
    )

}