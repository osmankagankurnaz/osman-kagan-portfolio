import { Box, Button, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const ProjectsCard = ({ item }) => {
  return (
    <>
      <Box p={"1rem"} gap={"1.25rem"} display={"flex"} flexDir={"column"} w={"20rem"} h={"24rem"} bg={"#131313"} borderRadius={"20px"} border={"1px solid"} borderColor={"#F23533"}>
        <Box borderRadius={"10px"} border={"1px solid"} borderColor={"#F23533"} overflow={"hidden"} alignSelf={"center"}>
          <Image src={item.url} />
        </Box>
        <Box w={"100%"} display={"flex"} flexDir={"column"} gap={"0.875rem"} >
          <Text fontWeight={"semibold"} fontSize={"1.25rem"} textColor={"#FA9750"}>{item.name}</Text>
          <Text color={"white"}>{item.description}</Text>
        </Box>
        <Box>
          <Link href={item.socialLink}>
            <Button _hover={{bg:"#F23533"}} bg={"#FA9750"} textColor={"white"} size={"sm"}>
              {item.button}
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  )
}

export default ProjectsCard