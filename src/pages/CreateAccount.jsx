import { useState } from "react"
import { useNavigate } from "react-router-dom"

function CreateAccount(){
  const [firstName, setFirstName] = useState()
  const [password, setPassword] = useState()
  const [lastName, setLastName] = useState()
  const [address, setAddress] = useState()
  const [duplicate, setDuplicate] = useState()
  const navigate = useNavigate()

  const postAccount = async () => {
    const obj = {
      fname: firstName,
      lname: lastName,
      address: address,
      password: password
    }

    const response = await fetch('https://api.jeremypetch.com/user/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj),
    })

    if(response.status === 409){
      setDuplicate(true)
    }
    else{
      const id = await response.text()
      navigate("/userhomepage", { state: {
        uid: `${id}`
      }})
    }
}

  return(
  <section className="flex items-center flex-col justify-center h-screen gap-8 my-16">
    <h1 className="font-semibold text-2xl">Create Account</h1>
    <h2 className={duplicate ? "block" : "hidden"}>Account already made using credentials</h2>
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
      <button onClick={postAccount} className="bg-black rounded-lg text-white w-full py-2">Sign Up</button>
    </div>
    <p>Already have an account? <a href="/" className="hover:underline">Login Here</a></p>
  </section>
  )
}
export default CreateAccount
