/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// used {useState} for adding top and bottom text and also a picture/meme
import React, { useState } from 'react';

// added <header> to show it on the webpage
function Header() {
  return (
    <header>
      <div
        style={{
          margin: '10px',
          padding: '9px',
          border: '6px solid black',
          borderRadius: '15px',
        }}
      >
        <h1>Meme Generator</h1>
      </div>
    </header>
  );
}
// here is the function {useState}
function MemeGenerator() {
  // added const (variable that can't be changed)
  const [topText, setTopText] = useState('hello');
  const [bottomText, setBottomText] = useState('');
  const [memeImageUrl, setMemeImageUrl] = useState('https://memegen.link/');

  // this is the const function to generate the text, picture etc.
  const generateMeme = () => {};
  console.log(topText);
  console.log(bottomText);
  return (
    <div className="meme-generator">
      <img
        src={`https://api.memegen.link/images/doge/${topText}/${bottomText}.png?height=300&width=400`}
        alt="Meme"
        data-test-id="meme-image" // data-test-id="generate-meme"
      />

      <label>
        {' '}
        <input value={topText} onChange={(e) => setTopText(e.target.value)} />
      </label>

      <input
        value={bottomText}
        onChange={(e) => setBottomText(e.target.value)}
      />

      <button onClick={generateMeme}>Generate</button>
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
