import './App.css';

function App() {
  return (
    <div>
      <h1>Dictionary App</h1>
      <form>
        <input 
        type='text' 
        placeholder='Search for a word...'
        />
        <button>Search</button>
      </form>
      <span><b>Definition:</b></span>
    </div>
  );
}

export default App;
