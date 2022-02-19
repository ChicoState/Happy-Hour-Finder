import React, {useState} from 'react'
import Link from 'next/link'
import MenuOverlay from '../MenuOverlay';
const NavMobile = () => {
    const [toggleMenuSearch, setToggleMenuSearch] = useState(false);
    const toggleOpenOrClose = () => {
        setToggleMenuSearch(!toggleMenuSearch)
    }
    const [SignUpModel, setSignUpModel] = useState(false)

    // const toggleSignUpModel = () => {
    //   setSignUpModel(!SignUpModel);
    // }
    return (
        <>
        <div className="mobile-header">
        <div className='mobile-navbar'>
        <div onClick={toggleOpenOrClose}  className='menu'>
          <span></span>
          <span></span>
          <span></span>
        </div>
    
        <div className='logo-mobile'>
        <Link href='/'>
        <svg className='mobile-zillow-logo-search' width="64" height="60" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M36.93 16.177c.273-.067.402.03.566.215.889.994 3.648 4.361 4.64 5.57l.149.183a.321.321 0 01-.076.481c-6.1 4.762-12.886 11.497-16.67 16.32-.081.104-.014.11.039.087 6.591-2.837 22.067-7.362 29.048-8.631V21.57L27.336 0 0 21.57v9.652c8.473-5.035 28.06-12.832 36.93-15.045zM59.052 56.41v-.546h-2.439v.546h.915v3.215h.6v-3.215h.924zm1.598-.546h-.989l.008 3.76h.6v-3.085l1.05 3.086h.535l1.05-3.086v3.086h.6v-3.761h-.988l-.933 2.717-.933-2.717zm-46.518-2.678a.45.45 0 00.6.089c10.135-5.221 32.432-11.852 39.894-13.119V60H0V39.373c5.614-3.169 20.793-9.686 26.118-11.432.107-.035.13.03.04.097-5.13 3.8-13.164 12.786-17.1 18.56-.176.267-.168.354-.027.519l5.1 6.069z" fill="#006AFF"/></svg>
        </Link>
        </div>

      <div className='mobile-nav-search'>
        <div className='mobile-nav-search-inner'>
          <form>
            <input placeholder="Address, neighborhood or ZIP"/>
            <button>
<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg>
            </button>
          </form>
        </div>
      </div>
      <div className='sign-in-mobile-nav-search'>
        Sign In
      </div>
    </div>
    </div>
    {toggleMenuSearch ? 
       <MenuOverlay toggleMenu={toggleMenuSearch} setToggleMenu={setToggleMenuSearch}/> : null}
    </>)
}

export default NavMobile
