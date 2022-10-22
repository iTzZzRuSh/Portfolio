import { IconButton } from "@chakra-ui/react";
import { Flex, Heading, Spacer, VStack } from "@chakra-ui/react";
import { useColorMode} from "@chakra-ui/react";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Social from "./Components/Social";

  function App() {

    const {colorMode, toggleColorMode} = useColorMode();
    const isDark = colorMode === "dark";

  return (
    <VStack p={5} >
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
              Don't Be So Rude <br/> Leave a Like(😁)
        </Heading>
        <Spacer></Spacer>
      <IconButton icon={<FaLinkedin/>} aria-label="Linkedin" isRound={true} onClick={toggleColorMode} ></IconButton>
      <IconButton ml="2" icon={<FaInstagram/>} aria-label="Instagram" isRound={true} onClick={toggleColorMode} ></IconButton>
      <IconButton ml="2" icon={<FaGithub/>} aria-label="GitHub" isRound={true} onClick={toggleColorMode} ></IconButton>
      <IconButton ml="8" icon={ isDark ? <FaSun/> : <FaMoon/>} aria-label="LightMode" isRound={true} onClick={toggleColorMode} ></IconButton>
      </Flex>
      <Header></Header>
      <Profile></Profile>
      <Social></Social>
    </VStack>
  );
}

export default App;
