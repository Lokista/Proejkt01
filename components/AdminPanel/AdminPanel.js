import React, { useEffect, useState } from 'react'
import { ref , set, get , child , onValue , remove} from 'firebase/database'
import { db  } from '../../auth/firebase'

function AdminPanel({products}) {
    const [prodTable , setProdTable ] = useState([])
    const [tempData , setTempData ] = useState([])
    const [typeDelete , setTypeDelete] = useState(null)

    const prRef = ref(db,"product/")

    // const testRef = ref(db , "test/")
    //write data from local base
    const restoreData = (e) => {
        e.preventDefault()
        console.log("dzialam")
        // set(testRef , {
        //     Siemka: "xd",
        // })
        onValue(prRef , (snap) => {
            console.log(snap.val())
        })
        {products.map((list) => {
            let productRef = ref(db,"product/" + list.id)
            set(productRef , {
                id: list.id, 
                title: list.title , 
                description: list.description , 
                price: list.price , 
                count: list.count , 
                image: list.image ,
            })
        })}
    }
    //delete data
    const deleteData = () => {
        remove(ref(db,"product/" + typeDelete))
        setTypeDelete("")
    }
  return (
    <div>
        <div>
          {products.forEach((u) => {
              console.log(u)
          })}
        </div>
        <button onClick={(e) => restoreData(e)} className="button" >add to data base</button>

        <input className='text-black' type="text" value={typeDelete} onChange={(e) => setTypeDelete(e.target.value)} ></input>
        <button onClick={(e) => deleteData(e)} className=" button">delete</button>

        <button className=" button">x</button>
        
    </div>
  )
}

export default AdminPanel