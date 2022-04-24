import React from 'react'
import CompanyInfo  from "../reusable/CompanyInfo"
import { useState } from "react"

function Contact() {
    const [showMore , setShowMore ] = useState(false);

const map = "Wroclaw";

  return (
<div className='flex'>

    
   {CompanyInfo.Contact.map((contact) => {
    
    if( contact.Miasto === map ){ // choose city
        return (  
            <div className='flex'>
                
        <ul key={contact.Miasto}>
        <li><strong>Information</strong></li>
            <li>
            Miasto: {contact.Miasto}
            </li>
            <li>
            Panstwo: {contact.Panstwo}
            </li>
            <li>
            Numer: {contact.Telefon}
            </li>
            <li className='flex space-x-2'>
            <a>ul.{contact.Ulica}</a>
            <a>{contact.Miasto}</a>
            <a>{contact.Numer}</a>
            </li>
            </ul> 
            <ul className='pl-5 2xl:pl-48'>
            <li ><strong>When Open:</strong></li>
            {contact.Czynne.map((day) => {
                return (<li key={day.id} className="w-36">
                    { day.id === 6 ? `${day.Day}: nieczynne` : `${day.Day}: ${day.od} - ${day.do}` }
                    </li>)
            }
            )}
            </ul>
        </div>
        
        )
        
       }
       return
   }
   )
   }

</div>
  )
}

export default Contact