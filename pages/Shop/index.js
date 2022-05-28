import Feedback from "../../components/Feedback/Feedback"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { ref , set, get , child , onValue} from 'firebase/database'
import { db } from '../../auth/firebase'
import { useState , useEffect} from 'react'

function Shop () {

    const prRef = ref(db,"product/")
    const productse =  Object.values(onValue(prRef , (snap) => snap.val() ))
    const [ proData , setProData ] = useState([])

    useEffect( () => {

        onValue(prRef , (snap) => {
              setProData(snap.val())
        })
        console.log(`aha ${proData}`)
    },[])

    return(
        <div className="relative">
            {console.log(`ee ${Object.values(onValue(prRef , (snap) => snap.val() ))}`)}
            <Header/>
            {/* {products.forEach((u) => {
              console.log(`tak ${u}`)
          })} */}
          {/* {console.log(proData)}
          {console.log(`hhhhha${products}`)} */}
        <Feedback products={proData}>
          </Feedback>

            <Footer/>
        </div>
    )
}

// export async function getServerSideProps(context) {
//     // firebase data not working need fix

//     // local database
//     // const response = await fetch("http://localhost:3000/localDB/MOCK_DATA.json" );
//     // const products = await response.json();


//     return{
//         props:{
//              products,
//         },
//     }

// }
export default Shop