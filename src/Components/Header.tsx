import { Button, Image, useColorMode } from '@chakra-ui/react';
import { useMediaQuery } from "@chakra-ui/react";
import { Circle, Stack, Flex, Box, Text} from '@chakra-ui/react';

function Header() {

  const {colorMode} = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    
  return (
    <Stack>
      <Circle position="absolute" bg="blue.100" opacity="0.1" size="300px" alignSelf="flex-end"/>
      <Flex direction={isNotSmallerScreen ? "row" : "column"} p={isNotSmallerScreen ? "32" : "0"}
      alignSelf="flex-start">
        

        <Box mt={isNotSmallerScreen ? "0" : "16"} alignSelf='flex-start'>
            <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
            <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Daniel Peshtewan</Text>
            <Text color={isDark ? "gray.200" : "gray.500"}>You: Nothing Special? Really? <br/> Me: Yeah... but i have to write something very long so i can check this stupid website so thanks for spending your time reading this nonsens !!!</Text>
              <Button mt={8} colorScheme="blue"
               onClick = { () => 
                 window.open("#") 
               } >Don't Click it!! Just Don't Do It</Button>
        </Box>
                <Image zIndex={1} alignSelf="flex-end" mt={isNotSmallerScreen ? "0" : "12"}
                mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full' backgroundColor="transparent"
                boxShadow="lg" boxSize="300px" src="https://imageio.forbes.com/specials-images/imageserve/5f11dce0e098ec0007bebe9b/Ninja-emoji/960x0.jpg?format=jpg&width=96"/>
      </Flex>
    </Stack>
  );
}

export default Header