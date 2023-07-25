import React from 'react'
import { Box, CircularProgress, CircularProgressLabel, Text } from '@chakra-ui/react'

const SkillCard = ({name, value, color}) => {
    return (
        <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
            <CircularProgress value={value} color={color} size={"8rem"} thickness={"1rem"} mb={"2rem"} >
                <CircularProgressLabel color={"white"}>{value}%</CircularProgressLabel>
            </CircularProgress>
            <Text fontSize={"1.5rem"} textColor={"white"} fontWeight={"semibold"}>{name}</Text>
        </Box>
    )
}

export default SkillCard