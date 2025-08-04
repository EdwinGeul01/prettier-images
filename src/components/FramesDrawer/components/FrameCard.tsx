import { Box, Image, Text } from '@chakra-ui/react'
import penguin from '#public/penguin.png'

export const FrameCard = () => {
  return (
  <Box w={'full'} h={'200px'} p={2}   bgColor={'gray.100'}  cursor={'pointer'} >
    <Image objectFit={'cover'} objectPosition={'0px -50px'} h={'80%'} w={'full'}  src={penguin} alt="Penguin" />
    <Box mt={2}>
       <Text fontSize={'md'} fontWeight={'bold'}>Penguin Frame</Text>
    </Box>
  </Box>


)
}
