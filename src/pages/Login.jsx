import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Login(){
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [address, setAddress] = useState()
  const [password, setPassword] = useState()
  const [wrongPassword, setWrongPassword] = useState(false)

  const loginRedirect = async () => {
    const response = await fetch(`https://api.jeremypetch.com/user/?fname=${firstName}&lname=${lastName}&address=${address}&password=${password}`)
    if(response.status === 401){
      setWrongPassword(true)
    }
    else{
      const id = await response.text()
      navigate("/userhomepage", {
        state: {
          uid: id
        }
      })
    }
  }

  return(
  <section className="flex items-center flex-col justify-center h-screen gap-8">
    <h1 className="font-semibold text-2xl">Welcome Back</h1>
    <p className={wrongPassword ? "block text-lg" : "hidden"}>Password is incorrect</p>
    <div className="max-w-[400px] w-full px-8">
      <form className="my-4">
        <label className="flex flex-col border-b-4 gap-2">
          <p className="text-gray-500">First Name</p>
          <input onChange={(data) => {setFirstName(data.target.value)}} type="text" className="outline-0 py-2 text-xl font-semibold"/>
        </label>
      </form>
      <form className="my-4">
        <label className="flex flex-col border-b-4 gap-2">
          <p className="text-gray-500">Last Name</p>
          <input onChange={(data) => {setLastName(data.target.value)}} type="text" className="outline-0 py-2 text-xl font-semibold"/>
        </label>
      </form>
      <form className="my-4">
        <label className="flex flex-col border-b-4 gap-2">
          <p className="text-gray-500">Address</p>
          <input onChange={(data) => {setAddress(data.target.value)}} type="text" className="outline-0 py-2 text-xl font-semibold"/>
        </label>
      </form>
      <form className="my-4">
        <label className="flex flex-col border-b-4 gap-2">
          <p className="text-gray-500">Password</p>
          <input onChange={(data) => {setPassword(data.target.value)}} type="password" className="outline-0 py-2 text-xl font-semibold"/>
        </label>
      </form>
    </div>
    <div className="flex flex-row justify-between max-w-[400px] px-8 w-full">
      <button onClick={loginRedirect} className="bg-black rounded-lg text-white px-6 py-2">Sign In</button>
      <a href="/register" className="border-2 rounded-lg border-slate-300 px-4 py-2">Create Account</a>
    </div>
  </section>
  )
}
export default Login
