// src/components/SkipInputField.js
import React, { useState } from 'react';
import { TextField, FormControl, FormHelperText } from '@mui/material';

const SkipInputField = ({ label, onChange, name, helperText, ...props }) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (event) => {
        const { value } = event.target;
        setValue(value);

        // Call the onChange prop if provided
        if (onChange) {
            onChange(name, value);
        }
    };

    const handleBlur = () => {
        // Mark field as not having an error if it is blank
        if (value.trim() === '') {
            setError(false);
        } else {
            setError(false); // Optionally, you can add validation logic here
        }
    };

    return (
        <FormControl error={error} fullWidth>
            <TextField
                label={label}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                {...props}
            />
            {error && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    );
};

export default SkipInputField;
