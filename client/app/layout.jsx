'use client'
import React from 'react'
import { Providers } from './providers';
import LeftBar from '@/components/LeftBar';
import { Box } from '@chakra-ui/react';
import { Roboto } from "@next/font/google"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head />
      <body className={roboto.className}>
        <Providers>
          <Box display={"flex"} >
            <LeftBar />
            <Box w={"80vw"} h={"100vh"} bg={"#1F1F1F"} overflow={"auto"}>
              {children}
            </Box>
          </Box>
        </Providers>
      </body>
    </html>
  )
}