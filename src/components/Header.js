import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const signoutHandler = () => {
      signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/");
      }).catch((error) => {
        // An error happened.
    });
  }
  return (
    <div className="absolute w-screen bg-gradient-to-b from-black flex justify-between">

        <img className="w-36" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo" />

          {
            user && (
              <div className="flex p-2">
              <h1 className="m-3">Welcome {user.displayName}</h1>
              <img className="m-2 right-0" src={user ? user.photoURL : "https://occ-0-4209-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTvTV1d97HoOuutIG9GUEJgNIhg89JU3EQmtIikzdqolTLHSDqxwytfl61TC-HlrVt7QrzxdB5xR3nD2CPKNL9TF3qKTmcI.png?r=cad"} alt="user icon"/>
              <button className="font-bold text-red-900" onClick={signoutHandler}>Logout</button>
            </div>
            )
          }
    </div>
  )
}

export default Header