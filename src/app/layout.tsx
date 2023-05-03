"use client";
import './globals.scss'
import {Inter} from 'next/font/google'
import StyledJsxRegistry from './registry';
import {getAccessibleColor, getRGBColor} from "@/app/colorUtil";
import config from "tailwindcss/defaultConfig";

const inter = Inter({subsets: ['latin']})

const primaryColor = getRGBColor("#d30505", "primary")
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
