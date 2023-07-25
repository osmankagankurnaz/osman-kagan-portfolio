"use client"
import React from 'react'
import { Box, Spinner, Text } from "@chakra-ui/react";

export default function Loading() {
    return (
        <Box display={"flex"} flexDir={"column"} w={"100%"} h={"100%"} alignItems={"center"} justifyContent={"center"}>
           <Spinner color={"#A047FA"} size={"xl"} mb={"1rem"}/>
           <Text textColor={"white"}>Loading..</Text>
        </Box>
    )
}