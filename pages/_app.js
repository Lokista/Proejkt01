import '../styles/globals.css'
import { AuthContexProvider } from '../context/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContexProvider>
  <Component {...pageProps} />
  </AuthContexProvider>
  )
}

export default MyApp
