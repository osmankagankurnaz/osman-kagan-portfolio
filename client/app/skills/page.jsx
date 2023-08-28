"use client"
import SkillCard from '@/components/SkillCard'
import { Box, SimpleGrid, Text, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import React from 'react'
const Skills = () => {
  return (
    <Box pt={"4rem"} pl={{base:0,md:"6rem"}} pb={"2rem"}  display={"flex"} justifyContent={"center"} alignItems={{base:"center",md:"normal"}} flexDirection={"column"}>
      <Text fontWeight={"semibold"} fontSize={"2rem"} textColor={"white"} mb={"2.5rem"}>Skills</Text>
      <Box pl={{base:0,md:"1.25rem"}} pr={{base:0,md:"7.25rem"}}  >
        <SimpleGrid templateColumns={{base:"repeat(2,1fr)",md:'repeat(4, 1fr)'}} pb={{base:"1rem",md:0}} spacingY={{base:"4rem",md:"8rem"}} spacingX={{base:"2rem",md:"4rem"}}>
          <SkillCard name={"HTML"} value={90} color={"#EF652B"} />
          <SkillCard name={"CSS"} value={70} color={"#2FA7DC"} />
          <SkillCard name={"Javascript"} value={80} color={"#F1BF26"} />
          <SkillCard name={"React.js"} value={60} color={"#4AD5FE"} />
          <SkillCard name={"Chakra UI"} value={80} color={"#2ABFB3"} />
          <SkillCard name={"Tailwind CSS"} value={60} color={"#37BCF8"} />
          <SkillCard name={"MongoDB"} value={20} color={"#4CA84A"} />
          <SkillCard name={"UI Design"} value={90} color={"#F24D1D"} />
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default Skills