import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Link,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react"
import Image from "next/image"
import NextLink from "next/link"
import React from "react"
import { IoLogoDiscord } from "react-icons/io5"
import { RiExternalLinkLine } from "react-icons/ri"

const HomePage: React.FC = () => (
  <Layout>
    <Navbar />
    <Hero />
  </Layout>
)

export default HomePage

const Layout: React.FC = ({ children }) => (
  <Box
    w="100vw"
    h={[null, "100vh"]}
    pb={32}
    bg="url('/hero-background.png'), linear-gradient(#00FF85, #885FFF)"
    bgSize="cover"
  >
    {children}
  </Box>
)

const Navbar: React.FC = () => (
  <Box bg="black">
    <SimpleGrid
      as="header"
      maxW={1024}
      p={[8, null, 4]}
      spacing={4}
      minChildWidth={360}
      alignItems="center"
      mx="auto"
    >
      <HStack spacing={4} color="white" justify={["center", null, "initial"]}>
        <Image src="/logo.png" height={42} width={42} />
        <Link isExternal href="/" as={NextLink}>
          Our Mission
        </Link>
        <Link isExternal href="/" as={NextLink}>
          Genesis Roadmap
        </Link>
      </HStack>
      <HStack spacing={4} justify={["center", null, "end"]}>
        <NextLink href="">
          <Button variant="outline" color="white" _hover={{ bg: "gray.600" }}>
            Join the Eden Angels
          </Button>
        </NextLink>
        <NextLink href="https://discord.gg/F7vTgr69Dj">
          <Button variant="solid" leftIcon={<IoLogoDiscord />}>
            Discord
          </Button>
        </NextLink>
      </HStack>
    </SimpleGrid>
  </Box>
)

const Hero: React.FC = () => (
  <Flex
    mt="10vh"
    w={["90vw", null, "80vw"]}
    maxW={1024}
    align="center"
    justify="center"
    mx="auto"
  >
    <VStack
      p={8}
      spacing={8}
      rounded={16}
      color="white"
      textAlign="center"
      background="rgba(0, 0, 0, 0.6)"
      backdropFilter="blur(100px)"
    >
      <Heading fontFamily="Px Grotesk Regular" size="3xl" lineHeight={1.2}>
        The Eden Dao is our collective journey to unfucking the planet.
      </Heading>
      <Heading fontSize={24} fontWeight={400}>
        We're going to unlock exponential growth for carbon capture by making it
        ludicrously profitable to develop high quality carbon capture projects.
      </Heading>
      <Heading fontSize={24}>
        Together will we create new CO2 removals in the world.
      </Heading>
      <NextLink href="">
        <Button
          variant="solid"
          size="lg"
          color="black"
          rightIcon={<RiExternalLinkLine />}
        >
          Check us out on Gitcoin
        </Button>
      </NextLink>
    </VStack>
  </Flex>
)
