import React from 'react'


const LoginSignup = ({product, handleClick}) => {
  return (
    <div className=" flex justify-center items-center xl:h-[800px] h-[650px]">
    <div className=" shadow-lg bg-pale-blue xl:h-[700px] h-[600px] xl:w-[600px] w-[500px] rounded-xl mt-20 mb-20">
      <form className="flex m-20 flex-col items-center">
      <h2 className="text-4xl text-coral-red font-palanquin font-semibold m-5">Sign Up</h2>
      <input className="input" type="text" placeholder="Your Name" />
      <input className="input" type="text" placeholder="Email Address"/>
      <input className="input" type="password" placeholder="Passwoed"/>
      <button className="rounded-lg text-white mt-5 bg-coral-red font-palanquin w-40 h-16 font-semibold text-2xl p-3 m-2">Sign Up</button>
      <p className="text-xl">Already have an account ? <span className="font-semibold text-coral-red">Login here</span></p>
    </form>
    </div>
    </div>
  )
}

export default LoginSignup
