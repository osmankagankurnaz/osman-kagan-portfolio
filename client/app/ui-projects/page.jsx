'use client'
import React from 'react'
import { Box, Grid, SimpleGrid, Text } from '@chakra-ui/react'
import ProjectsCard from '@/components/ProjectCard'
import uiProjectsData from '@/mocks/ui-projects.json'

const UiProjects = () => {
  return (
    <Box pt={"4rem"} pl={"6rem"} pb={"2rem"}>
      <Text fontWeight={"semibold"} fontSize={"2rem"} textColor={"white"} mb={"2.5rem"}>UI Projects</Text>
      <SimpleGrid templateColumns={'repeat(3, 1fr)'} gridTemplateRows={"masonry"} spacingX={"2rem"} pl={"1.25rem"} pr={"7.25rem"}>
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