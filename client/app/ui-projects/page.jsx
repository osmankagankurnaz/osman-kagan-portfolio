'use client'
import React from 'react'
import { Box, Grid, Text } from '@chakra-ui/react'
import ProjectsCard from '@/components/ProjectCard'
import uiProjectsData from '@/mocks/ui-projects.json'

const UiProjects = () => {
  return (
    <Box pt={"4rem"} pl={"6rem"} pb={"8rem"}>
      <Text fontWeight={"semibold"} fontSize={"2rem"} textColor={"white"} mb={"2.5rem"}>UI Projects</Text>
        <Grid templateColumns='repeat(3, 1fr)' gap={"2rem"} pl={"1.25rem"}>
        {
          uiProjectsData.map((item) => (
            <ProjectsCard item={item}/>
          ))
        }
        </Grid>
    </Box>
  )
}

export default UiProjects;