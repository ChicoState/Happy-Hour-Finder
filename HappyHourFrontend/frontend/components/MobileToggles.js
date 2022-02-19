import React from 'react'

const MobileToggles = ({mapMobile, setMapMobile}) => {
    const toggleMap = () => {
        setMapMobile(!mapMobile);
        console.log(mapMobile)
    }

    const unclickedLayout = <> <div> <button onClick={() => toggleMap()}> <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" role="img" class="Icon-c11n-8-37-0__sc-13llmml-0 iAIyPA"><title>Map</title><path stroke="none" d="M28,3.88a2.16,2.16,0,0,0-.7.13l-6,1.9a1,1,0,0,1-.58,0L11.25,3.07a1.21,1.21,0,0,0-.5,0L3.51,4.62A2,2,0,0,0,2,6.56V25.44a2,2,0,0,0,2,2,2.12,2.12,0,0,0,.49-.06l6.26-1.33a1.16,1.16,0,0,1,.49,0l9.46,2.84a1,1,0,0,0,.6,0l7.4-2.41A2,2,0,0,0,30,24.61V5.89A2,2,0,0,0,28,3.88ZM12,5.3l8,2.4v19l-8-2.4ZM4,25.44V6.56l6-1.34v19Zm24-.83-6,2.05V7.7l6-1.81Z"></path></svg> Map</button>
</div>
<div>|</div>
<div className='toggle-mobile-overlay'>
    <button>
    <div>
        <svg viewBox="0 0 32 32" class="Icon-c11n-8-37-0__sc-13llmml-0 ezdHyn IconSortAscending-c11n-8-37-0__j24y04-0 ia-dhKN" aria-hidden="true" focusable="false" role="img"><title>Ascending Sort</title><path stroke="none" d="M3 11h14a1 1 0 000-2H3a1 1 0 000 2zM11 15H3a1 1 0 000 2h8a1 1 0 000-2zM7 21H3a1 1 0 000 2h4a1 1 0 000-2zM29.7 21.2a1 1 0 00-1.5 0L23 26.5V3a1 1 0 10-2 0v23.5l-5.2-5.3a1 1 0 00-1.5 0 1 1 0 000 1.5l6.9 7a1 1 0 00.8.3 1.1 1.1 0 00.8-.3l6.9-7a1 1 0 000-1.5z"></path></svg>
    </div>
    <div>
        <p>Sort</p>
    </div>
    </button>
</div>
</>
    const clickedLayout = <> 
    <div className='toggle-mobile-overlay'> 
    <button className='list-button' onClick={() => toggleMap()}> 
    <div>
        <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" role="img" class="Icon-c11n-8-37-0__sc-13llmml-0 iAIyPA"><title>Facts and Features</title><g stroke="none"><rect x="11" y="6" width="19" height="2" rx="0.97"></rect><rect x="11" y="15" width="19" height="2" rx="0.97"></rect><rect x="11" y="24" width="19" height="2" rx="0.97"></rect><path d="M6.69,5.69,5.4,5.45,4.77,4.22c-.15-.29-.39-.29-.54,0L3.6,5.45l-1.29.24c-.32.06-.41.31-.19.54l.93,1L2.86,8.62c0,.33.16.47.45.32l1.19-.6,1.19.6c.29.15.49,0,.45-.32L6,7.24l.93-1C7.1,6,7,5.75,6.69,5.69Z"></path><path d="M6.69,14.69,5.4,14.45l-.63-1.23c-.15-.29-.39-.29-.54,0L3.6,14.45l-1.29.24c-.32.06-.41.31-.19.54l.93,1-.19,1.38c0,.33.16.47.45.32l1.19-.6,1.19.6c.29.15.49,0,.45-.32L6,16.24l.93-1C7.1,15,7,14.75,6.69,14.69Z"></path><path d="M6.69,23.69,5.4,23.45l-.63-1.23c-.15-.29-.39-.29-.54,0L3.6,23.45l-1.29.24c-.32.06-.41.31-.19.54l.93,1-.19,1.38c0,.33.16.47.45.32l1.19-.6,1.19.6c.29.15.49,0,.45-.32L6,25.24l.93-1C7.1,24,7,23.75,6.69,23.69Z"></path></g></svg>
    </div>
    <div>
    <p>List</p>
    </div>
    </button>
    </div> </>
    return (
        <div className='toggle-mobile-main'>
            <div className='toggle-mobile-main-inner'>
                {mapMobile ? clickedLayout : unclickedLayout}
                

            </div>
        </div>
    )
}

export default MobileToggles
