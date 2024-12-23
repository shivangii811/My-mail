import React from 'react'
import { auth, provider } from '../firebase'
import { useDispatch } from 'react-redux'
import { signin } from '../redux/userSlice';
import '../css/login.css'

const Login = () => {

    const dispatch = useDispatch();

    const login = ()=>{
        auth.signInWithPopup(provider).then(({user}) =>{
          dispatch(signin({
            displayName:user.displayName,
            photoURL:user.photoURL,
            email:user.email
          }))
    }).catch(error=>{
        alert(error)
    })
    
}
  return (
    <div className='loginpage'>
      <div className='loginimg'>
          <img src='https://img.freepik.com/premium-vector/set-social-media-business-icons_155083-584.jpg'/>
          <button className='login_button' onClick={login}>Login with Gmail</button>
      </div>
    </div>
  )
}

export default Login
