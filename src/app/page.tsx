"use client";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import {useEffect, useState} from "react";
import {DEFAULT_THEME} from "@/colorSwitcher";
import {applyTheme, applyThemeFromColor} from "@/colorSwitcher/utils";
import Link from "next/link";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [theme, setTheme] = useState(DEFAULT_THEME);

    /*useEffect(() => {
        applyTheme(theme);
    }, [theme]);*/
    
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <button onClick={() => applyTheme(theme)}>Change theme</button>
          <button onClick={() => applyThemeFromColor('#fafa6e', '#2A4858')}>Set theme from color</button>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <div className={"text-primary"}>
          Observe this area when modifying the colors
        </div>
      </div>

      <div className="mb-32 text-center lg:mb-0 lg:text-left p-10">
          <div className={"ml-10 grid grid-cols-7 gap-4 p-2"}>
              <div className={"bg-primary w-32 h-32 p-2"}></div>
              <div className={"bg-secondary w-32 h-32 p-2"}></div>
              <div className={"bg-positive w-32 h-32 p-2"}></div>
              <div className={"bg-negative w-32 h-32 p-2"}></div>
              <div className={"bg-primary text-secondary w-32 h-32 p-2"}>Secondary Text</div>
              <div className={"bg-secondary text-primary w-32 h-32 p-2"}>Primary Text</div>
          </div>
      </div>
    </main>
  )
}
