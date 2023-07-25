'use client'
import React from 'react'
import { Providers } from './providers';
import LeftBar from '@/components/LeftBar';
import { Box, useMediaQuery, Text } from '@chakra-ui/react';
import { Roboto } from "@next/font/google"
import { motion } from "framer-motion"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
})

export default function RootLayout({ children }) {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)', {
    fallback: false,
    ssr: true
  })
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