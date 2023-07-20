'use client'
import React from 'react'
import { Providers } from './providers';
import LeftBar from '@/components/LeftBar';
import { Box, useMediaQuery, Text } from '@chakra-ui/react';
import { Roboto } from "@next/font/google"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
})

export default function RootLayout({ children }) {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
  return (
    <html lang="tr">
      <head />
      <body className={roboto.className}>
        <Providers>
          {isLargerThan1280 ? (
            <Box display={"flex"} >
              <LeftBar />
              <Box w={"80vw"} h={"100vh"} bg={"#1F1F1F"} overflow={"auto"}>
                {children}
              </Box>
            </Box>
          ) : (
            <Box w={"100vw"} h={"100vh"} display={"flex"} bg={"#1F1F1F"} textColor={"white"} alignItems={"center"} justifyContent={"center"}>
              <Text fontSize={"1.5rem"} >Coming soon..</Text>
            </Box>
          )}
        </Providers>
      </body>
    </html>
  )
}