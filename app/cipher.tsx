'use client';

import React, { useState } from 'react';
import { decryptMessage, encryptMessage } from '@/utils/helpers';

const SECRET_MESSAGE = 'J cvjme tpmvujpot, opu kvtu tpguxbsf';
const DECODED_MESSAGE = 'I build solutions, not just software';

const Cipher = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [userEncrypted, setUserEncrypted] = useState('');
  const [showDecrypted, setShowDecrypted] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const handleUserInput = (event: { target: { value: string } }) => {
    const input = event.target.value;
    setUserInput(input);
    setUserEncrypted(encryptMessage(input, 1));
    setShowDecrypted(false);
  };

  return (
    <div className='flex flex-col w-full justify-center items-center'>
      <h1 className='text-4xl md:text-5xl font-bold text-center mb-6 text-zinc-100'>
        Caesar Shift Cipher
      </h1>

      {/* Secret Message Section */}
      <div className='w-full max-w-2xl mb-8'>
        <p className='text-sm uppercase tracking-wide text-zinc-400 mb-3 text-center'>
          Can you decode this message?
        </p>
        <div className='p-8 rounded-2xl bg-zinc-800/50 border border-zinc-700 text-center'>
          {/* Message */}
          <div className='grid mb-6'>
            <span
              className={`col-start-1 row-start-1 text-2xl md:text-3xl font-mono transition-opacity duration-500 ${
                isRevealed ? 'opacity-0' : 'opacity-100'
              } text-zinc-300`}
            >
              {SECRET_MESSAGE}
            </span>
            <span
              className={`col-start-1 row-start-1 text-2xl md:text-3xl font-mono transition-opacity duration-500 ${
                isRevealed ? 'opacity-100' : 'opacity-0'
              } text-green-400`}
            >
              {DECODED_MESSAGE}
            </span>
          </div>
          {/* Buttons */}
          <div className='grid place-items-center'>
            <div
              className={`col-start-1 row-start-1 transition-opacity duration-400 ${
                !isRevealed ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <button
                onClick={handleReveal}
                className='px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap'
              >
                Decrypt Message
              </button>
            </div>
            <div
              className={`col-start-1 row-start-1 flex flex-col items-center gap-3 transition-opacity duration-400 ${
                isRevealed ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <p className='text-sm text-zinc-500'>
                Shifted by 1 position: B→A, C→B, D→C...
              </p>
              <button
                onClick={() => setIsRevealed(false)}
                className='px-4 py-2 text-sm bg-zinc-700 hover:bg-zinc-600 text-zinc-300 rounded-lg transition-colors'
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <article className='max-w-3xl mb-12 text-zinc-300'>
        <p className='my-3 text-lg'>
          Cryptography is the science (and art) of writing messages that no one
          but the intended receiver can read. The name derives from either the
          French word cryptographie or from Modern Latin cryptographia both of
          which find their roots in the Greek <em>kryptos</em>{' '}
          <span className='font-serif'>&ldquo;</span>hidden<span className='font-serif'>&rdquo;</span> +{' '}
          <em>graphia</em> <span className='font-serif'>&ldquo;</span>writing or recording<span className='font-serif'>&rdquo;</span>.
        </p>
        <p className='my-3 text-lg'>
          Historically, the human race needed to communicate and share
          information with others, but it also needed to communicate
          selectively. That&apos;s why this <span className='font-serif'>&ldquo;</span>art<span className='font-serif'>&rdquo;</span> started to be performed,
          hiding messages from unauthorized people until the message reaches the
          intended hand. The first evidence of cryptography is the use of
          hieroglyphs by the Egyptians.
        </p>
        <p className='my-3 text-lg'>
          Later on the Romans popularized the cryptography method known as the{' '}
          <strong className='text-zinc-100'>Caesar Shift Cipher</strong> which relies on shifting the
          letters of a message by an agreed number. Then, the receiver of the
          message would shift the letters by the same number again to obtain the
          original message.
        </p>
      </article>

      {/* Try it yourself section */}
      <div className='w-full max-w-2xl'>
        <p className='text-sm uppercase tracking-wide text-zinc-400 mb-3 text-center'>
          Try it yourself
        </p>
        <input
          className='w-full h-14 text-xl px-6 py-4 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 border-zinc-700 bg-zinc-800 text-zinc-100 placeholder:text-zinc-500'
          type='text'
          placeholder='Type a message to encrypt...'
          value={userInput}
          onChange={handleUserInput}
        />
        <div
          className={`mt-4 p-6 rounded-xl bg-blue-900/30 border border-blue-800 transition-all duration-300 ${
            userEncrypted
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-2 pointer-events-none h-0 p-0 mt-0 overflow-hidden'
          }`}
        >
          <p className='text-sm font-semibold text-blue-400 uppercase tracking-wide mb-2'>
            Encrypted (shift +1)
          </p>
          <p className='text-xl md:text-2xl font-mono text-blue-100 break-words max-h-32 overflow-y-auto'>
            {userEncrypted || '\u00A0'}
          </p>
          <button
            onClick={() => setShowDecrypted(!showDecrypted)}
            className='mt-4 px-4 py-2 text-sm bg-zinc-700 hover:bg-zinc-600 text-zinc-200 rounded-lg transition-colors'
          >
            {showDecrypted ? 'Hide' : 'Decrypt to verify'}
          </button>
          <div
            className={`mt-3 p-4 rounded-lg bg-green-900/30 border border-green-800 transition-all duration-300 ${
              showDecrypted
                ? 'opacity-100'
                : 'opacity-0 h-0 p-0 mt-0 overflow-hidden pointer-events-none'
            }`}
          >
            <p className='text-sm font-semibold text-green-400 uppercase tracking-wide mb-1'>
              Decrypted back
            </p>
            <p className='text-lg font-mono text-green-100 max-h-32 overflow-y-auto'>
              {decryptMessage(userEncrypted, 1)}
            </p>
          </div>
        </div>
      </div>

      {/* About section - collapsed */}
      <details className='w-full max-w-2xl mt-12 group'>
        <summary className='cursor-pointer text-zinc-400 hover:text-zinc-300 text-center transition-colors duration-200'>
          Learn more about Caesar Cipher
        </summary>
        <article className='mt-4 text-zinc-400 text-base space-y-4 animate-fade-in'>
          <p>
            The <strong className='text-zinc-300'>Caesar Shift Cipher</strong> is one of the oldest encryption techniques,
            used by Julius Caesar to protect military messages. It works by shifting each letter
            in the alphabet by a fixed number of positions.
          </p>
          <p>
            For example, with a shift of 1: A becomes B, B becomes C, and so on.
            To decrypt, simply shift in the opposite direction.
          </p>
          <p className='italic text-zinc-500 mt-4 text-right'>
            <span className='font-serif'>&ldquo;</span>Fere libenter homines id quod volunt credunt.<span className='font-serif'>&rdquo;</span>
            <span className='block text-sm mt-1'>— Julius Caesar</span>
          </p>
        </article>
      </details>
    </div>
  );
};

export default Cipher;
