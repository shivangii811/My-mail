import React from 'react'
import { auth, provider } from '../firebase'
import { useDispatch } from 'react-redux'
import { signin } from '../redux/userSlice';
import '../css/login.css'
import { signInWithPopup } from 'firebase/auth';

const Login = () => {

    const dispatch = useDispatch();

    const login = ()=>{
        signInWithPopup(auth, provider).then(({user}) =>{
          dispatch(signin({
            displayName:user.displayName,
            photoURL:user.photoURL,
            email:user.email
          }));
    }).catch(error=>
      alert(error.message));
    
};
  return (
    <div className='loginpage'>
      <div className='loginimg'>
          <button className='login_button' onClick={login}>Login with Gmail</button>
      </div>
    </div>
  )
}

export default Login
