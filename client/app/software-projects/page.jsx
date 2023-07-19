'use client'
import React from 'react'
import { Box, Grid, Text } from '@chakra-ui/react'
import ProjectsCard from '@/components/ProjectCard'
import softwareProjectsData from '@/mocks/software-projects.json'

const SoftwareProjects = () => {
  return (
    <Box pt={"4rem"} pl={"6rem"} pb={"4rem"}>
      <Text fontWeight={"semibold"} fontSize={"2rem"} textColor={"white"} mb={"2.5rem"}>Software Projects</Text>
        <Grid templateColumns='repeat(3, 1fr)' gap={"2rem"} pl={"1.25rem"}>
        {
          softwareProjectsData.map((item) => (
            <ProjectsCard item={item}/>
          ))
        }
        </Grid>
    </Box>
  )
}

export default SoftwareProjects