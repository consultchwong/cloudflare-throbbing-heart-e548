import { useState } from 'react';

export default function Home() {
  const [greeting, setGreeting] = useState('Hey');

  return (
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
    </main>
  );
}
