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
    }

    const handleClick = (e) => {
        e.preventDefault();

        const ans = testFile.find(item => data.toLowerCase() === item.word.toLowerCase());

        setResult(ans ? ans.meaning : "Word not found in the dictionary.");
    }

    // console.log(result);

    return (
        <div>
            <h1>Dictionary App</h1>
            <form onSubmit={handleClick}>
                <input 
                    type='text' 
                    placeholder='Search for a word...'
                    onChange={handleChange}
                    value={data}
                />
                <button type="submit">Search</button>
            </form>
            <p><b>Definition:</b></p> 
            <p>{result}</p>
            
        </div>
    );
}

export default App;
