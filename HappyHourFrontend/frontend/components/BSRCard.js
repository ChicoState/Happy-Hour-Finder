import React from 'react'
import Link from 'next/link';
const BSRCard = ({title, image, paragraph, link, textbutton}) => {
    return (
        <div className='bsr-card'>
            <div className='bsr-card-inner'>
                <div>
                    <img className='bsr-card-image' src={image} />
                </div>
                <div className='bsr-card-info'>
                    <h2 className='card-title'>{title}</h2>
                    <p className='card-paragraph'>{paragraph}</p>
                    <div className='card-text-btn'>
                    <Link href={`/${link}`}>
                    <a >{textbutton}</a>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BSRCard
