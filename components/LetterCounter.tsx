/*
    Made by Stacy
  ______                       _                    _          _             
 / _____) _                   ( )                  | |        (_)  _         
( (____ _| |_ _____  ____ _   |/ ___    _ _ _ _____| |__   ___ _ _| |_ _____ 
 \____ (_   _|____ |/ ___) | | |/___)  | | | | ___ |  _ \ /___) (_   _) ___ |
 _____) )| |_/ ___ ( (___| |_| |___ |  | | | | ____| |_) )___ | | | |_| ____|
(______/  \__)_____|\____)\__  (___/    \___/|_____)____/(___/|_|  \__)_____)
                         (____/                                              
                                             
    Date: 2026/02/16
*/
import React, {useState} from 'react';
import {countLetters} from './Algo1';

export const LetterCounter: React.FC = () => {
  const [text, setText] = useState('');
  const [letter, setLetter] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

 const handleCount = () => {
    try {
      setError(null);
      const cnt = countLetters(text, letter);
      setResult(cnt);
    } catch (e: any) {
      setResult(null);
      setError(e.message);
    }
};

return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>Compteur de lettres</h2>

      <label>
        Texte&nbsp;:
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ width: '100%' }}
        />
      </label>

      <label>
        Lettre à chercher (un seul caractère)&nbsp;:
        <input
          type="text"
          value={letter}
          maxLength={1}
          onChange={(e) => setLetter(e.target.value)}
          style={{ width: '100%' }}
        />
      </label>

      <button onClick={handleCount} style={{ marginTop: 10 }}>
        Compter
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result !== null && !error && (
        <p>
          La lettre <strong>{letter}</strong> apparaît{' '}
          <strong>{result}</strong> fois dans le texte.
        </p>
      )}
    </div>
  );

}

