"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "../components/TopBar";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log('Home component rendered');

  return (
    <>
      <TopBar />
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gray-50 dark:bg-gray-900 pt-20">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            GitHub Copilot
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 sm:mt-6 sm:text-xl">
            Your AI-powered coding assistant. Write code faster, smarter, and with less effort.
          </p>
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
        </section>

        {/* Features Section */}
        <section id="features" className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl">
          <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Context-Aware Suggestions
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Get intelligent code suggestions based on the context of your project.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Multi-Language Support
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Supports a wide range of programming languages to fit your needs.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Editor Integrations
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Seamlessly integrates with popular editors like VS Code, Neovim, and JetBrains IDEs.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Boilerplate Generation
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Automatically generate boilerplate code to save time and effort.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Real-Time Assistance
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Get real-time coding assistance as you type.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              AI-Powered Learning
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Leverages machine learning models trained on billions of lines of code.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section id="get-started" className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Start Using GitHub Copilot Today
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Experience the future of coding with GitHub Copilot. Try it now and see how it transforms your workflow.
          </p>
          <div className="mt-6">
            <Link
              href="/get-started"
              className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
