import React, { useState } from 'react'
import Image from './assets/image-1.jpg'
import Image2 from './assets/Group.jpg'
import './Login.scss'

const Login: React.FC =()=>{
const [showPass, setShowPass] = useState(false)
const [passVisible, setPassVisible] = useState(false)

const passwordVisibility = () =>{
  if(showPass === false){
    setShowPass(true)
    setPassVisible(true)
  }else{
    setShowPass(false)
    setPassVisible(false)
  }
}

  return (
    <>
      <div className={'login-container'}>
       <div className='media-q'>
       <div className={'left-section'}>
        <img src={Image2} alt="Lendsqr-Logo" className='lendsqr-logo'/>
        <img
          src={Image}
          alt="Login Illustration"
          className={'illustration'}
        />
      </div>
       </div>
      <div className={'right-section'}>
        <div className='media-q'>
        <h1 className='welcome'>Welcome!</h1>
        <p>Enter details to login.</p>
        <form className={'login-form'}>
          <div className={'password-container'}>
            <input type="email" placeholder="Email" className={'input'} />
            <input
              type={passVisible ? "text" : "password"}
              placeholder="Password"
              className={'input'}
            />
            <button type="button" className={'show-button'} onClick={passwordVisibility}>
              {showPass ? ( 
               <u className='show-b'>HIDE</u> 
               ) : (
                <u className='show-b'>SHOW</u> 
              )}
            </button>
           
          </div>
          <a href="#" className={'forgot-password'}>
            FORGOT PASSWORD?
          </a>
          <button type="submit" className={'login-button'}>
            LOG IN
          </button>
        </form>
        </div>
      </div>
    </div>
    </>
  )

}
export default Login