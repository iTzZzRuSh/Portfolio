import { Box, Flex, Heading, Icon, Text, useMediaQuery } from "@chakra-ui/react";
import { DiAndroid, DiCodeigniter, DiWebplatform } from "react-icons/di";


function Profile() {

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
          <Box alignSelf="center" px="0" py="16">
              <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
                    1
              </Heading>
                <Text fontSize="2xl" color="gray.400">Year of expierence</Text>
          </Box>
          <Box alignSelf="center" px="32" py="16">
            <Text fontWeight="bold" fontSize="2xl">Product Designer and Developer, specialised in mobile app development.</Text>
              <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
                  <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end">
                    <Icon color="white" p="4" as={DiAndroid} w="24" h="24"/> 
                    <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                        Android Apps
                    </Text>
                  </Flex>
                  <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{bg: "teal.400", }}>
                    <Icon color="black" p="4" as={DiCodeigniter} w="24" h="24"/> 
                    <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                        Flutter Apps
                    </Text>
                  </Flex>
                  <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{bg: "green.400", }}>
                    <Icon color="black" p="4" as={DiWebplatform} w="24" h="24"/> 
                    <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                        Web Apps
                    </Text>
                  </Flex>
              </Flex>
          </Box>
        </Flex>
  );
}

export default Profile