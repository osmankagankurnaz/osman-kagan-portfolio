import { Box, Button, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import '@/styles/global.css';

const ProjectsCard = ({ item }) => {
  return (
    <Box role='group'>
      <Box id='card' p={"1rem"} gap={"1.25rem"} _groupHover={{ borderColor: '#FB42D3', transition: 'all .3s' }} display={"flex"} flexDir={"column"} w={"20rem"} h={"24rem"} bg={"#131313"} borderRadius={"20px"} border={"1px solid"} borderColor={"#A047FA"}  >
        <Box _groupHover={{ borderColor: '#FB42D3', transition: 'all .3s' }}  borderRadius={"10px"} border={"1px solid"} borderColor={"#A047FA"} overflow={"hidden"} alignSelf={"center"}>
          <Image w={"18rem"} h={"10rem"} src={item.url} objectFit={"cover"} />
        </Box>
        <Box w={"100%"} display={"flex"} flexDir={"column"} gap={"0.875rem"} >
          <Text fontWeight={"semibold"} fontSize={"1.25rem"} _groupHover={{ textColor: '#FB42D3', transition: 'all .3s' }} textColor={"#A047FA"}>{item.name}</Text>
          <Text color={"white"}>{item.description}</Text>
        </Box>
        <Box>
          <Link href={item.socialLink}>
            <Button _groupHover={{ bg: '#FB42D3', transition: 'all .3s' }} bg={"#A047FA"} textColor={"white"} size={"sm"}>
              {item.button}
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default ProjectsCard