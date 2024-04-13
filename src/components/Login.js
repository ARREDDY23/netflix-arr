import React, {useState} from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(1);
    const signinuphandler = () => {
        setIsSignInForm(!isSignInForm);
    }

  return (
    <div>
        <div className="absolute p-2">
            <Header />
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Login Background"/>
        </div>
        <form className="absolute bg-black w-3/12 p-12 my-32 mx-auto right-0 left-0 text-white bg-opacity-70">
            <h1 className="text-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input className="p-2 my-1 w-full bg-gray-700" type="text" placeholder="Enter Full Name" value=""/> }
            <input className="p-2 my-1 w-full bg-gray-700" type="text" placeholder="Enter email / phone number" value=""/>
            <input className="p-2 my-1 w-full bg-gray-700"type="password" placeholder="Enter password" value=""/>
            <button className="p-2 my-4 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='my-6 cursor-pointer' onClick={signinuphandler}>New to Netflix? Sign Up now.</p>
        </form>
    </div>
  )
}

export default Login;