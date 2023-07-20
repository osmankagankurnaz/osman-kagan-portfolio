'use client'
import { Box, Image, Text, Button } from '@chakra-ui/react';
import React from 'react'
import "@/styles/global.css";
import Link from 'next/link';
import SocialMediaDatas from "@/mocks/social-links.json"

const GettingStarted = () => {
  return (
    <Box w={"85vw"} h={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDir={"row"}>
      <Box>
        <Text textColor={"white"} fontWeight={"bold"} fontSize={"1.5rem"}>Hi, I’m Osman</Text>
        <Text fontSize={"6rem"} fontWeight={"bold"} textColor={"white"} lineHeight={"6rem"} mb={"1rem"}>I’m <span style={{color: "linear-gradient(124deg, #A047FA 0%, #FC41D3 100%)"}}>Developer</span><br />& <span style={{textColor: "linear-gradient(116deg, #FA974F 0%, #F13131 100%)"}}>UI Designer</span></Text>
        <Text textColor={"white"} fontSize={"1.5rem"} fontWeight={"normal"} mt={"1rem"} w={"32.5rem"} mb={"2rem"}>I am a 3rd year Computer Engineering student at Selcuk University. I do studies and research on the web.</Text>
        <Box display={"flex"} flexDir={"row"} gap={"1rem"} mb={"3rem"}>
          {SocialMediaDatas.map((item) => {
            return (
              <Box key={item.id} boxSize={"4rem"} borderRadius={"full"} overflow={"hidden"}>
                <Link href={item.link}>
                  <Image src={item.icon} />
                </Link>
              </Box>
            )
          }
          )}
        </Box>
        <Link href={""}>
          <Button textColor={"white"} bg={"transparent"} border={"1px solid"} borderColor={"white"} _hover={{textColor: "#A147FA", borderColor: "#A147FA"}}>
            Download CV
          </Button>
        </Link>
      </Box>
      <Box>

      </Box>
    </Box>
  )
}

export default GettingStarted;