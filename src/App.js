import React, { useState } from 'react';

// CSS styling
const styles = {
  header: {
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
  },
  backgroundColor: {
    color: '#717171',
  },

  memeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
  },
  memeImage: {
    borderRadius: '15px',
    border: '6px solid black',
    maxWidth: '100%',
  },
  input: {
    margin: '5px',
    padding: '5px',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '18px',
    border: 'none',
    cursor: 'pointer',
  },
  label: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  select: {
    fontSize: '16px',
    padding: '5px',
  },
};

function Header() {
  return (
    <header style={styles.header}>
      <h1>Meme Generator</h1>
    </header>
  );
}

function MemeGenerator() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeImageUrl, setMemeImageUrl] = useState('this is hard');
  const [selectedTemplate, setSelectedTemplate] = useState('doge');

  useState('http://memegen.link/');

  const generateMeme = () => {};
  console.log(topText);
  console.log(bottomText);
  return (
    <div style={styles.memeContainer}>
      <label style={styles.label}>Meme template</label>
      <select
        value={selectedTemplate}
        onChange={(e) => setSelectedTemplate(e.target.value)}
        style={styles.select}
      >
        <option value="doge">Doge</option>
        <option value="spongebob">Spongebob</option>
        <option value="bad">Bad</option>
        <option value="badchoice">Badchoice</option>
        <option value="because">Because</option>
      </select>
      <img
        src={`https://api.memegen.link/images/${selectedTemplate}/${memeImageUrl}${topText}/${bottomText}.png?height=300&width=400`}
        alt="Meme"
        data-test-id="meme-image"
        style={styles.memeImage}
      />
      <label>
        <input
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
          style={styles.input}
        />
      </label>
      <input
        value={bottomText}
        onChange={(e) => setBottomText(e.target.value)}
        style={styles.input}
      />
      <button onClick={generateMeme} style={styles.button}>
        Generate
      </button>

      <div className="btnDiv">
        <button id="downloadBtn" value="download">
          Download
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <MemeGenerator />
    </div>
  );
}

export default App;
