"use client";
import './globals.scss'
import {Inter} from 'next/font/google'
import StyledJsxRegistry from './registry';
import config from "tailwindcss/defaultConfig";
import {DEFAULT_THEME} from "@/colorSwitcher";
import {useEffect, useState} from "react";
import {applyTheme, getAccessibleColor, getRGBColor} from "@/colorSwitcher/utils";

const inter = Inter({subsets: ['latin']})

const primaryColor = getRGBColor("#257365", "primary")
const a11yColor = getRGBColor(getAccessibleColor("#000000"), "a11y")

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
        <body className={inter.className}>
            <StyledJsxRegistry>
                <style jsx global>{`
                  :root {
                    ${primaryColor} ${a11yColor}
                  }
                `}
                </style>
                {children}
            </StyledJsxRegistry>
        </body>
        </html>
    )
}
