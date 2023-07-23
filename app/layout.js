import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "lineup.love",
  description: "checkout where and when your favourite artists perform",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
