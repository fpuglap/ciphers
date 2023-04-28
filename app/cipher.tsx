'use client';

import React, { useState } from 'react';
import { decryptMessage, encryptMessage } from '@/utils/helpers';

const Cipher = () => {
  const [encryptedMessage, setEncryptedMessage] = useState('');
  const [decryptedMessage, setDecryptedMessage] = useState('');

  const handleChange = (event: { target: { value: string } }) => {
    const input = event.target.value;
    const decrypted = decryptMessage(input, 1);
    const encrypted = encryptMessage(input, 1);
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
