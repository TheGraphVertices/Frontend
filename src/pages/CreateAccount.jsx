function CreateAccount(){
  return(
	<section className="flex items-center flex-col justify-center h-screen gap-8">
      <h1 className="font-semibold text-2xl">Create Account</h1>
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
      </div>
      <div className="flex flex-row justify-between max-w-[400px] px-8 w-full">
        <button className="bg-black rounded-lg text-white w-full py-2">Sign Up</button>
      </div>
	  <p>Already have an account? <a href="/" className="hover:underline">Login Here</a></p>
	</section>
  )
}
export default CreateAccount
