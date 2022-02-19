import React from 'react'
import Link from 'next/link'
const MenuOverlay = ({toggleMenu, setToggleMenu}) => {

    const toggleOpenOrClose = () => {
        console.log('click')
        setToggleMenu(!toggleMenu)
    }
    return (
        <div className='mobile-nav-overlay-main'>
        <div className='mobile-nav-overlay-top-section'>
            <div className='mobile-nav-overlay-top-section-inner'>
                <div onClick={toggleOpenOrClose} className='close-nav-overlay'>
<svg  width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
                    
                </div>
                <div className='nav-overlay-logo'>
                <Link href='/'>
                <svg width="110" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.098 6.364c.103-.027.15.012.211.084.35.416 1.478 1.866 1.785 2.263a.132.132 0 01-.027.19c-2.274 1.873-4.804 4.522-6.214 6.42-.03.04-.005.043.015.034 2.456-1.116 8.224-2.897 10.826-3.396V8.485L10.524 0 .333 8.485v3.797c3.159-1.981 10.457-5.048 13.764-5.918zm47.28-5.183h4.475v22.332h-4.475V1.181zm-3.315 0h-4.475v22.333h4.475V1.181zm29.713 7.72h-4.421l4.477 14.615h4.117l1.124-3.695c.446-1.468 1.19-4.209 1.19-4.209a.034.034 0 01.033-.026c.015 0 .028.01.033.026 0 0 .745 2.794 1.168 4.234l1.103 3.667h4.044L105.089 8.9h-4.109l-1.282 4.421a278.446 278.446 0 00-1.141 4.213.034.034 0 01-.033.026.034.034 0 01-.033-.026s-.69-2.698-1.137-4.213l-1.32-4.42h-3.266l-1.344 4.42c-.421 1.414-1.16 4.215-1.16 4.215a.034.034 0 01-.033.023.034.034 0 01-.032-.023s-.714-2.75-1.142-4.215l-1.281-4.42zm-19.708 7.356c0-4.44 3.393-7.729 7.544-7.729 4.11 0 7.504 3.29 7.504 7.729 0 4.453-3.392 7.743-7.504 7.743-4.15 0-7.544-3.29-7.544-7.74v-.003zm10.754 0c0-2.174-1.47-3.654-3.21-3.654-1.781 0-3.25 1.48-3.25 3.654 0 2.189 1.469 3.654 3.25 3.654 1.74 0 3.21-1.465 3.21-3.654zm-51.12-13.01v4.306h7.909c.032 0 .044.032.028.06l-7.94 14.242-.014.026c-.18.348-.223.432-.223.793v.84h15.406v-4.298H34.31a.035.035 0 01-.032-.021.039.039 0 01.004-.04l8.032-14.429.022-.046c.056-.12.11-.232.11-.532l.002-.9H27.702zm20.253-1.666c1.395 0 2.548 1.188 2.548 2.651 0 1.464-1.153 2.654-2.548 2.654s-2.547-1.188-2.547-2.652c0-1.464 1.152-2.652 2.547-2.652v-.001zm-2.237 7.32h4.474v14.613h-4.474V8.901zM5.604 20.922c.055.068.15.082.22.034 3.778-2.054 12.089-4.661 14.87-5.16v7.806H.334v-8.11c2.093-1.25 7.747-3.814 9.737-4.5.04-.014.049.01.015.037-1.91 1.497-4.904 5.03-6.371 7.301-.067.106-.063.14-.01.205l1.899 2.387zM107.409 6.104c.387 0 .663.294.663.714 0 .318-.163.569-.411.668l.381.66h-.362l-.354-.614h-.312v.612h-.318v-2.04h.713zm-.395 1.128h.375c.211 0 .366-.172.366-.411 0-.24-.155-.415-.365-.415h-.376v.826zm.299-1.836c-.676 0-1.285.43-1.543 1.088a1.833 1.833 0 00.362 1.921 1.606 1.606 0 001.82.382c.624-.273 1.031-.916 1.031-1.629-.001-.973-.748-1.761-1.67-1.762zm0 3.186c-.546 0-1.038-.347-1.247-.879a1.482 1.482 0 01.292-1.552c.386-.408.967-.53 1.471-.309.504.22.833.74.833 1.316-.001.786-.604 1.423-1.349 1.424z" fill="#006AFF"/></svg>
                </Link>
                </div>
            </div>
        </div>
        <div className='mobile-nav-main-links'>
            <ul>
                <Link href="/homes">
                    <li>
                        <div className='mobile-nav-link-text'>Buy</div>
                    </li>
                </Link>
                <Link href="/">
                    <li>
                        <div className='mobile-nav-link-text'>Rent</div>
                    </li>
                </Link>
                <Link href="/">
                    <li>
                        <div className='mobile-nav-link-text'>Sell</div>
                    </li>
                </Link>
                <Link href="/">
                    <li>
                        <div className='mobile-nav-link-text'>Home Swiper</div>
                    </li>
                </Link>
                <Link href="/">
                    <li>
                        <div className='mobile-nav-link-text'>Advertise</div>
                    </li>
                </Link>
                <Link href="/">
                    <li>
                        <div className='mobile-nav-link-text'>Help</div>
                    </li>
                </Link>
            </ul>
        </div>
    </div>
    )
}

export default MenuOverlay
