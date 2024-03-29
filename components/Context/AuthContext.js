import {createContext , useContext } from 'react'
import { onAuthStateChanged , createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword  } from 'firebase/auth'
import { useEffect , useState} from 'react'
import { auth } from '/auth/firebase'


const AuthContext = createContext({

})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {

    const [user , setUser ] = useState(null)

    const [ loading , setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged( auth , (user) => {
            if(user){
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                })
            }else{
                setUser(null)
            }
            setLoading(false)
        })
        return () => unsubscribe()
    },[])

    const signup = (email , password) => {
         return createUserWithEmailAndPassword(auth , email, password)
    }

    const login = (email , password) => {
        return signInWithEmailAndPassword(auth , email, password)
   }

   const logout = async () => {
       setUser(null)
       await signOut(auth)
   }



    return(
        <AuthContext.Provider value={{ user , login , signup , logout }}> 
            {loading ? null : children}
            {console.log(`to jest ${children}`)}
        </AuthContext.Provider>
    )
}