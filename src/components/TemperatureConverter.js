import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsiusChange = (event) => {
        const celsiusValue = event.target.value;
        setCelsius(celsiusValue);
        if (celsiusValue) {
            const convertedToFahrenheit = (celsiusValue * 9/5) + 32;
            setFahrenheit(convertedToFahrenheit.toFixed(2));
        } else {
            setFahrenheit('');
        }
    };

    const handleFahrenheitChange = (event) => {
        const fahrenheitValue = event.target.value;
        setFahrenheit(fahrenheitValue);
        if (fahrenheitValue) {
            const convertedToCelsius = (fahrenheitValue - 32) * 5/9;
            setCelsius(convertedToCelsius.toFixed(2));
        } else {
            setCelsius('');
        }
    };

    const clearFields = () => {
        setCelsius('');
        setFahrenheit('');
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>
            <Typography variant="h4" gutterBottom>
                Температурный Конвертер
            </Typography>
            <TextField
                label="Градусы Цельсия"
                variant="outlined"
                value={celsius}
                onChange={handleCelsiusChange}
                type="number"
                margin="normal"
                sx={{ width: '300px' }}
            />
            <TextField
                label="Градусы Фаренгейта"
                variant="outlined"
                value={fahrenheit}
                onChange={handleFahrenheitChange}
                type="number"
                margin="normal"
                sx={{ width: '300px' }}
            />
            <Button variant="contained" color="primary" onClick={clearFields} sx={{ marginTop: 2 }}>
                Сбросить
            </Button>
        </Box>
    );
};

export default TemperatureConverter;