import { Context } from '@/app/hooks/hook'
import { useContext } from 'react'


function SubmitButton(){
    const context = useContext(Context);
    return (
        <button type='submit'  className="bg-primary-black py-5 my-4 px-6  text-primary-white rounded-lg text-lg font-lora font-semibold">{context.text.contactButton}</button>
    )
}


export default function Form() {
    const context = useContext(Context);

  return (
    <form action='' className='flex flex-col font-lora text-formText text-xs mx-3 lg:mx-6'>
            <label htmlFor='name'>{context.text.contactName}</label>
            <input type="text" id='name' name='Name' required  className='bg-transparent border-b border-gradiant1 my-3'/>
            <label htmlFor='name'>{context.text.contactEmail}</label>
            <input type="email" id='email' name='email' required className='bg-transparent border-b border-gradiant1 my-3' />
            <label htmlFor='phone'>{context.text.contactPhone}</label>
            <input type="tel" id='phone' name='phone' required  className='bg-transparent border-b border-gradiant1 my-3'/>
            <label htmlFor='message'>{context.text.contactMessage}</label>
            <input type="text" id='message' name='message' required  className='bg-[#CDCCCC] py-6 mt-3 mb-6 shadow-md'/>
            <div className='flex justify-center'> <SubmitButton/></div>
            
            </form>
  )
}
