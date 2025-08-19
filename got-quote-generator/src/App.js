import './App.css';

const quote = "Der Winter naht.";
const character = "Ned Stark";

const quoteStyle = {
  fontStyle: 'italic',
  color: '#F8C471',
  fontSize: '1.5em',
  marginBottom: '10px',
  borderLeft: '4px solid #F8C471',
  paddingLeft: '15px'
};

const characterStyle = {
    fontSize: '0.8em',
    color: '#ccc',
    marginTop: '5px',
    display: 'block'
  };

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Game of Thrones Zitat-Generator</h1>
        <p>Ein Ort für Weisheit (und Sarkasmus) aus Westeros.</p>
      </header>
      <main>
        <blockquote style={quoteStyle}>
          "{quote}"
        </blockquote>
      </main>
      <footer style={characterStyle}>
        - {character}
      </footer>
    </div>
  );
}

export default App;