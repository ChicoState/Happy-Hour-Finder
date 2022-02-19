import React, {useState} from 'react'
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

const ReactSelect = () => {
    const [selectOption, setSelectedOption] = useState(null);

    const handleChange = selectOption => {
        setSelectedOption(selectOption);
        console.log(`Option selected:`, selectedOption);
    };

    return (
        <div>
            
        </div>
    )
}

export default ReactSelect
