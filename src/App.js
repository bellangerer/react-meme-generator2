// used {useState} for adding top and bottom text and also a picture/meme
import React, { useState } from 'react';

// added <header> to show it on the webpage
function Header() {
  return (
    <header>
      <h1>Meme Generator</h1>44
    </header>
  );
}
// here is the function {useState}
function MemeGenerator() {
  // added const (variable that can't be changed)
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeImageUrl, setMemeImageUrl] = useState('https://memegen.link/');

  // this is the const function to generate the text, picture etc.
  const generateMeme = () => {};

  return (
    <div className="meme-generator">
      <img src={memeImageUrl} alt="Meme" />

      <input
        type="text"
        placeholder="Top text"
        value={topText}
        onChange={(e) => setTopText(e.target.value)}
      />
    </div>
  );
}
