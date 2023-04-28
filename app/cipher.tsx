'use client';

import React, { useState } from 'react';

function decryptCaesarCipher(ciphertext: string, key: number): string {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const shift = key % alphabet.length; // Calculate the shift amount
  let plaintext = '';

  for (let i = 0; i < ciphertext.length; i++) {
    const letter = ciphertext[i];
    const letterIndex = alphabet.indexOf(letter.toUpperCase()); // Find the index of the letter in the alphabet
    if (letterIndex === -1) {
      plaintext += letter; // If it's not a letter, add it to the plaintext as is
    } else {
      const shiftedIndex =
        (letterIndex - shift + alphabet.length) % alphabet.length; // Calculate the new index of the letter
      const shiftedLetter = alphabet[shiftedIndex];
      plaintext +=
        letter === letter.toLowerCase()
          ? shiftedLetter.toLowerCase()
          : shiftedLetter; // Maintain the case of the original letter
    }
  }

  return plaintext;
}

const encryptCaesarCipher = (str: string, num: number) => {
  num = num % 26; // Ensure num is within the range of the alphabet
  const lowerCaseStr = str.toLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newStr = '';

  for (let i = 0; i < lowerCaseStr.length; i++) {
    let currentLetter = lowerCaseStr[i];
    if (currentLetter === ' ') {
      newStr += currentLetter;
      continue;
    }
    let currentIndex = alphabet.indexOf(currentLetter); // Get current letter index in alphabet
    let newIndex = currentIndex + num; // Calculate new index based on the shift
    if (newIndex > 25) newIndex = newIndex - 26; // Handle wrapping around to the start of the alphabet
    if (newIndex < 0) newIndex = 26 + newIndex; // Handle wrapping around to the end of the alphabet
    if (str[i] === str[i].toUpperCase()) {
      newStr += alphabet[newIndex].toUpperCase();
    } else {
      newStr += alphabet[newIndex];
    }
  }
  return newStr;
};

const Cipher = () => {
  const [encryptedMessage, setEncryptedMessage] = useState('');
  const [decryptedMessage, setDecryptedMessage] = useState('');

  const handleChange = (event: { target: { value: string } }) => {
    const input = event.target.value;
    const decrypted = decryptCaesarCipher(input, 1);
    const encrypted = encryptCaesarCipher(input, 1);
    setDecryptedMessage(decrypted);
    setEncryptedMessage(encrypted);
  };

  return (
    <div className='flex z-10 w-full justify-center items-center mt-10'>
      <div className='flex flex-col w-full justify-center items-center'>
        <p className='left-0 flex w-full max-w-5xl text-4xl justify-center from-zinc-200 pb-2 dark:from-inherit lg:static lg:w-auto lg:rounded-xl'>
          <code className='font-mono font-bold'>Caesar cipher</code>
        </p>
        <input
          className='flex justify-center items-center w-6/12 h-20 text-4xl px-5 py-2 rounded-md border focus:outline-none focus:ring focus:border-[#0141ff]  border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-600 dark:bg-opacity-30 leading-tight'
          type='text'
          onChange={handleChange}
        />
        {decryptedMessage && (
          <>
            <p className='left-0 flex w-full mt-20 max-w-5xl text-4xl justify-center from-zinc-200 pb-2 dark:from-inherit lg:static lg:w-auto lg:rounded-xl'>
              Decrypted message
            </p>
            <p className='fixed left-0 flex w-full max-w-5xl text-4xl justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
              {decryptedMessage}
            </p>
          </>
        )}
        {encryptedMessage && (
          <>
            <p className='left-0 flex w-full mt-20 max-w-5xl text-4xl justify-center from-zinc-200 pb-2 dark:from-inherit lg:static lg:w-auto lg:rounded-xl'>
              Encrypted message
            </p>
            <p className='fixed left-0 flex w-full max-w-5xl text-4xl justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
              {encryptedMessage}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Cipher;
