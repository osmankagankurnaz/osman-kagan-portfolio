import { Box, Button, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const ProjectsCard = () => {
  return (
    <Box p={"1rem"} gap={"1.25rem"} display={"flex"} flexDir={"column"} w={"20rem"} bg={"#131313"} alignItems={"flex-start"} borderRadius={"20px"}>
      <Box display={"block"} borderRadius={"10px"} overflow={"hidden"} border={"1px solid"} bgGradient={'linear(to-bl, #FA9750, #F23533)'} bgClip={"border-box"} alignSelf={"center"}>
        <Image src={"/software-projects/izzy-health.png"} />
      </Box>
      <Box w={"100%"} display={"flex"} flexDir={"row"} gap={"0.875rem"} justifyContent={"space-between"} alignItems={"center"}>
        <Text fontWeight={"semibold"} fontSize={"1.25rem"} textColor={"white"}>Music App</Text>
        <Link href={""}>
          <Button bg={"white"} textColor={"black"} size={"sm"}>
            Github
          </Button>
        </Link>
      </Box>
      {/* <Link href={""} >
          <Button bg={"#F23533"} textColor={"white"}>
            Vercel
          </Button>
        </Link> */}
    </Box>
  )
}

export default ProjectsCard