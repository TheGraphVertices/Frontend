function ForgotPassword(){
  return(
	<section className="flex items-center flex-col justify-center h-screen gap-8">
      <h1 className="font-semibold text-2xl">Forgot Password?</h1>
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
      	<button className="bg-black rounded-lg text-white px-6 py-2 w-full">Reset Password</button>
      </div>
	  <a href="/" className="hover:underline">Back to login page</a>
	</section>
  )
}
export default ForgotPassword
