import './App.css';
import { useState } from 'react';

const testFile = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
];

function App() {
    const [data, setData] = useState('');
    const [result, setResult] = useState('');

    const handleChange = (e) => {
        setData(e.target.value);
    };

    const handleClick = () => {
        const ans = testFile.find(item => data.toLowerCase() === item.word.toLowerCase());
        console.log("Searched word:", data);
        console.log("Result:", ans ? ans.meaning : "Word not found in the dictionary.");
        setResult(ans ? ans.meaning : "Word not found in the dictionary.");
    };

    return (
        <div>
            <h1>Dictionary App</h1>
            <input 
                type='text' 
                placeholder='Search for a word...'
                onChange={handleChange}
                value={data}
            />
            <button type="button" onClick={handleClick}>Search</button>
            <div>
            <b>Definition:</b>
            <p>{result}</p>
        </div>
        </div>

    );
}

export default App;
