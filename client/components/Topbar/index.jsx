'use client'

import {
  Box,
  Flex,
  HStack,
  IconButton,

  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import Link from 'next/link'



const Links = ['Dashboard', 'Projects', 'Team']

const NavLink = ({ children } ) => {
  return (
    <Box
      as="a"
      px={6}
      py={1}
      color={"white"}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const Items = [
    {
      url: "/",
      title: "Getting Started"
    },
    {
      url: "/software-projects",
      title: "Software Projects"
    },
    {
      url: "/ui-projects",
      title: "UI Projects"
    },
    {
      url: "/experience",
      title: "Experience"
    },
    {
      url: "/skills",
      title: "Skills"
    }
  ]
  
  return (
    <>
      <Box bg={"#131313"} px={4}  w={"full"}  display={{base:"flex",md:"none"}}  flexDirection={"column"} position={"block"} >
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
         
          <HStack spacing={8} alignItems={'center'}>
        
            <Box color={"white"} fontSize={"1.5rem"}>OsmanKagan.</Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}  >
            <Stack as={'nav'} spacing={4}>
              {Items.map((item,index) => (
                <Link href={item.url} key={index} >
                 <NavLink>
                  {item.title}
                  </NavLink>
                  </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  )
}