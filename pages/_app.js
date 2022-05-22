import { AuthContextProvider } from '../components/Context/AuthContext'
import { Provider } from "react-redux"
import '../styles/globals.css'
import {store} from "../Redux/shop"



function MyApp({ Component, pageProps }) {

  return (
    <AuthContextProvider>
      <Provider store={store}>
     <Component {...pageProps} />
   </Provider>
  </AuthContextProvider>

  )
}

export default MyApp
