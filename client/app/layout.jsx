'use client'
import React from 'react'
import { Providers } from './providers';
import LeftBar from '@/components/LeftBar';
import { Box } from '@chakra-ui/react';
import { Roboto } from "next/font/google"
import { Analytics } from '@vercel/analytics/react';
import Topbar from "@/components/Topbar"
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
          <Box display={"flex"} flexDirection={{base:"column",md:"row"}} >
            <LeftBar />
            <Topbar/>
            <Box w={{base:"full",md:"80vw"}} h={"100vh"} bg={"#1F1F1F"} overflowY={"auto"}>
              {children}
            </Box>
          </Box>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}