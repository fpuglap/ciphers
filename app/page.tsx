import Image from 'next/image';
import Cipher from './cipher';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-6 pt-28 md:p-12 md:pt-28 lg:p-24 overflow-visible'>
      {/* Mobile sticky header - outside the z-10 container */}
      <p className='fixed left-0 top-0 z-50 text-lg flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:hidden'>
        Get started with&nbsp;
        <code className='font-mono font-bold'>ciphers</code>
      </p>

      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex overflow-visible lg:mt-4'>
        {/* Desktop header - static, inside the container */}
        <p className='hidden lg:flex w-auto rounded-xl border bg-gray-200 p-4 dark:bg-zinc-800/30 backdrop-blur-2xl bg-gradient-to-b from-zinc-200 dark:from-inherit'>
          Get started with&nbsp;
          <code className='font-mono font-bold'>ciphers</code>
        </p>
        <div className='hidden lg:flex'>
          <Link
            className='flex place-items-center gap-2'
            href='/'
          >
            <p className='text-lg text-zinc-100'>
              By{' '}
            </p>
            <Image
              priority
              sizes='4rem'
              src='/caesar.svg'
              alt='Caesar'
              width={150}
              height={150}
              decoding='async'
              data-nimg='1'
              className=''
            ></Image>
          </Link>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[200px] before:w-[300px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[120px] after:w-[160px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] before:lg:w-[480px] after:lg:h-[180px] after:lg:w-[240px]">
      </div>

      {/* Mobile image - before content */}
      <div className='flex lg:hidden justify-center mb-6'>
        <Image
          priority
          src='/caesar.svg'
          alt='Caesar'
          width={100}
          height={100}
          className='rounded-full'
        />
      </div>

      <div className='flex z-10 w-full max-w-6xl justify-center items-center'>
        <Cipher />
      </div>

      <div className='mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left'></div>
    </main>
  );
}
