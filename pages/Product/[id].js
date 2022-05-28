import { ref , set, get , child , onValue} from 'firebase/database'
import { db } from '../../auth/firebase'
import { useState , useEffect} from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ProductList from '../../components/ProductList/ProductList'

function Product({ id }) {
    const prRef = ref(db,"product/")
    // const productse =  Object.values(onValue(prRef , (snap) => snap.val() ))
    const [ proData , setProData ] = useState([])


    useEffect( () => {
        onValue(prRef , (snap) => {
              setProData(snap.val())
        })
        console.log(`aha ${proData}`)
    },[])

  return (
    <div>
        <Header>

        </Header>

        <ProductList products={proData} track={id} >

        </ProductList>
        
      <Footer>

      </Footer>
    </div>
  )
}

export const getServerSideProps = async (context) => {
    const { id } = context.params

    return {
      props: {
        id,
      }
    }
}

export default Product