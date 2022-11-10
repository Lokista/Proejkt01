import { ref , set, get , child , onValue} from 'firebase/database'
import { colProRef, db } from '../../auth/firebase'
import { useState , useEffect} from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ProductList from '../../components/ProductList/ProductList'
import { getDocs } from 'firebase/firestore'

function Product({ id , product }) {
    const prRef = ref(db,"product/")
    
  return (
    <div>
        <Header>

        </Header>

        <ProductList products={product} track={id} >

        </ProductList>
        
      <Footer>

      </Footer>
    </div>
  )
}

export const getServerSideProps = async (context) => {
    const { id } = context.params
    const Doks = await getDocs(colProRef) 
    const product = await Doks.docs.map((doc) => doc.data())

    return {
      props: {
        id,
        product,
      }
    }
}

export default Product