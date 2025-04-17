import TopBar from "../components/TopBar";

export default function GetStarted() {
  return (
    <>
      <TopBar />
      <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gray-50 dark:bg-gray-900 pt-20">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
          Get Started with GitHub Copilot
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 sm:mt-6 sm:text-xl">
          Discover how GitHub Copilot can revolutionize your coding experience. Follow the steps below to get started.
        </p>
        <div className="mt-6">
          <ul className="list-disc text-gray-600 dark:text-gray-400">
            <li>Install GitHub Copilot in your favorite editor.</li>
            <li>Sign in with your GitHub account.</li>
            <li>Start coding and enjoy AI-powered assistance.</li>
          </ul>
        </div>
        <div className="mt-6">
          <a
            href="https://github.com/features/copilot"
            className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </main>
    </>
  );
}
