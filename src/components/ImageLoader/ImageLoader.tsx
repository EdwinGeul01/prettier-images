import { Box, Circle, Flex, Image } from '@chakra-ui/react';
import React from 'react'

interface ImageLoaderProps {
    imageUrl: string;

}



export const ImageLoader:React.FC<ImageLoaderProps> = ({imageUrl}) => {
  return (
    <Box  h={'full'} p={10} boxSizing={'content-box'} bg={'linear-gradient(90deg,rgba(155, 42, 149, 1) 0%, rgba(250, 22, 22, 1) 71%)'} borderRadius={'10px'} overflow={'hidden'} >
        <Box  h={'full'} border={'2px solid #292929'} borderRadius={'10px'} overflow={'hidden'} >
            <Flex className='navbar' gap={2}>
            <Circle size={4} bgColor={'#F54927'}/>
            <Circle size={4} bgColor={'#F5EB27'}/>
            <Circle size={4} bgColor={'#99E340'}/>
            </Flex>
            <Image  src={imageUrl} objectFit={"contain"} alt={"table frame"}  h={"100%"}/>

        </Box>
    </Box>

  )
}
