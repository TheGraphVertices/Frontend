function Login(){
  return(
	<section className="flex items-center flex-col justify-center h-screen gap-8">
      <h1>Welcome Back</h1>
      <div className="max-w-[400px] w-full px-8">
        <form className="my-4">
          <label className="flex flex-col border-b-4 gap-2">
            <p>Username</p>
            <input type="text" className="outline-0"/>
          </label>
        </form>
        <form className="my-4">
          <label className="flex flex-col border-b-4 gap-2">
            <p>Password</p>
            <input type="password" className="outline-0"/>
          </label>
        </form>
        <a href="/forgotpassword" className="text-slate-500">Forgot Password?</a>
      </div>
      <div className="flex flex-row justify-between max-w-[400px] px-8 w-full">
        <button className="bg-black rounded-lg text-white px-6 py-2">Sign In</button>
        <a href="/register" className="border-2 rounded-lg border-slate-300 px-4 py-2">Create Account</a>
      </div>
	</section>
  )
}
export default Login
