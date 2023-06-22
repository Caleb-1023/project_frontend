import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    
    const onSubmit = (e) => {
        e.preventDefault()
        navigate('/dashboard')
    }

  return (
    <div className="w-screen h-screen ">
        <div className=" h-full w-full flex items-center justify-center space-x-10 m-auto max-w-7xl">
            <div className="w-1/2">
                <h1 className="text-[#1b2e35] font-semibold text-3xl">Contemporary Clinics</h1>
                <img src="./login.jpg" alt="" />
            </div>
            <div className="w-1/2">
                <h1 className="text-[#007dfe] font-bold text-3xl">Login</h1>
                <form onSubmit={onSubmit} className="my-3">
                    <div>
                        <label htmlFor="username" className="block mb-2 mt-3">Username</label>
                        <input type="text" name="username" placeholder="username" className="block bg-slate-100 p-3 w-1/2 rounded-lg" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 mt-3">Password</label>
                        <input type="password" name="password" placeholder="password" className="block bg-slate-100 p-3 w-1/2 rounded-lg" />
                    </div>
                    <input type="submit" value="Log In" className="my-5 px-6 py-2 bg-[#007dfe] text-white rounded-xl" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login