"use client";
import './globals.scss'
import {Inter} from 'next/font/google'
import StyledJsxRegistry from './registry';
import {applyThemeFromColor, getAccessibleColor, getRGBColor, rawThemeInStyle} from "@/colorSwitcher/utils";

const inter = Inter({subsets: ['latin']})
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
              ${rawThemeInStyle("base")}
            `}
            </style>
            {children}
        </StyledJsxRegistry>
        </body>
        </html>
    )
}
