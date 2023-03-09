import { useNavigate } from "react-router-dom"

function Login(){
  const navigate = useNavigate()

  const loginRedirect = () => {
    navigate("/userhomepage", {state:{
      id: 2
    }})
  }

  return(
  <section className="flex items-center flex-col justify-center h-screen gap-8">
    <h1 className="font-semibold text-2xl">Welcome Back</h1>
      <div className="max-w-[400px] w-full px-8">
        <form className="my-4">
          <label className="flex flex-col border-b-4 gap-2">
            <p className="text-gray-500">Username</p>
            <input type="text" className="outline-0 py-2 text-xl font-semibold"/>
          </label>
        </form>
        <form className="my-4">
          <label className="flex flex-col border-b-4 gap-2">
            <p className="text-gray-500">Password</p>
            <input type="password" className="outline-0 py-2 text-xl font-semibold"/>
          </label>
        </form>
        <a href="/forgotpassword" className="text-slate-600 hover:underline">Forgot Password?</a>
      </div>
      <div className="flex flex-row justify-between max-w-[400px] px-8 w-full">
        <button onClick={loginRedirect} className="bg-black rounded-lg text-white px-6 py-2">Sign In</button>
        <a href="/register" className="border-2 rounded-lg border-slate-300 px-4 py-2">Create Account</a>
      </div>
  </section>
  )
}
export default Login
