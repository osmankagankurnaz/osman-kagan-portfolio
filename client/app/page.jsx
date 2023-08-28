'use client'
import { Box, Text} from '@chakra-ui/react';
import Image from 'next/image'
import React from 'react'
import "@/styles/global.css";
import Link from 'next/link';
import SocialMediaDatas from "@/mocks/social-links.json"
import { motion } from "framer-motion"

const GettingStarted = () => {
  return (
      <Box  display={"flex"}  justifyContent={"center"} alignItems={"center"} px={{base:15,md:0}} overflowY={"auto"} flexDir={{base:"column-reverse",md:"row"}} gap={{base:"2rem",md:"4rem"}}>
        <Box  maxW={{base:"90%",md:"auto"}}   >
          <Text textColor={"white"} fontWeight={"bold"} fontSize={"1.5rem"}>Hi, I’m Osman</Text>
          <Text fontSize={{base:"3.5rem",md:"6rem"}} fontWeight={"bold"} textColor={"white"} lineHeight={"6rem"} mb={"1rem"}>I’m <span style={{ background: "-webkit-linear-gradient(135deg,#FC41D3 0%, #A047FA 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Developer</span><br />& <span style={{ background: "-webkit-linear-gradient(135deg,#F13131 0%, #FA974F 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>UI Designer</span></Text>
          <Text textColor={"white"} fontSize={"1.25rem"} fontWeight={"normal"} mt={"1rem"} w={{base:"24rem",md:"32.5rem"}} mb={"2rem"}>I am a 3rd year Computer Engineering student at Selcuk University. I do studies and research on the web.</Text>
          <Box display={"flex"} flexDir={"row"} gap={{base:"2rem",md:"1rem"}} mb={"3rem"} flexWrap={"wrap"}>
            {SocialMediaDatas.map((item) => {
              return (
                <Box id={'social-link'} key={item.id} boxSize={{base:"4rem",md:"4rem"}} position={"relative"} borderRadius={"full"}  overflow={"hidden"} >
                  <Link href={item.link}>
                    <Image src={item.icon} fill />
                  </Link>
                </Box>
              )
            }
            )}
          </Box>
        
        </Box>
        <Box overflow={"hidden"} position={"relative"} mt={"2rem"} rounded={"full"} w={{base:"15rem",md:"28rem"}} h={{base:"15rem",md:"42rem"}} border={"2px solid"} borderColor={"white"}  >
          <Image src={"/profile.png"} fill /> 
      </Box>
      </Box>
  )
}

export default GettingStarted;