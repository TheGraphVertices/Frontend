import { useState } from "react"

function CreateAccount(){
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const postAccount = async () => {
    const obj = {
      fname: username,
      lname: password,
      address: 'yes'
    }
    const response = await fetch('https://jeremypetch.com/create_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then((data) => data.json()).then((data) => { console.log(data) })
    return response
  }

  return(
	<section className="flex items-center flex-col justify-center h-screen gap-8">
      <h1 className="font-semibold text-2xl">Create Account</h1>
      <div className="max-w-[400px] w-full px-8">
        <form className="my-4">
          <label className="flex flex-col border-b-4 gap-2">
            <p className="text-gray-500">Username</p>
            <input onChange={(data) => {setUsername(data.target.value)}} type="text" className="outline-0 py-2 text-xl font-semibold"/>
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
        <button className="bg-black rounded-lg text-white w-full py-2">Sign Up</button>
      </div>
	  <p>Already have an account? <a href="/" className="hover:underline">Login Here</a></p>
    <button onClick={postAccount}>Test</button>
	</section>
  )
}
export default CreateAccount
