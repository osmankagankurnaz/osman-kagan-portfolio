'use client'
import { Box, Image, Text, Button } from '@chakra-ui/react';
import React from 'react'
import "@/styles/global.css";
import Link from 'next/link';
import SocialMediaDatas from "@/mocks/social-links.json"

const GettingStarted = () => {
  return (
    <Box h={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDir={"row"} gap={"4rem"}>
      <Box>
        <Text textColor={"white"} fontWeight={"bold"} fontSize={"1.5rem"}>Hi, I’m Osman</Text>
        <Text fontSize={"6rem"} fontWeight={"bold"} textColor={"white"} lineHeight={"6rem"} mb={"1rem"}>I’m <span style={{ background: "-webkit-linear-gradient(135deg,#FC41D3 0%, #A047FA 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Developer</span><br />& <span style={{ background: "-webkit-linear-gradient(135deg,#F13131 0%, #FA974F 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>UI Designer</span></Text>
        <Text textColor={"white"} fontSize={"1.25rem"} fontWeight={"normal"} mt={"1rem"} w={"32.5rem"} mb={"2rem"}>I am a 3rd year Computer Engineering student at Selcuk University. I do studies and research on the web.</Text>
        <Box display={"flex"} flexDir={"row"} gap={"1rem"} mb={"3rem"}>
          {SocialMediaDatas.map((item) => {
            return (
              <Box id={'social-link'} key={item.id} boxSize={"4rem"} borderRadius={"full"} overflow={"hidden"}>
                <Link href={item.link}>
                  <Image src={item.icon} />
                </Link>
              </Box>
            )
          }
          )}
        </Box>
        <Link href={""}>
          <Button textColor={"white"} bg={"transparent"} border={"1px solid"} borderColor={"white"} _hover={{ textColor: "#1F1F1F", bg: "white" }}>
            Download CV
          </Button>
        </Link>
      </Box>
      <Box overflow={"hidden"} borderRadius={"10rem"} w={"28rem"} h={"42rem"} border={"2px solid"} borderColor={"white"} >
          <Image src={"/profile.png"} />
      </Box>
    </Box>
  )
}

export default GettingStarted;