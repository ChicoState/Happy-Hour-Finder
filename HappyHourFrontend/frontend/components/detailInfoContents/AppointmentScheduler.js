import React from 'react'

const AppointmentScheduler = () => {
    return (
        <div className='schedule-main'>
            <div className='seperator'></div>
            <h2>Take a Tour with a Buyers Agent</h2>
            <p>We'll connect you with a local agent who can give you a personalized tour of the home in-person or via video chat.</p>
            <div className='scheduler-inner'>
                <p>Select an appointment type</p>
                <div className='toggle-div'>

                </div>
                <div className='days-to-choose-main'>
                <p>Select a date</p>
                <form>
                <div className='scheduler-dates'>

                </div>
                <select>
                    <option placeholder='11:00 am'/>
                </select>
                <button>
                    Request this time 
                </button>
                </form>
                </div>
                <p>Public Health Advisory</p>
            </div>
        </div>
    )
}

export default AppointmentScheduler
