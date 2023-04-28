import Image from 'next/image';
import Cipher from './cipher';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <p className='fixed left-0 top-0 text-lg flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
          Get started with&nbsp;
          <code className='font-mono font-bold'>ciphers</code>
        </p>
        <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
          <Link
            className='pointer-events-none text-lg flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
            href='/'
          >
            By{' '}
            <Image
              priority
              sizes='4rem'
              src='/caesar.svg'
              alt='Caesar'
              width={150}
              height={150}
              decoding='async'
              data-nimg='1'
              className='rounded-full'
            ></Image>
          </Link>
        </div>
      </div>
      <div className="relative flex place-items-center before:absolute before:h-[700px] before:w-[880px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"></div>
      <Cipher />
      <div className='mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left'></div>
    </main>
  );
}
