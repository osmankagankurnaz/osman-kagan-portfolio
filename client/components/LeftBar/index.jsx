"use client"
import { Box, Button, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Items = [
  {
    url: "/",
    title: "Getting Started"
  },
  {
    url: "/software-projects",
    title: "Software Projects"
  },
  {
    url: "/ui-projects",
    title: "UI Projects"
  },
  {
    url: "/experience",
    title: "Experience"
  },
  {
    url: "/skills",
    title: "Skills"
  }
]

const LeftBar = () => {
  return (
    <Box display={"flex"} flexDir={"column"} w={"20vw"} h={"100vh"} bg={"#131313"} p={"2rem"} >
      <Text fontWeight={"semibold"} fontSize={"2rem"} textColor={"white"} mb={"2.5rem"}>OsmanKagan.</Text>
      <Box ml={"1.25rem"}>
        {Items.map((item) => {
          return (
            <Box mb={"1.25rem"}>
              <Link href={item.url}>
                <Text color={"white"}>
                  {item.title}
                </Text>
              </Link>
            </Box>
          )
        })}
      </Box>
      <Box display={"flex"} flexDir={"column"} gap={"1rem"} justifySelf={"flex-end"} mt={"auto"}>
        <Link href={"https://www.buymeacoffee.com/osmankagankurnaz"}>
          <Image src='/buy-a-coffee.svg' />
        </Link>
        <Text textColor={"white"} textAlign={"center"} >
          Copyright © 2023 OsmanKagan<br />
          Tüm hakları saklıdır.
        </Text>
      </Box>
    </Box>
  )
}

export default LeftBar