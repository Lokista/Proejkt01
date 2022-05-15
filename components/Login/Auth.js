import { createContext } from 'react'
import { useContext, useEffect } from 'react/cjs/react.production.min';
import { onAuthStateChanged } from 'firebase/auth'

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

function Auth( { children } ) { 
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , (user) => {
            if(user){
                setUser({
                    uid: user.uid,
                    email: user.email,
                    display: user.displayName
                }   )
            }else{
                setUser(null)
            }

            console.log(getIdToken)


    },[])

    return(
        <AuthContext.Provider value={{user}} >
            { children }
        </AuthContext.Provider>
    )
    }

