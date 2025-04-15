import type { ReactNode } from 'react';
import { useState } from 'react';

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  const [greeting, setGreeting] = useState('Hey');

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Vibe.js</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <header className="bg-gray-800 text-white">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <div className="w-full md:w-64 flex flex-col flex-shrink-0 md:flex-grow-0">
              <h1 className="font-sans text-xl text-white">Vibe.js</h1>
              <p className="text-white">
                A JavaScript library for creating interactive user interfaces.
              </p>
            </div>
            <nav className="flex flex-grow flex-shrink-0 space-x-8 md:space-x-6 md:justify-end">
              <a
                href="#"
                className="py-2 px-4 rounded text-white bg-gray-800"
              >
                Docs
              </a>
              <a
                href="#"
                className="py-2 px-4 rounded text-white bg-gray-800"
              >
                Examples
              </a>
              <a
                href="#"
                className="py-2 px-4 rounded text-white bg-gray-800"
              >
                Blog
              </a>
            </nav>
          </div>
        </header>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gray-100 p-4">
              {greeting} World!
            </p>
            <div className="flex w-full justify-center">
              <button
                className="rounded bg-blue-500 px-8 py-3 text-white"
                onClick={() => setGreeting('Hello')}
              >
                Change Greeting
              </button>
            </div>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
