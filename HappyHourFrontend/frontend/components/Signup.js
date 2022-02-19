import React, {useState, useEffect, useRef} from 'react'

const Signup = ({toggleClose}) => {
    const [signInOrUp, setSignInOrUp] = useState();
    const toggleView = () => { setSignInOrUp(!signInOrUp)}
    return (
    <div className='sign-up-container'>
        <div className='sign-up-main-container'>
            <div className='sign-up-top-main'>
                <div className='close-container'>
                    <button onClick={toggleClose}>
                        X
                    </button>
                </div>
                <h1>Welcome to Zillow</h1>
                <div className='toggle-buttons-sign-in'>
                    <div onClick={toggleView} className='toggle-btn'>
                        <a>Sign in</a>
                    </div>
                    <div onClick={toggleView} className='toggle-btn'>
                        <a>New account</a>
                    </div>
                </div>
                { signInOrUp ? (
                <div className='sign-up-form section'>
                    <form>
                        <div>
                        <p>Email</p>
                        <input placeholder='Enter email'/>
                        </div>
                        <div>
                        <p>Password</p>
                        <input placeholder='Enter Password'/>
                        </div>
                        <button>Sign In</button>
                        
                    </form>
                    <a>Forgot your password?</a>
                </div> ) : 
                (
                    <div className='sign-up-form section'>
                    <form>
                        <div>
                        <p>Email</p>
                        <input placeholder='Enter email'/>
                        </div>
                        <div>
                        <p>Password</p>
                        <input placeholder='Create Password'/>
                        </div>
                        <button>Sign In</button>
                        
                    </form>
                    
                </div>
                )
                }
            </div>
        </div>
    </div>
    )
}

export default Signup
