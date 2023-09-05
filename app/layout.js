"use client"

import Navbar from "@components/navbar"
import Footer from "@components/footer"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="lofi">
      <body className="h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
