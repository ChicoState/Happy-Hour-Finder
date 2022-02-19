import React, {useState} from 'react'

const ToggleDestination = () => {
    const [checked, setChecked] = useState();
    return (
        <label class="switch">
        <input type="checkbox"/>
        <span class="slider round"></span>
      </label>

    )
}

export default ToggleDestination
