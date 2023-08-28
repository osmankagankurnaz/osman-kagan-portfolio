'use client'
import React from 'react'
import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import ProjectsCard from '@/components/ProjectCard'
import SoftwareProjectsData from '@/mocks/software-projects.json'

const SoftwareProjects = () => {
  return (
    <Box pt={"4rem"} pl={{base:0,md:"6rem"}} pb={"2rem"}  display={"flex"} flexDirection={"column"} alignItems={{base:"center",md:"start"}}>
      <Text fontWeight={"semibold"} fontSize={{base:"2.3rem",md:"2rem"}} textColor={"white"} mb={"2.5rem"}>Software Projects</Text>
      <SimpleGrid  templateColumns={{base:"repeat(1,1fr)", md:'repeat(3, 1fr)'}} spacingX={"2rem"} pl={{base:"4rem",md:"1.25rem"}} pr={{base:"4rem",md:"7.25rem"}} >
        {
          SoftwareProjectsData.map((item, index) => (
            <ProjectsCard item={item} index={index} />
          ))
        }
      </SimpleGrid>
    </Box>
  )
}

export default SoftwareProjects