import { doc, setDoc } from 'firebase/firestore'
import React, { useState , useEffect , useRef} from 'react'
import { dbF } from '../../auth/firebase'
import { useAuth } from '../Context/AuthContext'
import useFindNextId from '../CustomHooks/useFindNextId'
import Svg from '../Svg'
import { getNextId } from '../CustomHooks/useFindNextId'

function AddComponent() {
const  nextIndex  = useFindNextId()
const [hide , setHide] = useState(false)
const imageInput = useRef(null)
const sizeRef = useRef(null)
const { user  , logout}  = useAuth()
const keepNextIndex = () => {
  if (nextIndex = 0) return

} 
useEffect(() => {
  console.log(shoesData)
  console.log("co to jest nextIndex " , nextIndex)

})

const shoeCategory = [
  "Football","Tennis","Basketball","Running","Skateboarding",
"Soccer","Golf","Baseball","Hiking","Cycling",
"Training","Walking","Lifestyle","Yoga","Gym",
"Boxing","Volleyball","Dance","Tennis","Skateboarding",
"Soccer","Golf","Baseball","Hiking","Cycling","Training",
"Walking","Lifestyle","Yoga","Gym","Boxing","Volleyball","Dance",]
const shoeType = [
  "Sandals","Slippers","Boots",
  "Sneakers","Loafers","Flats",
  "Heels","Wedges","Clogs","Mules",
  "Slip-ons","Espadrilles","Oxfords",
  "Derbys","Monks","Brogues",
  "Loafers","Flats","Heels","Wedges","Clogs",
  "Mules","Slip-ons","Espadrilles","Oxfords",
  ,"Monks","Brogues"]

const shoeSize = [
  { value: '34', label: '34' },
  { value: '35', label: '35' },
  { value: '36', label: '36' },
  { value: '37', label: '37' },
  { value: '38', label: '38' },
  { value: '39', label: '39' },
  { value: '40', label: '40' },
  { value: '41', label: '41' },
  { value: '42', label: '42' },
  { value: '43', label: '43' },
  { value: '44', label: '44' },
  { value: '45', label: '45' },
  { value: '46', label: '46' },

]
const addCategory = (e) => {
  if(shoesData.category == null) {
    setShoesData({...shoesData , category : [e]})
    return
  }
  if(shoesData.category.includes(e)){
    console.log("category already exist")
  }else{
    setShoesData({
      ...shoesData, category: [...shoesData.category, e]
    })
  }
}
const addType = (e) => {
  if(shoesData.type == null) {
    setShoesData({...shoesData , type :[e]})
    return
  }
  if(shoesData.type.includes(e)){
    console.log("type already exist")
  }else{
    setShoesData({
      ...shoesData, type: [...shoesData.type, e]
    })
  }
}


const [shoesData , setShoesData] = useState({
    id: nextIndex,
    owner: user.email,
    name: "",
    model: "",
    description: "",
    size: "",
    count: "",
    price: "",
    image: null,
    brand:"",
    category: null,
    type: null
})

const addNewData = (e) => {
  e.preventDefault()
  getNextId().then((fr) => {
    console.log("to ja",fr)
    setDoc(doc(dbF , 'products' , `${fr}`), {
      id: fr, 
      owner: shoesData.owner,
      name: shoesData.name,
      model: shoesData.model,
      description: shoesData.description,
      size: shoesData.size,
      count: shoesData.count,
      price: shoesData.price,
      image: shoesData.image,
      brand: shoesData.brand,
      category: shoesData.category,
      type: shoesData.type
  })
  })
  console.log(shoesData)
    // setDoc(doc(dbF , 'products' , `${nextIndex}`), {
    //       id: shoesData.id, 
    //       owner: shoesData.owner,
    //       name: shoesData.name,
    //       model: shoesData.model,
    //       description: shoesData.description,
    //       size: shoesData.size,
    //       count: shoesData.count,
    //       price: shoesData.price,
    //       image: shoesData.image,
    //       brand: shoesData.brand,
    //       category: shoesData.category,
    //       type: shoesData.type
    //   })
  }

const addImage = (e) => { 
  const file = e.target.files[0]
  const reader = new FileReader()
  if(e.target.files[0]){
    reader.readAsDataURL(e.target.files[0])
  }
  reader.onloadend = () => {
    setShoesData({...shoesData , image: reader.result})
  }
}
const deleteImage = () => {
  setShoesData({...shoesData , image: null})

}

  return (
    <div className=' bg-backgr'>
      <h1 className=" text-5xl font-extrabold tracking-widest text-red-500 text-center mt-5">Add product</h1>
      <form className='bg-elementC rounded-xl sm:m-6 md:m-8 lg:m-12 p-12 '  onSubmit={e => addNewData(e)}>
      <div className='relative    flex flex-row justify-between space-x-2 '>
        <div className=''>
        {/* NAME */}
        <div className='  text-center'>
      <label className=' text-red-500'>Product name</label>
        <input type='text ' className='rounded-md bg-gray-100 text-gray-900 outline-none'
        onChange={(e) => setShoesData({...shoesData , name: e.target.value})}
        ></input>
        </div>
        <br></br>
        <br></br>
        {/* MODEL */}
        <div className='  text-center'>
      <label className=' text-red-500'>Product model</label>
        <input type='text ' className='rounded-md bg-gray-100 text-gray-900 outline-none'
        onChange={ (e) => setShoesData({...shoesData , model: e.target.value})}
        ></input>
        </div>
        <br></br>
        <br></br>
        {/* BRAND */}
        <div className='  text-center'>
      <label className=' text-red-500'>Brand name</label>
        <input type='text ' className='rounded-md bg-gray-100  outline-none text-gray-900'
        onChange={ (e) => setShoesData({...shoesData , brand: e.target.value})}
        ></input>
        </div>
        <br></br>
        <br></br>
        {/* SIZE */}
        <div className='  text-center'> 
        <label className=' text-red-500'>What size </label>
        <select className='bg-elementC outline-gray-300 outline-1 outline ' 
        onChange={ (e) => setShoesData({...shoesData , size: e.target.value})}
        onClick={e => {setHide(!hide)}}>
          <option className={` bg-elementC black `}> ---</option>
          {shoeSize.map((shoe) => {
            return (
              <option className={` bg-elementC black `} value={shoe.value} onChange={e => {
                
                console.log("dzialam")
              }}>
                {shoe.label}
              </option>
            )
          })}
        </select>
        </div>
        {/* COUNT */}
        <div className='  text-center'>
          <label className=' text-red-500' >How many</label>
          <input type='number'
          className='text-gray-900'
          onChange={ (e) => setShoesData({...shoesData , count: e.target.value})}
          ></input>
        </div >
        {/* IMAGE */}
        <div className='  text-center'>
          <label className=' text-red-500' >Add image</label>
          <input type="file" onChange={addImage} ref={imageInput} 
          className="text-gray-900" />
          {shoesData.image && (
            <div className='flex justify-center'>
              <img src={shoesData.image} alt="shoe" className='w-20 h-20 object-cover' />
            </div>
          )}
        </div>
       
        {/* PRICE */}
        <div className='text-center' >
          <label className='text-red-500'>Price</label>
          <input type='number' className='text-gray-900'
          onChange={(e) => setShoesData({...shoesData , price: e.target.value})}
          ></input>
         </div>
       </div>
       {/* Second flex div */}
       <div className='w-[400px] flex flex-col'>
        {/* categories */}
       <div className='relative p-5  text-center'>
        <label className='text-white font-semibold'>Your categories</label>
          <div className='flex bg-zinc-800 rounded-md p-1 space-x-3 flex-wrap'> 
          {shoesData.category != null && (shoesData.category.map((shoe) => {
            return (
              <div className='flex'>
                <label>{shoe}</label>
                <div className=" h-3" onClick={e => setShoesData({
                  ...shoesData, category: shoesData.category.filter((item) => item !== shoe)
                })}> 
                <Svg need="delete" />
                </div>
              </div>
            )
          }))}
          </div>
        </div>
        {/* type */}
        <div className='relative p-5  text-center'>
        <label className='text-white font-semibold'>Your type of shoe</label>
          <div className='flex bg-zinc-800 rounded-md p-1 space-x-3 flex-wrap'> 
          {shoesData.type != null && (shoesData.type.map((shoe) => {
            return (
              <div className='flex'>
                <label>{shoe}</label>
                <div className=" h-3" onClick={e => setShoesData({
                  ...shoesData, type: shoesData.type.filter((item) => item !== shoe)
                })}> 
                <Svg need="delete" />
                </div>
              </div>
            )
          }))}
          </div>

        </div>
        
       </div>
        {/* third flex div */}
       <div className=' '>  
        {/* category */}
        <div className='w-[400px] text-center'>
          <label className='text-white font-semibold'>Pick category that describe your shoes</label>
          <div className='flex bg-zinc-800 flex-wrap space-x-3' >
          {shoeCategory.map((shoe) => {
            return (
              <div className='flex' onClick={
                e => addCategory(shoe) }>
                <label>{shoe}</label>
                <Svg need="add"/>
              </div>
            )
          })}
          </div>
        </div>
        <div className='w-[400px] text-center'>
          <label className='text-white font-semibold'>Pick type that describe your shoes</label>
          <div className='flex bg-zinc-800 flex-wrap space-x-3' >
          {shoeType.map((shoe) => {
            return (
              <div className='flex' onClick={
                e => addType(shoe) }>
                <label>{shoe}</label>
                <Svg need="add"/>
              </div>
            )
          })}
          </div>
        </div>
       </div>
        </div>
        <div>
          
        </div>
        <div className='text-center flex flex-col'>
        <label className='text-xl font-semibold  pb-3 tracking-widest mt-5  pr-[150px] pt-3'>Describe:</label>
                        <textarea 
                        onChange={ (e) => setShoesData({...shoesData , description: e.target.value})}
                        name='describe'
                        rows="5" 
                        cols="25" 
                        type="text" 
                        className={`text-gray-900 bg-gray-100  rounded-md  pl-4 pb-1 outline-none w-[300px] sm:w-[500px] ml-auto mr-auto`}
                        placeholder="describe your problem...">

                        </textarea>
                        </div>
        
        <div className=' text-center'>
        <button type='submit' className='bg-red-500 p-3 pl-9 pr-9 rounded-md m-10 font-semibold text-gray-200 transition-colors hover:bg-red-400 '>
          Add item

        </button>
        </div>
      </form > 
    </div>
  )
}

export default AddComponent