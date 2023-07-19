'use client'
import React from 'react'
import { Box, Grid, Text } from '@chakra-ui/react'
import ProjectsCard from '@/components/ProjectCard'

const UiProjects = () => {
  return (
    <Box pt={"4rem"} pl={"6rem"}>
      <Text fontWeight={"semibold"} fontSize={"2rem"} textColor={"white"} mb={"2.5rem"}>UI Projects</Text>
        <Grid templateColumns='repeat(3, 1fr)' gap={"2rem"} pl={"1.25rem"}>
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
        </Grid>
    </Box>
  )
}

export default UiProjects;