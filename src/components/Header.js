import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from "../utils/userSlice";
import { LOGO, USER_AVATAR } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid, email, displayName, photoURL} = user;
            dispatch(addUser({uid : uid, email : email,displayName : displayName, photoURL: photoURL}));
            navigate("/browse")
            // ...
        } else {
            // User is signed out
            // ...
            dispatch(removeUser());
            navigate("/")
        }
    });

    return () => unsubscribe();  // unmounting as every time header loads browser will add new event lister 
}, [])

  const signoutHandler = () => {
      signOut(auth).then(() => {
        // Sign-out successful.
        // navigate("/");
      }).catch((error) => {
        // An error happened.
    });
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">

        <img className="w-36" src={LOGO}
          alt="logo" />

          {
            user && (
              <div className="flex p-2">
              <h1 className="m-3 text-white">Welcome {user.displayName}</h1>
              <img className="m-2 right-0" src={user ? user.photoURL : USER_AVATAR} alt="user icon"/>
              <button className="font-bold text-xl text-red-700 cursor-pointer" onClick={signoutHandler}>Logout</button>
            </div>
            )
          }
    </div>
  )
}

export default Header