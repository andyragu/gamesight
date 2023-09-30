import React, { useState } from 'react';

function SteamIDInput() {
    const [steamId, setSteamId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `https://your-api.com/steam/${steamId}`;
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            console.log(data); // Handle the JSON object as needed
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="steamId">Steam ID:</label>
            <input
                type="text"
                id="steamId"
                value={steamId}
                onChange={(e) => setSteamId(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default SteamIDInput;
