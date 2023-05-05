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
    <div className='flex flex-col w-full justify-center items-center'>
      <h1 className='left-0 flex w-full text-4xl justify-center from-zinc-200 pb-2 dark:from-inherit lg:static lg:w-auto lg:rounded-xl'>
        <code className='font-mono font-bold'>Caesar Shift Cipher</code>
      </h1>
      <article className='mx-8'>
        <section className='indent-8 my-3 text-left w-full text-lg lg:max-w-4xl'>
          Cryptography is the science (and art) of writing messages that no one
          but the intended receiver can read. The name derives from either the
          French word cryptographie or from Modern Latin cryptographia both of
          which find their roots in the Greek <em>kryptos</em> “hidden” +{' '}
          <em>graphia</em> “writing or recording”.
        </section>
        <section className='my-3 w-full text-left text-lg from-zinc-200 pb-2 dark:from-inherit lg:max-w-4xl lg:static lg:w-auto lg:rounded-xl mx-auto'>
          Historically, the human race needed to communicate and share
          information with others, but it also needed to communicate
          selectively. That&apos;s why this “art” started to be performed,
          hiding messages from unauthorized people until the message reaches the
          intended hand. The first evidence of cryptography is the use of
          hieroglyphs by the Egyptians.
        </section>
        <section className='my-3 w-full text-left text-lg from-zinc-200 pb-2 dark:from-inherit lg:max-w-4xl lg:static lg:w-auto lg:rounded-xl mx-auto'>
          Later on the Romans popularized the cryptography method known as the{' '}
          <strong>Caesar Shift Cipher</strong> which relies on shifting the
          letters of a message by an agreed number. Then, the receiver of the
          message would shift the letters by the same number again to obtain the
          original message.
        </section>
        <section className='my-3 w-full text-left text-lg from-zinc-200 pb-2 dark:from-inherit lg:max-w-4xl lg:static lg:w-auto lg:rounded-xl mx-auto'>
          Here is a quick example: <br />
          <em>Gmfyjcjmjuz up xpsl gspn ipnf ps boz puifs qmbdf</em>
          <br />
          <br />
          To cipher this phrase using Caesar method one would shift each letter
          up in the alphabet. <br />
          plain: <em>abcdefghijklmnopqrstuvwxyz</em>
          <br />
          cipher: <em>bcdefghijklmnopqrstuvwxyza</em>
          <br />
          <br />
          In this case, G becomes F, m becomes l, f becomes e… and so on until
          you get the full phrase: Flexibility to work from home or any other
          place.
        </section>
      </article>
      <input
        className='flex justify-center items-center w-full h-20 text-4xl px-5 py-2 mt-5 rounded-md border focus:outline-none focus:ring focus:border-[#0141ff]  border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-600 dark:bg-opacity-30 leading-tight lg:w-8/12'
        type='text'
        placeholder='Give it a try...'
        onChange={handleChange}
      />
      {decryptedMessage && (
        <>
          <p className='fixed left-0 flex w-full mt-20 text-4xl justify-center from-zinc-200 pb-3 dark:from-inherit lg:static lg:w-auto lg:rounded-xl'>
            <code className='font-mono'>Decrypted message</code>
          </p>
          <p className='fixed left-0 flex w-full mx-10 text-4xl justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
            {decryptedMessage}
          </p>
        </>
      )}
      {encryptedMessage && (
        <>
          <p className='fixed left-0 flex w-full mt-20 text-4xl justify-center from-zinc-200 pb-3 dark:from-inherit lg:static lg:w-auto lg:rounded-xl'>
            <code className='font-mono'>Encrypted message</code>
          </p>
          <p className='fixed left-0 flex w-full mx-10 text-4xl justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
            {encryptedMessage}
          </p>
        </>
      )}
    </div>
  );
};

export default Cipher;
