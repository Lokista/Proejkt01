import { useState,useEffect } from "react"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { useAuth } from '../../components/Context/AuthContext'
import { SignInSchema } from "../../components/Validation/SignInSchema"
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

function SignUp() {

    const { register , handleSubmit , formState: { errors} } = useForm(
        {
        resolver: yupResolver(SignInSchema)
        }
    )

    const { user , signup } = useAuth() 
    console.log(user)


    const [data , setData] = useState({
        email: "",
        password: "",
    })

    useEffect(() => {
        console.log("tu powinien byc email:",data.email)
    })

    const handleSignUp = async (e) => {
              signup(data.email , data.password)
            }

    return(
        <div>
            <Header>
            </Header>
        <div className="text-red-500 font-semibold flex flex-cols tracking-widest text-xl justify-center items-center text-center p-5  ">
            <form onSubmit={handleSubmit(handleSignUp)} 
            className="bg-elementC w-[900px] h-[800px] rounded-md items-center justify-center flex flex-col">
                        <h1 className=" text-5xl font-extrabold tracking-widest pb-20">SignUp</h1>
                        <div className="flex flex-col p-5">
                <label className="pr-[120px] pb-3">
                    Email address:
                </label>
                <input
                className="bg-gray-100 text-gray-700 w-[350px] rounded-md h-[35px] pl-4 pb-1 outline-none"
                {...register('email' , {
                    onChange: (e) => {
                        setData((prev) => ({
                            ...prev,
                            email: e.target.value


                        }))
                    },
                })}
                    type="text"
                    placeholder="Enter email"
                >
                </input>
                <span className='mb-8 text-sm'>{errors?.email?.message}</span>
                </div>


                <div className="flex flex-col p-5">
                <label className="pr-[160px] pb-3">
                    Password:
                </label>
                <input
                
                {...register('password' , {
                    onChange: (e) => {
                        setData((prev) => ({
                            ...prev,
                            password: e.target.value


                        }))
                    },
                }   )}
                className="bg-gray-100 text-gray-700 w-[350px] rounded-md h-[35px] pl-4 pb-1 outline-none"
                    type="password"
                    placeholder="Password"
                >
                
                </input>
                <span className='mb-8 text-sm'>{errors?.password?.message}</span>
                </div>
                <div>
                <button type="submit" className="bg-red-500 p-3 pl-9 pr-9 rounded-md m-10 font-semibold text-gray-200 transition-colors hover-bg-red-400 ">
                    SignUp
                </button>
                </div>

            </form>

        </div>
        <Footer>

        </Footer>
        </div>
    )
}
export default SignUp