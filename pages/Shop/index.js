import Feedback from "../../components/Feedback/Feedback"
import ProductData from "../../components/Feedback/ProductData"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

function Shop ({products}) {

    return(
        <div className="relative">
            <Header/>

        <Feedback products={products}>
          </Feedback>

            <Footer/>

        </div>
    )
}
export async function getServerSideProps(context) {
    const response = await fetch("http://localhost:3000/localDB/MOCK_DATA.json" );
    const products = await response.json();

    return{
        props:{
             products,
        },
    }


}
export default Shop