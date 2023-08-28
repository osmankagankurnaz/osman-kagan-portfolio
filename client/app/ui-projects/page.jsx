'use client'
import React from 'react'
import { Box, Grid, SimpleGrid, Text } from '@chakra-ui/react'
import ProjectsCard from '@/components/ProjectCard'
import uiProjectsData from '@/mocks/ui-projects.json'

const UiProjects = () => {
  return (
    <Box pt={"4rem"} pl={{base:0,md:"6rem"}} pb={"2rem"}  display={"flex"} flexDirection={"column"} alignItems={{base:"center",md:"start"}}>
    <Text fontWeight={"semibold"} fontSize={{base:"2.3rem",md:"2rem"}} textColor={"white"} mb={"2.5rem"}>UI Projects</Text>
    <SimpleGrid  templateColumns={{base:"repeat(1,1fr)", md:'repeat(3, 1fr)'}} spacingX={"2rem"} pl={{base:"4rem",md:"1.25rem"}} pr={{base:"4rem",md:"7.25rem"}} >
      {
        uiProjectsData.map((item, index) => (
          <ProjectsCard item={item} index={index} />
        ))
      }
    </SimpleGrid>
  </Box>
  )
}

export default UiProjects;