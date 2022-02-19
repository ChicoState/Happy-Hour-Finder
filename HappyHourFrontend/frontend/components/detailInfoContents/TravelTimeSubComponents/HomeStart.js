import React from 'react'

const HomeStart = ({lat,lng}) => {
    return (
        <div>
        <svg width="24" height="60" version="1.1" viewBox="0 0 24 60" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <defs>
        <filter id="e" x="0%" y="0%" width="100%" height="100%">
            <feColorMatrix in="SourceGraphic" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
        </filter>
        <image id="c" width="24" height="60" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAA8CAYAAAB8SnrYAAAABmJLR0QA/wD/AP+gvaeTAAAAN0lEQVRYhe3NuREAIAzAsPBMzsyU3IWSCUIlDWC3PCOjUK+MGxgYGBgYGBgYPDNyr+oJAADAFxdqrwWqA/MqPwAAAABJRU5ErkJggg=="/>
        <mask id="b">
            <g filter="url(#e)">
                <use xlinkHref="#c"/>
            </g>
        </mask>
        <clipPath id="d">
            <rect width="24" height="60"/>
        </clipPath>
        <g id="a" clip-path="url(#d)">
            <path d="m11.352 0.015625c-6.2148 0.32812-11.238 5.5391-11.348 11.766-0.097656 5.2969 3.2422 9.8242 7.9336 11.512 0.34766 0.125 0.66797 0.3125 0.92969 0.57422l2.2852 2.2852c0.46875 0.46875 1.2266 0.46875 1.6953 0l2.2852-2.2852c0.26172-0.26172 0.58203-0.44922 0.92969-0.57422 4.6289-1.6641 7.9375-6.0938 7.9375-11.293 0-6.8438-5.7266-12.348-12.648-11.984" fill="#0c4599" fill-rule="evenodd"/>
        </g>
    </defs>
    <use mask="url(#b)" xlinkHref="#a"/>
    <path d="m13.199 28.801c0 0.66016-0.53906 1.1992-1.1992 1.1992-0.66406 0-1.1992-0.53906-1.1992-1.1992 0-0.66406 0.53516-1.1992 1.1992-1.1992 0.66016 0 1.1992 0.53516 1.1992 1.1992" fill="#0c4599" fill-rule="evenodd"/>
    <path d="m12.48 6.1523 4.0352 3.6367c0.17969 0.14453 0.28516 0.35938 0.28516 0.58594v5.7656c0 0.42188-0.35938 0.76562-0.80078 0.76562h-8c-0.44141 0-0.80078-0.34375-0.80078-0.76562v-5.7656c0-0.22656 0.10547-0.44141 0.28516-0.58594l4.0352-3.6367c0.28516-0.20312 0.67578-0.20312 0.96094 0zm-2.082 9.9883h3.2031v-3.0625c0-0.42188-0.35937-0.76562-0.80078-0.76562h-1.6016c-0.44141 0-0.80078 0.34375-0.80078 0.76562z" fill="#fff" fill-rule="evenodd"/>
</svg>
        </div>
    )
}

export default HomeStart
