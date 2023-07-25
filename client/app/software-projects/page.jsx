'use client'
import React from 'react'
import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import ProjectsCard from '@/components/ProjectCard'
import SoftwareProjectsData from '@/mocks/software-projects.json'

const SoftwareProjects = () => {
  return (
    <Box pt={"4rem"} pl={"6rem"} pb={"2rem"}>
      <Text fontWeight={"semibold"} fontSize={"2rem"} textColor={"white"} mb={"2.5rem"}>Software Projects</Text>
      <SimpleGrid templateColumns={'repeat(3, 1fr)'} spacingX={"2rem"} pl={"1.25rem"} pr={"7.25rem"} >
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