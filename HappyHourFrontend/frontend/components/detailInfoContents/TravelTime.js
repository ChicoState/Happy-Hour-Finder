
import TravelTimeMap from './TravelTimeSubComponents/Map'
import ToggleSwitch from './TravelTimeSubComponents/ToggleDestination';
const TravelTime = ({address}) => {
    return (
        <div>
            <div className='map-time'>
            {/* <TravelTimeMap address={address}/> */}
            </div>
            <div className='travel-time-component'>
                <div className='travel-time-toggle'>
                <p>Travel times</p>
                <ToggleSwitch />
                </div>
                <div className='work-destination-form-container'>
                <form className='work-destination-form'>
                    <div className='work-destination-inner'>
                <svg className='car-work-destination-svg' class="Icon-c11n-8-38-0__sc-13llmml-0 imaVsA hdp__sc-1jlh525-4 kCCokp" aria-hidden="true" focusable="false" role="img"><title>Car</title><path stroke="none" d="M28 12h-4l-3.42-5a2 2 0 00-1.74-1H6.32a2 2 0 00-1.84 1.21l-2.26 4.36a2.08 2.08 0 00-.22.92V20a2 2 0 002 2 4 4 0 008 0h8a4 4 0 008 0 2 2 0 002-2v-6a2 2 0 00-2-2zM14 8h4.84l2.73 4H14zM6.32 8H12v4H4.25zM8 24a2 2 0 112-2 2 2 0 01-2 2zm16 0a2 2 0 112-2 2 2 0 01-2 2zm4-4h-.54a4 4 0 00-6.92 0h-9.08a4 4 0 00-6.92 0H4v-6h24z"></path></svg>
                    <input placeholder='add work destination'/>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}


export default TravelTime
