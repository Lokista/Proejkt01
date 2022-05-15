import { useState } from "react"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

function SignUp() {
    const [data , setData] = useState({
        email: "",
        password: "",
    })

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(data)
    }

    return(
        <div>
            <Header>

            </Header>
        <div className="text-red-500 font-semibold flex flex-cols tracking-widest text-xl justify-center items-center text-center p-5  ">
            <form onSubmit={handleLogin} 
            className="bg-elementC w-[900px] h-[800px] rounded-md items-center justify-center flex flex-col">
                        <h1 className=" text-5xl font-extrabold tracking-widest pb-20">SignUp</h1>
                        <div className="flex flex-col p-5">
                <label className="pr-[120px] pb-3">
                    Email address:
                </label>
                <input
                className="bg-red-100 w-[350px] rounded-md h-[35px] pl-4 pb-1"
                onChange={(e) => {
                    setData({
                        ...data,
                        email: e.target.value
                    })}
                }
                    value={data.email}
                    required
                    type="email"
                    placeholder="Enter email"
                
                >
                
                </input>
                </div>


                <div className="flex flex-col p-5">
                <label className="pr-[160px]">
                    Password:
                </label>
                <input
                className="bg-red-100 w-[350px] rounded-md h-[35px] pl-4 pb-1"
                onChange={(e) => {
                    setData({
                        ...data,
                        password: e.target.value
                    })}
                }
                    value={data.password}
                    required
                    type="password"
                    placeholder="Password"
                
                >
                
                </input>
                </div>

                
                <div>
                <button type="submit" className="bg-gray-500 p-3 pl-9 pr-9 rounded-md m-10 font-semibold">
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