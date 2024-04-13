import React, {useState , useRef} from 'react'
import Header from './Header'
import {validateSignFormFeilds} from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(1);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const email = useRef(null);
    const password = useRef(null);
    const username = useRef(null);
    const navigate = useNavigate();
    const signinuphandler = () => {
        setIsSignInForm(!isSignInForm);
    }
    const onCLickSignButtonHandler = () => {
        const error = validateSignFormFeilds(email.current.value, password.current.value);
        setErrorMessage(error);
        if(errorMessage) return;

        if(!isSignInForm){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                      updateProfile(user, {
                        displayName: username.current.value, photoURL: "https://occ-0-4209-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
                      
                      }).then(() => {
                        // Profile updated!
                        // dispatch is used here as above values are not uploaded to store untill refreshing the page
                        const {uid, email, displayName, photoURL} = auth.currentUser; //auth.curretUser is used as it will fetch latest user data
                        dispatch(addUser({uid : uid, email : email,displayName : displayName, photoURL: photoURL}));
                        navigate("/browse");
                      }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message)
                      });
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const eMessage = error.message;
                    setErrorMessage(errorCode + " - "+ eMessage)
                    // ..
                });
        }else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate("/browse");
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const eMessage = error.message;
                setErrorMessage(errorCode + " - "+ eMessage)
              });
        }
    }

  return (
    <div>
        <div className="absolute">
            <Header />
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Login Background"/>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="absolute bg-black w-3/12 p-12 my-32 mx-auto right-0 left-0 text-white bg-opacity-70">
            <h1 className="text-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input ref={username} className="p-2 my-1 w-full bg-gray-700" type="text" placeholder="Enter Full Name" /> }
            <input ref={email} className="p-2 my-1 w-full bg-gray-700" type="text" placeholder="Enter email / phone number" />
            <input ref={password} className="p-2 my-1 w-full bg-gray-700"type="password" placeholder="Enter password" />
            <p className="p-2 my-1 text-red-700">{errorMessage}</p>
            <button className="p-2 my-4 bg-red-700 w-full rounded-lg" onClick={onCLickSignButtonHandler}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='my-6 cursor-pointer' onClick={signinuphandler}>New to Netflix? Sign Up now.</p>
        </form>
    </div>
  )
}

export default Login;